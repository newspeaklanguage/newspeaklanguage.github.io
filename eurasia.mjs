// Copyright (c) 2026-2027, Gilad Bracha. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.

// The JavaScript host of Eurasia's wasm32 build (crates/eurasia-web): it
// instantiates the VM, gives it the host imports, loads a snapshot and runs
// it. The VM never blocks: when nothing can run before the next timer it
// returns, and this loader resumes it from a JavaScript timer, so the
// browser's event loop keeps running. Works in browsers and in Node.

const RETURNED = 0;
const EXITED = 1;
const WAITING = 2;
const FAILED = -1;

// The host-object imports of the call-based FFI (operation list, section 10;
// crates/eurasia-web). The VM names host objects by references, indices into
// `refs`: 0 is undefined and 1 the global object. An operation's arguments
// are staged one by one, then ffi_perform does it and answers the result's
// tag, whose payload ffi_result_number and ffi_result_string_copy read:
// 0 undefined, 1 null, 2 Boolean, 3 number, 4 string, 5 reference, 6 the
// host raised (the payload describes the exception), 7 a dead reference.
// The table only grows, as psoup's does; reclaiming it is open.
//
// A Newspeak closure crosses as an expat: a function that calls the VM
// (eurasia_callback), which reads the call's arguments (cb_arg_count,
// cb_arg) and stages its result, or a description of its failure, which the
// function throws. `link` gives the VM's exports, counts the VM calls under
// way (depth), and resumes the VM after a callback that came while it was
// idle (afterIdleCallback), so that the sends it queued run.
function hostObjects(bytesAt, decoder, encoder, link) {
  const refs = [undefined, globalThis];
  let callArguments = [];
  const expat = (id) => function (...args) {
    callArguments = args;
    const idle = link.depth === 0;
    link.depth += 1;
    let status;
    try {
      status = link.exports.eurasia_callback(id);
    } finally {
      link.depth -= 1;
    }
    const result = staged.pop();
    if (idle) link.afterIdleCallback();
    if (status !== 0) throw new Error(result);
    return result;
  };
  let staged = [];
  let number = 0;
  let string = new Uint8Array(0);
  const answer = (v) => {
    if (v === undefined) return 0;
    if (v === null) return 1;
    switch (typeof v) {
      case 'boolean': number = v ? 1 : 0; return 2;
      case 'number': number = v; return 3;
      case 'string': string = encoder.encode(v); return 4;
      default: refs.push(v); number = refs.length - 1; return 5;
    }
  };
  const operations = [
    (o, [k]) => o[k],
    (o, [k, v]) => { o[k] = v; },
    (o, [k]) => delete o[k],
    (o, [k]) => k in o,
    (o, [k, ...a]) => o[k](...a),
    (f, a) => f(...a),
    (c, a) => new c(...a),
    (o, [c]) => o instanceof c,
  ];
  return {
    ffi_arg_undefined: () => { staged.push(undefined); },
    ffi_arg_null: () => { staged.push(null); },
    ffi_arg_bool: (b) => { staged.push(b !== 0); },
    ffi_arg_number: (x) => { staged.push(x); },
    ffi_arg_string: (ptr, len) => { staged.push(decoder.decode(bytesAt(ptr, len))); },
    ffi_arg_ref: (r) => { staged.push(refs[r]); },
    ffi_arg_expat: (id) => { staged.push(expat(id)); },
    cb_arg_count: () => callArguments.length,
    cb_arg: (i) => answer(callArguments[i]),
    ffi_perform: (op, receiver) => {
      const args = staged;
      staged = [];
      if (receiver >= refs.length) return 7;
      try {
        return answer(operations[op](refs[receiver], args));
      } catch (e) {
        string = encoder.encode(String(e));
        return 6;
      }
    },
    ffi_result_number: () => number,
    ffi_result_string_length: () => string.length,
    ffi_result_string_copy: (ptr) => { bytesAt(ptr, string.length).set(string); },
  };
}

// Runs `snapshot` (bytes) on the VM in `wasm` (bytes or a compiled
// WebAssembly.Module). `print` receives each line the program prints.
// Answers a promise of {status: 'returned', resumes} or {status: 'exited',
// code, resumes}, where resumes counts the waits for a timer;
// a VM failure rejects it with an Error. A snapshot that is a checkpoint
// (M7) is restored into this host and continues where it was taken.
//
// With `record` set to a number n, the session is recorded
// (crates/eurasia-core/src/replay.rs), with a checkpoint after every n
// allocations (0: none); with `keep` set to k as well, the log keeps only the
// last k checkpoints and the events after the oldest of them (default 0:
// all). `onStart` is then given {log()}, where log() answers
// the log so far as bytes, for `eurasia --replay` on the command line; call
// it while the VM is not running (from a timer or an event of the page's
// own, not from a callback into Newspeak).
//
// When the program saves its image (Actors>>saveImage:), `onSaveImage` is
// given the name and the image's bytes (a copy), to keep as the page sees
// fit; without one the image is dropped, with a warning.
//
// When the program hands over a genesis image it made (deliverImage:named:,
// the build and deploy design, section 2.5), `onDeliverImage` is given the
// name and the genesis image's bytes (a copy); `genesis` turns them into a
// base image. Without one the image is dropped, with a warning.
//
// `args` are the program's arguments (strings; none by default, as in
// psoup's web host), for a fresh start.
//
// `files`, when given ({read(path) -> bytes, write(path, bytes)}: Node's),
// serves the program's file input and output (`vm readFile:`,
// `vm writeBytes:toFile:`); without it they fail (a page has no files).
export async function run(wasm, snapshot, { print = console.log, record, keep = 0, jit = 0, names = false, gcStress = 0, args = [], files, onStart, onSaveImage, onDeliverImage } = {}) {
  let memory = null;
  const link = { exports: null, depth: 0, afterIdleCallback: () => {} };
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  const bytesAt = (ptr, len) => new Uint8Array(memory.buffer, ptr, len);
  // A file's contents, or why it could not be read or written.
  let staged = new Uint8Array(0);
  const failed = (message) => { staged = encoder.encode(message); return 1; };
  const imports = {
    eurasia: {
      read_file: (ptr, len) => {
        const path = decoder.decode(bytesAt(ptr, len));
        if (!files) return failed('this host has no files');
        try { staged = new Uint8Array(files.read(path)); return 0; }
        catch (e) { return failed(`cannot read ${path}: ${e.message}`); }
      },
      write_file: (pathPtr, pathLen, ptr, len) => {
        const path = decoder.decode(bytesAt(pathPtr, pathLen));
        if (!files) return failed('this host has no files');
        try { files.write(path, bytesAt(ptr, len).slice()); return 0; }
        catch (e) { return failed(`cannot write ${path}: ${e.message}`); }
      },
      staged_length: () => staged.length,
      staged_copy: (ptr) => { bytesAt(ptr, staged.length).set(staged); },
      print: (ptr, len) => print(decoder.decode(bytesAt(ptr, len))),
      monotonic_nanos: () => Math.floor(performance.now() * 1e6),
      utc_nanos: () => Date.now() * 1e6,
      random_bytes: (ptr, len) => crypto.getRandomValues(bytesAt(ptr, len)),
      // Compiled code (newspeak/EURASIA_COMPILER_DESIGN_2026-11-19.md): a
      // module importing the VM's memory, table and runtime functions; its
      // function goes into the VM's table, whose index the VM keeps.
      install_code: (ptr, len) => {
        const vm = link.exports;
        try {
          const module = new WebAssembly.Module(bytesAt(ptr, len).slice());
          const instance = new WebAssembly.Instance(module, { env: {
            memory: vm.memory,
            table: vm.__indirect_function_table,
            send: vm.eurasia_rt_send,
            ret: vm.eurasia_rt_ret,
            interpret: vm.eurasia_rt_interpret,
            step: vm.eurasia_rt_step,
            tick: vm.eurasia_rt_tick,
            call: vm.eurasia_rt_call,
            closure: vm.eurasia_rt_closure,
            nlr: vm.eurasia_rt_nlr,
          } });
          const table = vm.__indirect_function_table;
          const index = table.grow(1);
          table.set(index, instance.exports.run);
          link.compiled = (link.compiled ?? 0) + 1;
          return index;
        } catch (e) {
          console.warn(`eurasia: compiled code refused: ${e.message}`);
          return -1;
        }
      },
      save_image: (namePtr, nameLen, ptr, len) => {
        const name = decoder.decode(bytesAt(namePtr, nameLen));
        if (onSaveImage) onSaveImage(name, bytesAt(ptr, len).slice());
        else console.warn(`eurasia: the image ${name} was dropped (this page keeps no images)`);
      },
      deliver_image: (namePtr, nameLen, ptr, len) => {
        const name = decoder.decode(bytesAt(namePtr, nameLen));
        if (onDeliverImage) onDeliverImage(name, bytesAt(ptr, len).slice());
        else console.warn(`eurasia: the genesis image ${name} was dropped (this page keeps no images)`);
      },
      ...hostObjects(bytesAt, decoder, encoder, link),
    },
  };
  const module = wasm instanceof WebAssembly.Module ? wasm : await WebAssembly.compile(wasm);
  const instance = await WebAssembly.instantiate(module, imports);
  const vm = instance.exports;
  memory = vm.memory;
  link.exports = vm;
  const call = (f) => {
    link.depth += 1;
    try {
      return f();
    } finally {
      link.depth -= 1;
    }
  };

  const buffer = vm.eurasia_buffer(snapshot.length);
  bytesAt(buffer, snapshot.length).set(snapshot);
  if (record !== undefined) vm.eurasia_record(record, keep);
  else if (jit > 0) vm.eurasia_jit(jit);
  // Compiled methods named in profiles (Mixin>>selector).
  if (names) vm.eurasia_jit_names(1);
  if (gcStress > 0) vm.eurasia_gc_stress(gcStress);
  for (const a of args) {
    const bytes = encoder.encode(a);
    bytesAt(vm.eurasia_add_arg(bytes.length), bytes.length).set(bytes);
  }
  onStart?.({
    log: () => {
      if (link.depth > 0) throw new Error('eurasia: the log cannot be taken while the VM runs');
      const n = vm.eurasia_log();
      return bytesAt(vm.eurasia_buffer_address(), n).slice();
    },
  });

  let resumes = 0;
  let timer = null;
  // The promise settles when the run first returns, exits or fails; expats
  // keep working after it has, and each idle callback resumes the VM.
  return new Promise((resolve, reject) => {
    link.afterIdleCallback = () => {
      clearTimeout(timer);
      timer = setTimeout(() => settle(call(vm.eurasia_resume)), 0);
    };
    const settle = (status) => {
      switch (status) {
        case RETURNED:
          resolve({ status: 'returned', resumes, compiled: link.compiled ?? 0 });
          return;
        case EXITED:
          resolve({ status: 'exited', code: vm.eurasia_exit_code(), resumes, compiled: link.compiled ?? 0 });
          return;
        case WAITING: {
          const delay = (vm.eurasia_wakeup_nanos() - performance.now() * 1e6) / 1e6;
          clearTimeout(timer);
          timer = setTimeout(() => {
            resumes += 1;
            settle(call(vm.eurasia_resume));
          }, Math.max(0, delay));
          return;
        }
        case FAILED:
          reject(new Error(decoder.decode(bytesAt(vm.eurasia_error(), vm.eurasia_buffer_length()))));
          return;
        default:
          reject(new Error(`eurasia: unknown status ${status}`));
      }
    };
    settle(call(vm.eurasia_start));
  });
}

// Runs genesis on a genesis image (bytes) on the VM in `wasm`, as
// `eurasia genesis.eus base.eus` does on the command line, in a VM of its
// own: the genesis entry builds the platform and writes the base image, which
// is answered (bytes). `print` gets what genesis prints.
export async function genesis(wasm, genesisImage, { print = console.log } = {}) {
  let base = null;
  const result = await run(wasm, genesisImage, {
    print,
    args: ['base.eus'],
    files: {
      read: (path) => { throw new Error(`genesis reads no files (${path})`); },
      write: (path, bytes) => { base = bytes; },
    },
  });
  if (base === null) throw new Error(`genesis wrote no image (${result.status}${result.status === 'exited' ? ` ${result.code}` : ''})`);
  return base;
}
