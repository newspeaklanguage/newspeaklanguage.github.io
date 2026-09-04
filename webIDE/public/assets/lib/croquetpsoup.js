// include: shell.js
// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(moduleArg) => Promise<Module>
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof Module != 'undefined' ? Module : {};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

var ENVIRONMENT_IS_WEB = true;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)
// include: meta/croquet-pre.js
/* Croquet startup gate for the Newspeak runtime, linked in via --pre-js.

   Newspeak's main:args: must not run until the Croquet session has produced a
   view. HopscotchShell>>setupCroquetView reaches for the global theView, and
   Session.join is asynchronous, so without a gate Newspeak boots first, finds
   theView undefined, and dies with

       Alien doesNotUnderstand: #addSubscription:eventSpec:handler:

   We therefore hold an Emscripten run dependency across the join. run() re-checks
   runDependencies after calling preRun precisely so that a preRun callback can do
   this ("a preRun added a dependency, run will be called later"). The release side
   is in NewspeakCroquetView's constructor in croquet-post.js, which calls
   removeRunDependency once storeModelAndView has published the model and view.

   The original hand-maintained croquetpsoup.js did this by editing the generated
   glue directly, naming the dependency with getUniqueRunDependency. That function
   is gone in Emscripten 4.x, and a fixed name is sufficient for a single
   dependency. Using Module['preRun'] keeps it to supported hooks, so nothing here
   depends on the shape of generated code.

   croquetInitDone is read here and assigned by storeModelAndView: if the session
   somehow completes before preRun runs, we take no dependency and never gate. */

var croquetDepId = 'croquet';
var croquetInitDone = false;
var croquetDepActive = false;

Module['preRun'] = Module['preRun'] || [];
Module['preRun'].push(function () {
  if (!croquetInitDone) {
    croquetDepActive = true;
    addRunDependency(croquetDepId);
  }
});
// end include: meta/croquet-pre.js


var arguments_ = [];
var thisProgram = './this.program';
var quit_ = (status, toThrow) => {
  throw toThrow;
};

// In MODULARIZE mode _scriptName needs to be captured already at the very top of the page immediately when the page is parsed, so it is generated there
// before the page load. In non-MODULARIZE modes generate it here.
var _scriptName = typeof document != 'undefined' ? document.currentScript?.src : undefined;

// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var readAsync, readBinary;

if (ENVIRONMENT_IS_SHELL) {

  const isNode = typeof process == 'object' && process.versions?.node && process.type != 'renderer';
  if (isNode || typeof window == 'object' || typeof WorkerGlobalScope != 'undefined') throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');

} else

// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  try {
    scriptDirectory = new URL('.', _scriptName).href; // includes trailing slash
  } catch {
    // Must be a `blob:` or `data:` URL (e.g. `blob:http://site.com/etc/etc`), we cannot
    // infer anything from them.
  }

  if (!(typeof window == 'object' || typeof WorkerGlobalScope != 'undefined')) throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');

  {
// include: web_or_worker_shell_read.js
readAsync = async (url) => {
    assert(!isFileURI(url), "readAsync does not work with file:// URLs");
    var response = await fetch(url, { credentials: 'same-origin' });
    if (response.ok) {
      return response.arrayBuffer();
    }
    throw new Error(response.status + ' : ' + response.url);
  };
// end include: web_or_worker_shell_read.js
  }
} else
{
  throw new Error('environment detection error');
}

var out = console.log.bind(console);
var err = console.error.bind(console);

var IDBFS = 'IDBFS is no longer included by default; build with -lidbfs.js';
var PROXYFS = 'PROXYFS is no longer included by default; build with -lproxyfs.js';
var WORKERFS = 'WORKERFS is no longer included by default; build with -lworkerfs.js';
var FETCHFS = 'FETCHFS is no longer included by default; build with -lfetchfs.js';
var ICASEFS = 'ICASEFS is no longer included by default; build with -licasefs.js';
var JSFILEFS = 'JSFILEFS is no longer included by default; build with -ljsfilefs.js';
var OPFS = 'OPFS is no longer included by default; build with -lopfs.js';

var NODEFS = 'NODEFS is no longer included by default; build with -lnodefs.js';

// perform assertions in shell.js after we set up out() and err(), as otherwise
// if an assertion fails it cannot print the message

assert(!ENVIRONMENT_IS_WORKER, 'worker environment detected but not enabled at build time.  Add `worker` to `-sENVIRONMENT` to enable.');

assert(!ENVIRONMENT_IS_NODE, 'node environment detected but not enabled at build time.  Add `node` to `-sENVIRONMENT` to enable.');

assert(!ENVIRONMENT_IS_SHELL, 'shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.');

// end include: shell.js

// include: preamble.js
// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

var wasmBinary;

if (typeof WebAssembly != 'object') {
  err('no native wasm support detected');
}

// Wasm globals

//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS;

// In STRICT mode, we only define assert() when ASSERTIONS is set.  i.e. we
// don't define it at all in release modes.  This matches the behaviour of
// MINIMAL_RUNTIME.
// TODO(sbc): Make this the default even without STRICT enabled.
/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed' + (text ? ': ' + text : ''));
  }
}

// We used to include malloc/free by default in the past. Show a helpful error in
// builds with assertions.

/**
 * Indicates whether filename is delivered via file protocol (as opposed to http/https)
 * @noinline
 */
var isFileURI = (filename) => filename.startsWith('file://');

// include: runtime_common.js
// include: runtime_stack_check.js
// Initializes the stack cookie. Called at the startup of main and at the startup of each thread in pthreads mode.
function writeStackCookie() {
  var max = _emscripten_stack_get_end();
  assert((max & 3) == 0);
  // If the stack ends at address zero we write our cookies 4 bytes into the
  // stack.  This prevents interference with SAFE_HEAP and ASAN which also
  // monitor writes to address zero.
  if (max == 0) {
    max += 4;
  }
  // The stack grow downwards towards _emscripten_stack_get_end.
  // We write cookies to the final two words in the stack and detect if they are
  // ever overwritten.
  HEAPU32[((max)>>2)] = 0x02135467;
  HEAPU32[(((max)+(4))>>2)] = 0x89BACDFE;
  // Also test the global address 0 for integrity.
  HEAPU32[((0)>>2)] = 1668509029;
}

function checkStackCookie() {
  if (ABORT) return;
  var max = _emscripten_stack_get_end();
  // See writeStackCookie().
  if (max == 0) {
    max += 4;
  }
  var cookie1 = HEAPU32[((max)>>2)];
  var cookie2 = HEAPU32[(((max)+(4))>>2)];
  if (cookie1 != 0x02135467 || cookie2 != 0x89BACDFE) {
    abort(`Stack overflow! Stack cookie has been overwritten at ${ptrToString(max)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${ptrToString(cookie2)} ${ptrToString(cookie1)}`);
  }
  // Also test the global address 0 for integrity.
  if (HEAPU32[((0)>>2)] != 0x63736d65 /* 'emsc' */) {
    abort('Runtime error: The application has corrupted its heap memory area (address zero)!');
  }
}
// end include: runtime_stack_check.js
// include: runtime_exceptions.js
// end include: runtime_exceptions.js
// include: runtime_debug.js
var runtimeDebug = true; // Switch to false at runtime to disable logging at the right times

// Used by XXXXX_DEBUG settings to output debug messages.
function dbg(...args) {
  if (!runtimeDebug && typeof runtimeDebug != 'undefined') return;
  // TODO(sbc): Make this configurable somehow.  Its not always convenient for
  // logging to show up as warnings.
  console.warn(...args);
}

// Endianness check
(() => {
  var h16 = new Int16Array(1);
  var h8 = new Int8Array(h16.buffer);
  h16[0] = 0x6373;
  if (h8[0] !== 0x73 || h8[1] !== 0x63) throw 'Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)';
})();

function consumedModuleProp(prop) {
  if (!Object.getOwnPropertyDescriptor(Module, prop)) {
    Object.defineProperty(Module, prop, {
      configurable: true,
      set() {
        abort(`Attempt to set \`Module.${prop}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`);

      }
    });
  }
}

function makeInvalidEarlyAccess(name) {
  return () => assert(false, `call to '${name}' via reference taken before Wasm module initialization`);

}

function ignoredModuleProp(prop) {
  if (Object.getOwnPropertyDescriptor(Module, prop)) {
    abort(`\`Module.${prop}\` was supplied but \`${prop}\` not included in INCOMING_MODULE_JS_API`);
  }
}

// forcing the filesystem exports a few things by default
function isExportedByForceFilesystem(name) {
  return name === 'FS_createPath' ||
         name === 'FS_createDataFile' ||
         name === 'FS_createPreloadedFile' ||
         name === 'FS_unlink' ||
         name === 'addRunDependency' ||
         // The old FS has some functionality that WasmFS lacks.
         name === 'FS_createLazyFile' ||
         name === 'FS_createDevice' ||
         name === 'removeRunDependency';
}

/**
 * Intercept access to a global symbol.  This enables us to give informative
 * warnings/errors when folks attempt to use symbols they did not include in
 * their build, or no symbols that no longer exist.
 */
function hookGlobalSymbolAccess(sym, func) {
  if (typeof globalThis != 'undefined' && !Object.getOwnPropertyDescriptor(globalThis, sym)) {
    Object.defineProperty(globalThis, sym, {
      configurable: true,
      get() {
        func();
        return undefined;
      }
    });
  }
}

function missingGlobal(sym, msg) {
  hookGlobalSymbolAccess(sym, () => {
    warnOnce(`\`${sym}\` is not longer defined by emscripten. ${msg}`);
  });
}

missingGlobal('buffer', 'Please use HEAP8.buffer or wasmMemory.buffer');
missingGlobal('asm', 'Please use wasmExports instead');

function missingLibrarySymbol(sym) {
  hookGlobalSymbolAccess(sym, () => {
    // Can't `abort()` here because it would break code that does runtime
    // checks.  e.g. `if (typeof SDL === 'undefined')`.
    var msg = `\`${sym}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`;
    // DEFAULT_LIBRARY_FUNCS_TO_INCLUDE requires the name as it appears in
    // library.js, which means $name for a JS name with no prefix, or name
    // for a JS name like _name.
    var librarySymbol = sym;
    if (!librarySymbol.startsWith('_')) {
      librarySymbol = '$' + sym;
    }
    msg += ` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${librarySymbol}')`;
    if (isExportedByForceFilesystem(sym)) {
      msg += '. Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you';
    }
    warnOnce(msg);
  });

  // Any symbol that is not included from the JS library is also (by definition)
  // not exported on the Module object.
  unexportedRuntimeSymbol(sym);
}

function unexportedRuntimeSymbol(sym) {
  if (!Object.getOwnPropertyDescriptor(Module, sym)) {
    Object.defineProperty(Module, sym, {
      configurable: true,
      get() {
        var msg = `'${sym}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;
        if (isExportedByForceFilesystem(sym)) {
          msg += '. Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you';
        }
        abort(msg);
      }
    });
  }
}

// end include: runtime_debug.js
// Memory management

var wasmMemory;

var
/** @type {!Int8Array} */
  HEAP8,
/** @type {!Uint8Array} */
  HEAPU8,
/** @type {!Int16Array} */
  HEAP16,
/** @type {!Uint16Array} */
  HEAPU16,
/** @type {!Int32Array} */
  HEAP32,
/** @type {!Uint32Array} */
  HEAPU32,
/** @type {!Float32Array} */
  HEAPF32,
/** @type {!Float64Array} */
  HEAPF64;

var runtimeInitialized = false;



function updateMemoryViews() {
  var b = wasmMemory.buffer;
  HEAP8 = new Int8Array(b);
  HEAP16 = new Int16Array(b);
  HEAPU8 = new Uint8Array(b);
  HEAPU16 = new Uint16Array(b);
  HEAP32 = new Int32Array(b);
  HEAPU32 = new Uint32Array(b);
  HEAPF32 = new Float32Array(b);
  HEAPF64 = new Float64Array(b);
}

// include: memoryprofiler.js
// end include: memoryprofiler.js
// end include: runtime_common.js
assert(typeof Int32Array != 'undefined' && typeof Float64Array !== 'undefined' && Int32Array.prototype.subarray != undefined && Int32Array.prototype.set != undefined,
       'JS engine does not provide full typed array support');

function preRun() {
  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }
  consumedModuleProp('preRun');
  // Begin ATPRERUNS hooks
  callRuntimeCallbacks(onPreRuns);
  // End ATPRERUNS hooks
}

function initRuntime() {
  assert(!runtimeInitialized);
  runtimeInitialized = true;

  checkStackCookie();

  // No ATINITS hooks

  wasmExports['__wasm_call_ctors']();

  // No ATPOSTCTORS hooks
}

function postRun() {
  checkStackCookie();
   // PThreads reuse the runtime from the main thread.

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }
  consumedModuleProp('postRun');

  // Begin ATPOSTRUNS hooks
  callRuntimeCallbacks(onPostRuns);
  // End ATPOSTRUNS hooks
}

// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled
var runDependencyTracking = {};
var runDependencyWatcher = null;

function addRunDependency(id) {
  runDependencies++;

  Module['monitorRunDependencies']?.(runDependencies);

  if (id) {
    assert(!runDependencyTracking[id]);
    runDependencyTracking[id] = 1;
    if (runDependencyWatcher === null && typeof setInterval != 'undefined') {
      // Check for missing dependencies every few seconds
      runDependencyWatcher = setInterval(() => {
        if (ABORT) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
          return;
        }
        var shown = false;
        for (var dep in runDependencyTracking) {
          if (!shown) {
            shown = true;
            err('still waiting on run dependencies:');
          }
          err(`dependency: ${dep}`);
        }
        if (shown) {
          err('(end of list)');
        }
      }, 10000);
    }
  } else {
    err('warning: run dependency added without ID');
  }
}

function removeRunDependency(id) {
  runDependencies--;

  Module['monitorRunDependencies']?.(runDependencies);

  if (id) {
    assert(runDependencyTracking[id]);
    delete runDependencyTracking[id];
  } else {
    err('warning: run dependency removed without ID');
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

/** @param {string|number=} what */
function abort(what) {
  Module['onAbort']?.(what);

  what = 'Aborted(' + what + ')';
  // TODO(sbc): Should we remove printing and leave it up to whoever
  // catches the exception?
  err(what);

  ABORT = true;

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  // FIXME This approach does not work in Wasm EH because it currently does not assume
  // all RuntimeErrors are from traps; it decides whether a RuntimeError is from
  // a trap or not based on a hidden field within the object. So at the moment
  // we don't have a way of throwing a wasm trap from JS. TODO Make a JS API that
  // allows this in the wasm spec.

  // Suppress closure compiler warning here. Closure compiler's builtin extern
  // definition for WebAssembly.RuntimeError claims it takes no arguments even
  // though it can.
  // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure gets fixed.
  /** @suppress {checkTypes} */
  var e = new WebAssembly.RuntimeError(what);

  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

// show errors on likely calls to FS when it was not included
var FS = {
  error() {
    abort('Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with -sFORCE_FILESYSTEM');
  },
  init() { FS.error() },
  createDataFile() { FS.error() },
  createPreloadedFile() { FS.error() },
  createLazyFile() { FS.error() },
  open() { FS.error() },
  mkdev() { FS.error() },
  registerDevice() { FS.error() },
  analyzePath() { FS.error() },

  ErrnoError() { FS.error() },
};


function createExportWrapper(name, nargs) {
  return (...args) => {
    assert(runtimeInitialized, `native function \`${name}\` called before runtime initialization`);
    var f = wasmExports[name];
    assert(f, `exported native function \`${name}\` not found`);
    // Only assert for too many arguments. Too few can be valid since the missing arguments will be zero filled.
    assert(args.length <= nargs, `native function \`${name}\` called with ${args.length} args but expects ${nargs}`);
    return f(...args);
  };
}

var wasmBinaryFile;

function findWasmBinary() {
    return locateFile('primordialsoup.wasm');
}

function getBinarySync(file) {
  if (file == wasmBinaryFile && wasmBinary) {
    return new Uint8Array(wasmBinary);
  }
  if (readBinary) {
    return readBinary(file);
  }
  throw 'both async and sync fetching of the wasm failed';
}

async function getWasmBinary(binaryFile) {
  // If we don't have the binary yet, load it asynchronously using readAsync.
  if (!wasmBinary) {
    // Fetch the binary using readAsync
    try {
      var response = await readAsync(binaryFile);
      return new Uint8Array(response);
    } catch {
      // Fall back to getBinarySync below;
    }
  }

  // Otherwise, getBinarySync should be able to get it synchronously
  return getBinarySync(binaryFile);
}

async function instantiateArrayBuffer(binaryFile, imports) {
  try {
    var binary = await getWasmBinary(binaryFile);
    var instance = await WebAssembly.instantiate(binary, imports);
    return instance;
  } catch (reason) {
    err(`failed to asynchronously prepare wasm: ${reason}`);

    // Warn on some common problems.
    if (isFileURI(wasmBinaryFile)) {
      err(`warning: Loading from a file URI (${wasmBinaryFile}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`);
    }
    abort(reason);
  }
}

async function instantiateAsync(binary, binaryFile, imports) {
  if (!binary && typeof WebAssembly.instantiateStreaming == 'function'
     ) {
    try {
      var response = fetch(binaryFile, { credentials: 'same-origin' });
      var instantiationResult = await WebAssembly.instantiateStreaming(response, imports);
      return instantiationResult;
    } catch (reason) {
      // We expect the most common failure cause to be a bad MIME type for the binary,
      // in which case falling back to ArrayBuffer instantiation should work.
      err(`wasm streaming compile failed: ${reason}`);
      err('falling back to ArrayBuffer instantiation');
      // fall back of instantiateArrayBuffer below
    };
  }
  return instantiateArrayBuffer(binaryFile, imports);
}

function getWasmImports() {
  // prepare imports
  return {
    'env': wasmImports,
    'wasi_snapshot_preview1': wasmImports,
  }
}

// Create the wasm instance.
// Receives the wasm imports, returns the exports.
async function createWasm() {
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    wasmExports = instance.exports;

    

    wasmMemory = wasmExports['memory'];
    
    assert(wasmMemory, 'memory not found in wasm exports');
    updateMemoryViews();

    wasmTable = wasmExports['__indirect_function_table'];
    
    assert(wasmTable, 'table not found in wasm exports');

    assignWasmExports(wasmExports);
    removeRunDependency('wasm-instantiate');
    return wasmExports;
  }
  // wait for the pthread pool (if any)
  addRunDependency('wasm-instantiate');

  // Prefer streaming instantiation if available.
  // Async compilation can be confusing when an error on the page overwrites Module
  // (for example, if the order of elements is wrong, and the one defining Module is
  // later), so we save Module and check it later.
  var trueModule = Module;
  function receiveInstantiationResult(result) {
    // 'result' is a ResultObject object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    assert(Module === trueModule, 'the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?');
    trueModule = null;
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above PTHREADS-enabled path.
    return receiveInstance(result['instance']);
  }

  var info = getWasmImports();

  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to
  // run the instantiation parallel to any other async startup actions they are
  // performing.
  // Also pthreads and wasm workers initialize the wasm instance through this
  // path.
  if (Module['instantiateWasm']) {
    return new Promise((resolve, reject) => {
      try {
        Module['instantiateWasm'](info, (mod, inst) => {
          resolve(receiveInstance(mod, inst));
        });
      } catch(e) {
        err(`Module.instantiateWasm callback failed with error: ${e}`);
        reject(e);
      }
    });
  }

  wasmBinaryFile ??= findWasmBinary();
  var result = await instantiateAsync(wasmBinary, wasmBinaryFile, info);
  var exports = receiveInstantiationResult(result);
  return exports;
}

// Globals used by JS i64 conversions (see makeSetValue)
var tempDouble;
var tempI64;

// end include: preamble.js

// Begin JS library code


  class ExitStatus {
      name = 'ExitStatus';
      constructor(status) {
        this.message = `Program terminated with exit(${status})`;
        this.status = status;
      }
    }

  var callRuntimeCallbacks = (callbacks) => {
      while (callbacks.length > 0) {
        // Pass the module as the first argument.
        callbacks.shift()(Module);
      }
    };
  var onPostRuns = [];
  var addOnPostRun = (cb) => onPostRuns.push(cb);

  var onPreRuns = [];
  var addOnPreRun = (cb) => onPreRuns.push(cb);


  
    /**
     * @param {number} ptr
     * @param {string} type
     */
  function getValue(ptr, type = 'i8') {
    if (type.endsWith('*')) type = '*';
    switch (type) {
      case 'i1': return HEAP8[ptr];
      case 'i8': return HEAP8[ptr];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': abort('to do getValue(i64) use WASM_BIGINT');
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      case '*': return HEAPU32[((ptr)>>2)];
      default: abort(`invalid type for getValue: ${type}`);
    }
  }

  var noExitRuntime = true;

  var ptrToString = (ptr) => {
      assert(typeof ptr === 'number');
      // With CAN_ADDRESS_2GB or MEMORY64, pointers are already unsigned.
      ptr >>>= 0;
      return '0x' + ptr.toString(16).padStart(8, '0');
    };

  
    /**
     * @param {number} ptr
     * @param {number} value
     * @param {string} type
     */
  function setValue(ptr, value, type = 'i8') {
    if (type.endsWith('*')) type = '*';
    switch (type) {
      case 'i1': HEAP8[ptr] = value; break;
      case 'i8': HEAP8[ptr] = value; break;
      case 'i16': HEAP16[((ptr)>>1)] = value; break;
      case 'i32': HEAP32[((ptr)>>2)] = value; break;
      case 'i64': abort('to do setValue(i64) use WASM_BIGINT');
      case 'float': HEAPF32[((ptr)>>2)] = value; break;
      case 'double': HEAPF64[((ptr)>>3)] = value; break;
      case '*': HEAPU32[((ptr)>>2)] = value; break;
      default: abort(`invalid type for setValue: ${type}`);
    }
  }

  var stackRestore = (val) => __emscripten_stack_restore(val);

  var stackSave = () => _emscripten_stack_get_current();

  var warnOnce = (text) => {
      warnOnce.shown ||= {};
      if (!warnOnce.shown[text]) {
        warnOnce.shown[text] = 1;
        err(text);
      }
    };

  var UTF8Decoder = typeof TextDecoder != 'undefined' ? new TextDecoder() : undefined;
  
  var findStringEnd = (heapOrArray, idx, maxBytesToRead, ignoreNul) => {
      var maxIdx = idx + maxBytesToRead;
      if (ignoreNul) return maxIdx;
      // TextDecoder needs to know the byte length in advance, it doesn't stop on
      // null terminator by itself.
      // As a tiny code save trick, compare idx against maxIdx using a negation,
      // so that maxBytesToRead=undefined/NaN means Infinity.
      while (heapOrArray[idx] && !(idx >= maxIdx)) ++idx;
      return idx;
    };
  
    /**
     * Given a pointer 'idx' to a null-terminated UTF8-encoded string in the given
     * array that contains uint8 values, returns a copy of that string as a
     * Javascript String object.
     * heapOrArray is either a regular array, or a JavaScript typed array view.
     * @param {number=} idx
     * @param {number=} maxBytesToRead
     * @param {boolean=} ignoreNul - If true, the function will not stop on a NUL character.
     * @return {string}
     */
  var UTF8ArrayToString = (heapOrArray, idx = 0, maxBytesToRead, ignoreNul) => {
  
      var endPtr = findStringEnd(heapOrArray, idx, maxBytesToRead, ignoreNul);
  
      // When using conditional TextDecoder, skip it for short strings as the overhead of the native call is not worth it.
      if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
        return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
      }
      var str = '';
      // If building with TextDecoder, we have already computed the string length
      // above, so test loop end condition against that
      while (idx < endPtr) {
        // For UTF8 byte structure, see:
        // http://en.wikipedia.org/wiki/UTF-8#Description
        // https://www.ietf.org/rfc/rfc2279.txt
        // https://tools.ietf.org/html/rfc3629
        var u0 = heapOrArray[idx++];
        if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
        var u1 = heapOrArray[idx++] & 63;
        if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
        var u2 = heapOrArray[idx++] & 63;
        if ((u0 & 0xF0) == 0xE0) {
          u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
        } else {
          if ((u0 & 0xF8) != 0xF0) warnOnce('Invalid UTF-8 leading byte ' + ptrToString(u0) + ' encountered when deserializing a UTF-8 string in wasm memory to a JS string!');
          u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heapOrArray[idx++] & 63);
        }
  
        if (u0 < 0x10000) {
          str += String.fromCharCode(u0);
        } else {
          var ch = u0 - 0x10000;
          str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
        }
      }
      return str;
    };
  
    /**
     * Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the
     * emscripten HEAP, returns a copy of that string as a Javascript String object.
     *
     * @param {number} ptr
     * @param {number=} maxBytesToRead - An optional length that specifies the
     *   maximum number of bytes to read. You can omit this parameter to scan the
     *   string until the first 0 byte. If maxBytesToRead is passed, and the string
     *   at [ptr, ptr+maxBytesToReadr[ contains a null byte in the middle, then the
     *   string will cut short at that byte index.
     * @param {boolean=} ignoreNul - If true, the function will not stop on a NUL character.
     * @return {string}
     */
  var UTF8ToString = (ptr, maxBytesToRead, ignoreNul) => {
      assert(typeof ptr == 'number', `UTF8ToString expects a number (got ${typeof ptr})`);
      return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead, ignoreNul) : '';
    };
  var SYSCALLS = {
  varargs:undefined,
  getStr(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },
  };
  function ___syscall_fcntl64(fd, cmd, varargs) {
  SYSCALLS.varargs = varargs;
  
      return 0;
    }

  var ___syscall_fstat64 = (fd, buf) => {
  abort('it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM');
  };

  function ___syscall_ioctl(fd, op, varargs) {
  SYSCALLS.varargs = varargs;
  
      return 0;
    }

  var ___syscall_lstat64 = (path, buf) => {
  abort('it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM');
  };

  var ___syscall_newfstatat = (dirfd, path, buf, flags) => {
  abort('it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM');
  };

  function ___syscall_openat(dirfd, path, flags, varargs) {
  SYSCALLS.varargs = varargs;
  
  abort('it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM');
  }

  var ___syscall_stat64 = (path, buf) => {
  abort('it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM');
  };

  var __abort_js = () =>
      abort('native code called abort()');

  var __emscripten_throw_longjmp = () => {
      throw Infinity;
    };

  var stringToUTF8Array = (str, heap, outIdx, maxBytesToWrite) => {
      assert(typeof str === 'string', `stringToUTF8Array expects a string (got ${typeof str})`);
      // Parameter maxBytesToWrite is not optional. Negative values, 0, null,
      // undefined and false each don't write out any bytes.
      if (!(maxBytesToWrite > 0))
        return 0;
  
      var startIdx = outIdx;
      var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
      for (var i = 0; i < str.length; ++i) {
        // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description
        // and https://www.ietf.org/rfc/rfc2279.txt
        // and https://tools.ietf.org/html/rfc3629
        var u = str.codePointAt(i);
        if (u <= 0x7F) {
          if (outIdx >= endIdx) break;
          heap[outIdx++] = u;
        } else if (u <= 0x7FF) {
          if (outIdx + 1 >= endIdx) break;
          heap[outIdx++] = 0xC0 | (u >> 6);
          heap[outIdx++] = 0x80 | (u & 63);
        } else if (u <= 0xFFFF) {
          if (outIdx + 2 >= endIdx) break;
          heap[outIdx++] = 0xE0 | (u >> 12);
          heap[outIdx++] = 0x80 | ((u >> 6) & 63);
          heap[outIdx++] = 0x80 | (u & 63);
        } else {
          if (outIdx + 3 >= endIdx) break;
          if (u > 0x10FFFF) warnOnce('Invalid Unicode code point ' + ptrToString(u) + ' encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).');
          heap[outIdx++] = 0xF0 | (u >> 18);
          heap[outIdx++] = 0x80 | ((u >> 12) & 63);
          heap[outIdx++] = 0x80 | ((u >> 6) & 63);
          heap[outIdx++] = 0x80 | (u & 63);
          // Gotcha: if codePoint is over 0xFFFF, it is represented as a surrogate pair in UTF-16.
          // We need to manually skip over the second code unit for correct iteration.
          i++;
        }
      }
      // Null-terminate the pointer to the buffer.
      heap[outIdx] = 0;
      return outIdx - startIdx;
    };
  var stringToUTF8 = (str, outPtr, maxBytesToWrite) => {
      assert(typeof maxBytesToWrite == 'number', 'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
      return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
    };
  
  var lengthBytesUTF8 = (str) => {
      var len = 0;
      for (var i = 0; i < str.length; ++i) {
        // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code
        // unit, not a Unicode code point of the character! So decode
        // UTF16->UTF32->UTF8.
        // See http://unicode.org/faq/utf_bom.html#utf16-3
        var c = str.charCodeAt(i); // possibly a lead surrogate
        if (c <= 0x7F) {
          len++;
        } else if (c <= 0x7FF) {
          len += 2;
        } else if (c >= 0xD800 && c <= 0xDFFF) {
          len += 4; ++i;
        } else {
          len += 3;
        }
      }
      return len;
    };
  var __tzset_js = (timezone, daylight, std_name, dst_name) => {
      // TODO: Use (malleable) environment variables instead of system settings.
      var currentYear = new Date().getFullYear();
      var winter = new Date(currentYear, 0, 1);
      var summer = new Date(currentYear, 6, 1);
      var winterOffset = winter.getTimezoneOffset();
      var summerOffset = summer.getTimezoneOffset();
  
      // Local standard timezone offset. Local standard time is not adjusted for
      // daylight savings.  This code uses the fact that getTimezoneOffset returns
      // a greater value during Standard Time versus Daylight Saving Time (DST).
      // Thus it determines the expected output during Standard Time, and it
      // compares whether the output of the given date the same (Standard) or less
      // (DST).
      var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
  
      // timezone is specified as seconds west of UTC ("The external variable
      // `timezone` shall be set to the difference, in seconds, between
      // Coordinated Universal Time (UTC) and local standard time."), the same
      // as returned by stdTimezoneOffset.
      // See http://pubs.opengroup.org/onlinepubs/009695399/functions/tzset.html
      HEAPU32[((timezone)>>2)] = stdTimezoneOffset * 60;
  
      HEAP32[((daylight)>>2)] = Number(winterOffset != summerOffset);
  
      var extractZone = (timezoneOffset) => {
        // Why inverse sign?
        // Read here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
        var sign = timezoneOffset >= 0 ? "-" : "+";
  
        var absOffset = Math.abs(timezoneOffset)
        var hours = String(Math.floor(absOffset / 60)).padStart(2, "0");
        var minutes = String(absOffset % 60).padStart(2, "0");
  
        return `UTC${sign}${hours}${minutes}`;
      }
  
      var winterName = extractZone(winterOffset);
      var summerName = extractZone(summerOffset);
      assert(winterName);
      assert(summerName);
      assert(lengthBytesUTF8(winterName) <= 16, `timezone name truncated to fit in TZNAME_MAX (${winterName})`);
      assert(lengthBytesUTF8(summerName) <= 16, `timezone name truncated to fit in TZNAME_MAX (${summerName})`);
      if (summerOffset < winterOffset) {
        // Northern hemisphere
        stringToUTF8(winterName, std_name, 17);
        stringToUTF8(summerName, dst_name, 17);
      } else {
        stringToUTF8(winterName, dst_name, 17);
        stringToUTF8(summerName, std_name, 17);
      }
    };

  var _emscripten_get_now = () => performance.now();
  
  var _emscripten_date_now = () => Date.now();
  
  var nowIsMonotonic = 1;
  
  var checkWasiClock = (clock_id) => clock_id >= 0 && clock_id <= 3;
  
  var convertI32PairToI53Checked = (lo, hi) => {
      assert(lo == (lo >>> 0) || lo == (lo|0)); // lo should either be a i32 or a u32
      assert(hi === (hi|0));                    // hi should be a i32
      return ((hi + 0x200000) >>> 0 < 0x400001 - !!lo) ? (lo >>> 0) + hi * 4294967296 : NaN;
    };
  function _clock_time_get(clk_id,ignored_precision_low, ignored_precision_high,ptime) {
    var ignored_precision = convertI32PairToI53Checked(ignored_precision_low, ignored_precision_high);
  
  
      if (!checkWasiClock(clk_id)) {
        return 28;
      }
      var now;
      // all wasi clocks but realtime are monotonic
      if (clk_id === 0) {
        now = _emscripten_date_now();
      } else if (nowIsMonotonic) {
        now = _emscripten_get_now();
      } else {
        return 52;
      }
      // "now" is in ms, and wasi times are in ns.
      var nsec = Math.round(now * 1000 * 1000);
      (tempI64 = [nsec>>>0,(tempDouble = nsec,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? (+(Math.floor((tempDouble)/4294967296.0)))>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)], HEAP32[((ptime)>>2)] = tempI64[0],HEAP32[(((ptime)+(4))>>2)] = tempI64[1]);
      return 0;
    ;
  }

  var getHeapMax = () =>
      // Stay one Wasm page short of 4GB: while e.g. Chrome is able to allocate
      // full 4GB Wasm memories, the size will wrap back to 0 bytes in Wasm side
      // for any code that deals with heap sizes, which would require special
      // casing all heap size related code to treat 0 specially.
      2147483648;
  
  var alignMemory = (size, alignment) => {
      assert(alignment, "alignment argument is required");
      return Math.ceil(size / alignment) * alignment;
    };
  
  var growMemory = (size) => {
      var oldHeapSize = wasmMemory.buffer.byteLength;
      var pages = ((size - oldHeapSize + 65535) / 65536) | 0;
      try {
        // round size grow request up to wasm page size (fixed 64KB per spec)
        wasmMemory.grow(pages); // .grow() takes a delta compared to the previous size
        updateMemoryViews();
        return 1 /*success*/;
      } catch(e) {
        err(`growMemory: Attempted to grow heap from ${oldHeapSize} bytes to ${size} bytes, but got error: ${e}`);
      }
      // implicit 0 return to save code size (caller will cast "undefined" into 0
      // anyhow)
    };
  var _emscripten_resize_heap = (requestedSize) => {
      var oldSize = HEAPU8.length;
      // With CAN_ADDRESS_2GB or MEMORY64, pointers are already unsigned.
      requestedSize >>>= 0;
      // With multithreaded builds, races can happen (another thread might increase the size
      // in between), so return a failure, and let the caller retry.
      assert(requestedSize > oldSize);
  
      // Memory resize rules:
      // 1.  Always increase heap size to at least the requested size, rounded up
      //     to next page multiple.
      // 2a. If MEMORY_GROWTH_LINEAR_STEP == -1, excessively resize the heap
      //     geometrically: increase the heap size according to
      //     MEMORY_GROWTH_GEOMETRIC_STEP factor (default +20%), At most
      //     overreserve by MEMORY_GROWTH_GEOMETRIC_CAP bytes (default 96MB).
      // 2b. If MEMORY_GROWTH_LINEAR_STEP != -1, excessively resize the heap
      //     linearly: increase the heap size by at least
      //     MEMORY_GROWTH_LINEAR_STEP bytes.
      // 3.  Max size for the heap is capped at 2048MB-WASM_PAGE_SIZE, or by
      //     MAXIMUM_MEMORY, or by ASAN limit, depending on which is smallest
      // 4.  If we were unable to allocate as much memory, it may be due to
      //     over-eager decision to excessively reserve due to (3) above.
      //     Hence if an allocation fails, cut down on the amount of excess
      //     growth, in an attempt to succeed to perform a smaller allocation.
  
      // A limit is set for how much we can grow. We should not exceed that
      // (the wasm binary specifies it, so if we tried, we'd fail anyhow).
      var maxHeapSize = getHeapMax();
      if (requestedSize > maxHeapSize) {
        err(`Cannot enlarge memory, requested ${requestedSize} bytes, but the limit is ${maxHeapSize} bytes!`);
        return false;
      }
  
      // Loop through potential heap size increases. If we attempt a too eager
      // reservation that fails, cut down on the attempted size and reserve a
      // smaller bump instead. (max 3 times, chosen somewhat arbitrarily)
      for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown); // ensure geometric growth
        // but limit overreserving (default to capping at +96MB overgrowth at most)
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296 );
  
        var newSize = Math.min(maxHeapSize, alignMemory(Math.max(requestedSize, overGrownHeapSize), 65536));
  
        var replacement = growMemory(newSize);
        if (replacement) {
  
          return true;
        }
      }
      err(`Failed to grow the heap from ${oldSize} bytes to ${newSize} bytes, not enough memory!`);
      return false;
    };

  var ENV = {
  };
  
  var getExecutableName = () => thisProgram || './this.program';
  var getEnvStrings = () => {
      if (!getEnvStrings.strings) {
        // Default values.
        // Browser language detection #8751
        var lang = ((typeof navigator == 'object' && navigator.language) || 'C').replace('-', '_') + '.UTF-8';
        var env = {
          'USER': 'web_user',
          'LOGNAME': 'web_user',
          'PATH': '/',
          'PWD': '/',
          'HOME': '/home/web_user',
          'LANG': lang,
          '_': getExecutableName()
        };
        // Apply the user-provided values, if any.
        for (var x in ENV) {
          // x is a key in ENV; if ENV[x] is undefined, that means it was
          // explicitly set to be so. We allow user code to do that to
          // force variables with default values to remain unset.
          if (ENV[x] === undefined) delete env[x];
          else env[x] = ENV[x];
        }
        var strings = [];
        for (var x in env) {
          strings.push(`${x}=${env[x]}`);
        }
        getEnvStrings.strings = strings;
      }
      return getEnvStrings.strings;
    };
  
  var _environ_get = (__environ, environ_buf) => {
      var bufSize = 0;
      var envp = 0;
      for (var string of getEnvStrings()) {
        var ptr = environ_buf + bufSize;
        HEAPU32[(((__environ)+(envp))>>2)] = ptr;
        bufSize += stringToUTF8(string, ptr, Infinity) + 1;
        envp += 4;
      }
      return 0;
    };

  
  var _environ_sizes_get = (penviron_count, penviron_buf_size) => {
      var strings = getEnvStrings();
      HEAPU32[((penviron_count)>>2)] = strings.length;
      var bufSize = 0;
      for (var string of strings) {
        bufSize += lengthBytesUTF8(string) + 1;
      }
      HEAPU32[((penviron_buf_size)>>2)] = bufSize;
      return 0;
    };

  
  var runtimeKeepaliveCounter = 0;
  var keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0;
  var _proc_exit = (code) => {
      EXITSTATUS = code;
      if (!keepRuntimeAlive()) {
        Module['onExit']?.(code);
        ABORT = true;
      }
      quit_(code, new ExitStatus(code));
    };
  
  
  /** @suppress {duplicate } */
  /** @param {boolean|number=} implicit */
  var exitJS = (status, implicit) => {
      EXITSTATUS = status;
  
      checkUnflushedContent();
  
      // if exit() was called explicitly, warn the user if the runtime isn't actually being shut down
      if (keepRuntimeAlive() && !implicit) {
        var msg = `program exited (with status: ${status}), but keepRuntimeAlive() is set (counter=${runtimeKeepaliveCounter}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;
        err(msg);
      }
  
      _proc_exit(status);
    };
  var _exit = exitJS;

  var _fd_close = (fd) => {
      abort('fd_close called without SYSCALLS_REQUIRE_FILESYSTEM');
    };

  var _fd_read = (fd, iov, iovcnt, pnum) => {
      abort('fd_read called without SYSCALLS_REQUIRE_FILESYSTEM');
    };

  function _fd_seek(fd,offset_low, offset_high,whence,newOffset) {
    var offset = convertI32PairToI53Checked(offset_low, offset_high);
  
  
      return 70;
    ;
  }

  var printCharBuffers = [null,[],[]];
  
  var printChar = (stream, curr) => {
      var buffer = printCharBuffers[stream];
      assert(buffer);
      if (curr === 0 || curr === 10) {
        (stream === 1 ? out : err)(UTF8ArrayToString(buffer));
        buffer.length = 0;
      } else {
        buffer.push(curr);
      }
    };
  
  var flush_NO_FILESYSTEM = () => {
      // flush anything remaining in the buffers during shutdown
      _fflush(0);
      if (printCharBuffers[1].length) printChar(1, 10);
      if (printCharBuffers[2].length) printChar(2, 10);
    };
  
  
  var _fd_write = (fd, iov, iovcnt, pnum) => {
      // hack to support printf in SYSCALLS_REQUIRE_FILESYSTEM=0
      var num = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[((iov)>>2)];
        var len = HEAPU32[(((iov)+(4))>>2)];
        iov += 8;
        for (var j = 0; j < len; j++) {
          printChar(fd, HEAPU8[ptr+j]);
        }
        num += len;
      }
      HEAPU32[((pnum)>>2)] = num;
      return 0;
    };

  var wasmTableMirror = [];
  
  /** @type {WebAssembly.Table} */
  var wasmTable;
  var getWasmTableEntry = (funcPtr) => {
      var func = wasmTableMirror[funcPtr];
      if (!func) {
        /** @suppress {checkTypes} */
        wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
      }
      /** @suppress {checkTypes} */
      assert(wasmTable.get(funcPtr) == func, 'JavaScript-side Wasm function table mirror is out of date!');
      return func;
    };


  var writeArrayToMemory = (array, buffer) => {
      assert(array.length >= 0, 'writeArrayToMemory array must have a length (should be an array or typed array)')
      HEAP8.set(array, buffer);
    };
// End JS library code

// include: postlibrary.js
// This file is included after the automatically-generated JS library code
// but before the wasm module is created.

{

  // Begin ATMODULES hooks
  if (Module['noExitRuntime']) noExitRuntime = Module['noExitRuntime'];
if (Module['print']) out = Module['print'];
if (Module['printErr']) err = Module['printErr'];
if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];

Module['FS_createDataFile'] = FS.createDataFile;
Module['FS_createPreloadedFile'] = FS.createPreloadedFile;

  // End ATMODULES hooks

  checkIncomingModuleAPI();

  if (Module['arguments']) arguments_ = Module['arguments'];
  if (Module['thisProgram']) thisProgram = Module['thisProgram'];

  // Assertions on removed incoming Module JS APIs.
  assert(typeof Module['memoryInitializerPrefixURL'] == 'undefined', 'Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead');
  assert(typeof Module['pthreadMainPrefixURL'] == 'undefined', 'Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead');
  assert(typeof Module['cdInitializerPrefixURL'] == 'undefined', 'Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead');
  assert(typeof Module['filePackagePrefixURL'] == 'undefined', 'Module.filePackagePrefixURL option was removed, use Module.locateFile instead');
  assert(typeof Module['read'] == 'undefined', 'Module.read option was removed');
  assert(typeof Module['readAsync'] == 'undefined', 'Module.readAsync option was removed (modify readAsync in JS)');
  assert(typeof Module['readBinary'] == 'undefined', 'Module.readBinary option was removed (modify readBinary in JS)');
  assert(typeof Module['setWindowTitle'] == 'undefined', 'Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)');
  assert(typeof Module['TOTAL_MEMORY'] == 'undefined', 'Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY');
  assert(typeof Module['ENVIRONMENT'] == 'undefined', 'Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)');
  assert(typeof Module['STACK_SIZE'] == 'undefined', 'STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time')
  // If memory is defined in wasm, the user can't provide it, or set INITIAL_MEMORY
  assert(typeof Module['wasmMemory'] == 'undefined', 'Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally');
  assert(typeof Module['INITIAL_MEMORY'] == 'undefined', 'Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically');

}

// Begin runtime exports
  Module['stringToUTF8'] = stringToUTF8;
  Module['writeArrayToMemory'] = writeArrayToMemory;
  var missingLibrarySymbols = [
  'writeI53ToI64',
  'writeI53ToI64Clamped',
  'writeI53ToI64Signaling',
  'writeI53ToU64Clamped',
  'writeI53ToU64Signaling',
  'readI53FromI64',
  'readI53FromU64',
  'convertI32PairToI53',
  'convertU32PairToI53',
  'stackAlloc',
  'getTempRet0',
  'setTempRet0',
  'zeroMemory',
  'withStackSave',
  'strError',
  'inetPton4',
  'inetNtop4',
  'inetPton6',
  'inetNtop6',
  'readSockaddr',
  'writeSockaddr',
  'readEmAsmArgs',
  'jstoi_q',
  'autoResumeAudioContext',
  'dynCallLegacy',
  'getDynCaller',
  'dynCall',
  'handleException',
  'runtimeKeepalivePush',
  'runtimeKeepalivePop',
  'callUserCallback',
  'maybeExit',
  'asmjsMangle',
  'asyncLoad',
  'mmapAlloc',
  'HandleAllocator',
  'getNativeTypeSize',
  'getUniqueRunDependency',
  'addOnInit',
  'addOnPostCtor',
  'addOnPreMain',
  'addOnExit',
  'STACK_SIZE',
  'STACK_ALIGN',
  'POINTER_SIZE',
  'ASSERTIONS',
  'ccall',
  'cwrap',
  'convertJsFunctionToWasm',
  'getEmptyTableSlot',
  'updateTableMap',
  'getFunctionAddress',
  'addFunction',
  'removeFunction',
  'intArrayFromString',
  'intArrayToString',
  'AsciiToString',
  'stringToAscii',
  'UTF16ToString',
  'stringToUTF16',
  'lengthBytesUTF16',
  'UTF32ToString',
  'stringToUTF32',
  'lengthBytesUTF32',
  'stringToNewUTF8',
  'stringToUTF8OnStack',
  'registerKeyEventCallback',
  'maybeCStringToJsString',
  'findEventTarget',
  'getBoundingClientRect',
  'fillMouseEventData',
  'registerMouseEventCallback',
  'registerWheelEventCallback',
  'registerUiEventCallback',
  'registerFocusEventCallback',
  'fillDeviceOrientationEventData',
  'registerDeviceOrientationEventCallback',
  'fillDeviceMotionEventData',
  'registerDeviceMotionEventCallback',
  'screenOrientation',
  'fillOrientationChangeEventData',
  'registerOrientationChangeEventCallback',
  'fillFullscreenChangeEventData',
  'registerFullscreenChangeEventCallback',
  'JSEvents_requestFullscreen',
  'JSEvents_resizeCanvasForFullscreen',
  'registerRestoreOldStyle',
  'hideEverythingExceptGivenElement',
  'restoreHiddenElements',
  'setLetterbox',
  'softFullscreenResizeWebGLRenderTarget',
  'doRequestFullscreen',
  'fillPointerlockChangeEventData',
  'registerPointerlockChangeEventCallback',
  'registerPointerlockErrorEventCallback',
  'requestPointerLock',
  'fillVisibilityChangeEventData',
  'registerVisibilityChangeEventCallback',
  'registerTouchEventCallback',
  'fillGamepadEventData',
  'registerGamepadEventCallback',
  'registerBeforeUnloadEventCallback',
  'fillBatteryEventData',
  'registerBatteryEventCallback',
  'setCanvasElementSize',
  'getCanvasElementSize',
  'jsStackTrace',
  'getCallstack',
  'convertPCtoSourceLocation',
  'wasiRightsToMuslOFlags',
  'wasiOFlagsToMuslOFlags',
  'initRandomFill',
  'randomFill',
  'safeSetTimeout',
  'setImmediateWrapped',
  'safeRequestAnimationFrame',
  'clearImmediateWrapped',
  'registerPostMainLoop',
  'registerPreMainLoop',
  'getPromise',
  'makePromise',
  'idsToPromises',
  'makePromiseCallback',
  'ExceptionInfo',
  'findMatchingCatch',
  'Browser_asyncPrepareDataCounter',
  'isLeapYear',
  'ydayFromDate',
  'arraySum',
  'addDays',
  'getSocketFromFD',
  'getSocketAddress',
  'heapObjectForWebGLType',
  'toTypedArrayIndex',
  'webgl_enable_ANGLE_instanced_arrays',
  'webgl_enable_OES_vertex_array_object',
  'webgl_enable_WEBGL_draw_buffers',
  'webgl_enable_WEBGL_multi_draw',
  'webgl_enable_EXT_polygon_offset_clamp',
  'webgl_enable_EXT_clip_control',
  'webgl_enable_WEBGL_polygon_mode',
  'emscriptenWebGLGet',
  'computeUnpackAlignedImageSize',
  'colorChannelsInGlTextureFormat',
  'emscriptenWebGLGetTexPixelData',
  'emscriptenWebGLGetUniform',
  'webglGetUniformLocation',
  'webglPrepareUniformLocationsBeforeFirstUse',
  'webglGetLeftBracePos',
  'emscriptenWebGLGetVertexAttrib',
  '__glGetActiveAttribOrUniform',
  'writeGLArray',
  'registerWebGlEventCallback',
  'runAndAbortIfError',
  'ALLOC_NORMAL',
  'ALLOC_STACK',
  'allocate',
  'writeStringToMemory',
  'writeAsciiToMemory',
  'demangle',
  'stackTrace',
];
missingLibrarySymbols.forEach(missingLibrarySymbol)

  var unexportedSymbols = [
  'run',
  'addRunDependency',
  'removeRunDependency',
  'out',
  'err',
  'callMain',
  'abort',
  'wasmMemory',
  'wasmExports',
  'HEAPF32',
  'HEAPF64',
  'HEAP8',
  'HEAPU8',
  'HEAP16',
  'HEAPU16',
  'HEAP32',
  'HEAPU32',
  'HEAP64',
  'HEAPU64',
  'writeStackCookie',
  'checkStackCookie',
  'convertI32PairToI53Checked',
  'stackSave',
  'stackRestore',
  'ptrToString',
  'exitJS',
  'getHeapMax',
  'growMemory',
  'ENV',
  'ERRNO_CODES',
  'DNS',
  'Protocols',
  'Sockets',
  'timers',
  'warnOnce',
  'readEmAsmArgsArray',
  'getExecutableName',
  'keepRuntimeAlive',
  'alignMemory',
  'wasmTable',
  'noExitRuntime',
  'addOnPreRun',
  'addOnPostRun',
  'freeTableIndexes',
  'functionsInTableMap',
  'setValue',
  'getValue',
  'PATH',
  'PATH_FS',
  'UTF8Decoder',
  'UTF8ArrayToString',
  'UTF8ToString',
  'stringToUTF8Array',
  'lengthBytesUTF8',
  'UTF16Decoder',
  'JSEvents',
  'specialHTMLTargets',
  'findCanvasEventTarget',
  'currentFullscreenStrategy',
  'restoreOldWindowedStyle',
  'UNWIND_CACHE',
  'ExitStatus',
  'getEnvStrings',
  'checkWasiClock',
  'flush_NO_FILESYSTEM',
  'emSetImmediate',
  'emClearImmediate_deps',
  'emClearImmediate',
  'promiseMap',
  'uncaughtExceptionCount',
  'exceptionLast',
  'exceptionCaught',
  'Browser',
  'requestFullscreen',
  'requestFullScreen',
  'setCanvasSize',
  'getUserMedia',
  'createContext',
  'getPreloadedImageData__data',
  'wget',
  'MONTH_DAYS_REGULAR',
  'MONTH_DAYS_LEAP',
  'MONTH_DAYS_REGULAR_CUMULATIVE',
  'MONTH_DAYS_LEAP_CUMULATIVE',
  'SYSCALLS',
  'tempFixedLengthArray',
  'miniTempWebGLFloatBuffers',
  'miniTempWebGLIntBuffers',
  'GL',
  'AL',
  'GLUT',
  'EGL',
  'GLEW',
  'IDBStore',
  'SDL',
  'SDL_gfx',
  'allocateUTF8',
  'allocateUTF8OnStack',
  'print',
  'printErr',
  'jstoi_s',
];
unexportedSymbols.forEach(unexportedRuntimeSymbol);

  // End runtime exports
  // Begin JS library exports
  // End JS library exports

// end include: postlibrary.js

function checkIncomingModuleAPI() {
  ignoredModuleProp('fetchSettings');
}
function _JS_initializeAliens() { var aliens = new Array(); aliens.push(undefined); aliens.push(null); aliens.push(false); aliens.push(true); aliens.push(window); Module.aliens = aliens; }
function _JS_pushInteger(value) { var aliens = Module.aliens; aliens.push(value); }
function _JS_pushFloat(value) { var aliens = Module.aliens; aliens.push(value); }
function _JS_pushString(addr,size) { var aliens = Module.aliens; var value = UTF8ToString(addr, size); aliens.push(value); }
function _JS_pushAlien(index) { var aliens = Module.aliens; aliens.push(aliens[index]); }
function _JS_pushExpat(index) { var aliens = Module.aliens; function expat() { for (var i = 0; i < arguments.length; i++) { aliens.push(arguments[i]); } Module._handle_signal(index, arguments.length, 0, 0); return aliens.pop(); } aliens.push(expat); }
function _JS_peekType() { var aliens = Module.aliens; var alien = aliens[aliens.length - 1]; if (null === alien) { return -1; } if (false === alien) { return -2; } if (true === alien) { return -3; } if (typeof alien === "number") { return (alien === (0 | alien)) ? -4 : -5; } if (typeof alien === "string") { return lengthBytesUTF8(alien); } return -6; }
function _JS_popInteger() { var aliens = Module.aliens; return aliens.pop(); }
function _JS_popFloat() { var aliens = Module.aliens; return aliens.pop(); }
function _JS_popString(addr,size) { var aliens = Module.aliens; var string = aliens.pop(); stringToUTF8(string, addr, size + 1); }
function _JS_peekAlien() { var aliens = Module.aliens; var lastIndex = aliens.length - 1; if (undefined === aliens[lastIndex]) { aliens.pop(); return 0; } else { return lastIndex; } }
function _JS_peekExpat() { throw "Unimplemented"; }
function _JS_performGet() { var aliens = Module.aliens; var selector = aliens.pop(); var receiver = aliens.pop(); try { var result = Reflect.get(receiver, selector); aliens.push(result); return true; } catch (exception) { aliens.push(exception); return false; } }
function _JS_performSet() { var aliens = Module.aliens; var argument = aliens.pop(); var selector = aliens.pop(); var receiver = aliens.pop(); try { var result = Reflect.set(receiver, selector, argument); aliens.push(argument); return true; } catch (exception) { aliens.push(exception); return false; } }
function _JS_performDelete() { var aliens = Module.aliens; var selector = aliens.pop(); var receiver = aliens.pop(); try { var result = Reflect.deleteProperty(receiver, selector); aliens.push(result); return true; } catch (exception) { aliens.push(exception); return false; } }
function _JS_performInvoke(numArgs) { var aliens = Module.aliens; var arguments = new Array(numArgs); for (var i = numArgs - 1; i >= 0; i--) { arguments[i] = aliens.pop(); } var selector = aliens.pop(); var receiver = aliens.pop(); if ((undefined === receiver) || (undefined === receiver[selector])) { aliens.push("NoSuchMethod: " + selector); return false; } try { var result = Reflect.apply(receiver[selector], receiver, arguments); aliens.push(result); return true; } catch (exception) { aliens.push(exception); return false; } }
function _JS_performNew(numArgs) { var aliens = Module.aliens; var arguments = new Array(numArgs); for (var i = numArgs - 1; i >= 0; i--) { arguments[i] = aliens.pop(); } var receiver = aliens.pop(); try { var result = Reflect.construct(receiver, arguments); aliens.push(result); return true; } catch (exception) { aliens.push(exception); return false; } }
function _JS_performInstanceOf() { var aliens = Module.aliens; var constructor = aliens.pop(); var receiver = aliens.pop(); try { var result = receiver instanceof constructor; aliens.push(result); return true; } catch (exception) { aliens.push(exception); return false; } }
function _JS_performHas() { var aliens = Module.aliens; var selector = aliens.pop(); var receiver = aliens.pop(); try { var result = Reflect.has(receiver, selector); aliens.push(result); return true; } catch (exception) { aliens.push(exception); return false; } }

// Imports from the Wasm binary.
var _fflush = makeInvalidEarlyAccess('_fflush');
var _malloc = Module['_malloc'] = makeInvalidEarlyAccess('_malloc');
var _free = Module['_free'] = makeInvalidEarlyAccess('_free');
var _load_snapshot = Module['_load_snapshot'] = makeInvalidEarlyAccess('_load_snapshot');
var _handle_message = Module['_handle_message'] = makeInvalidEarlyAccess('_handle_message');
var _handle_signal = Module['_handle_signal'] = makeInvalidEarlyAccess('_handle_signal');
var _emscripten_stack_get_end = makeInvalidEarlyAccess('_emscripten_stack_get_end');
var _emscripten_stack_get_base = makeInvalidEarlyAccess('_emscripten_stack_get_base');
var _setThrew = makeInvalidEarlyAccess('_setThrew');
var _emscripten_stack_init = makeInvalidEarlyAccess('_emscripten_stack_init');
var _emscripten_stack_get_free = makeInvalidEarlyAccess('_emscripten_stack_get_free');
var __emscripten_stack_restore = makeInvalidEarlyAccess('__emscripten_stack_restore');
var __emscripten_stack_alloc = makeInvalidEarlyAccess('__emscripten_stack_alloc');
var _emscripten_stack_get_current = makeInvalidEarlyAccess('_emscripten_stack_get_current');
var dynCall_vij = makeInvalidEarlyAccess('dynCall_vij');
var dynCall_jiji = makeInvalidEarlyAccess('dynCall_jiji');
var dynCall_iiiiij = makeInvalidEarlyAccess('dynCall_iiiiij');
var dynCall_iiiiijj = makeInvalidEarlyAccess('dynCall_iiiiijj');
var dynCall_iiiiiijj = makeInvalidEarlyAccess('dynCall_iiiiiijj');

function assignWasmExports(wasmExports) {
  _fflush = createExportWrapper('fflush', 1);
  Module['_malloc'] = _malloc = createExportWrapper('malloc', 1);
  Module['_free'] = _free = createExportWrapper('free', 1);
  Module['_load_snapshot'] = _load_snapshot = createExportWrapper('load_snapshot', 2);
  Module['_handle_message'] = _handle_message = createExportWrapper('handle_message', 0);
  Module['_handle_signal'] = _handle_signal = createExportWrapper('handle_signal', 4);
  _emscripten_stack_get_end = wasmExports['emscripten_stack_get_end'];
  _emscripten_stack_get_base = wasmExports['emscripten_stack_get_base'];
  _setThrew = createExportWrapper('setThrew', 2);
  _emscripten_stack_init = wasmExports['emscripten_stack_init'];
  _emscripten_stack_get_free = wasmExports['emscripten_stack_get_free'];
  __emscripten_stack_restore = wasmExports['_emscripten_stack_restore'];
  __emscripten_stack_alloc = wasmExports['_emscripten_stack_alloc'];
  _emscripten_stack_get_current = wasmExports['emscripten_stack_get_current'];
  dynCall_vij = createExportWrapper('dynCall_vij', 4);
  dynCall_jiji = createExportWrapper('dynCall_jiji', 5);
  dynCall_iiiiij = createExportWrapper('dynCall_iiiiij', 7);
  dynCall_iiiiijj = createExportWrapper('dynCall_iiiiijj', 9);
  dynCall_iiiiiijj = createExportWrapper('dynCall_iiiiiijj', 10);
}
var wasmImports = {
  /** @export */
  _JS_initializeAliens,
  /** @export */
  _JS_peekAlien,
  /** @export */
  _JS_peekExpat,
  /** @export */
  _JS_peekType,
  /** @export */
  _JS_performDelete,
  /** @export */
  _JS_performGet,
  /** @export */
  _JS_performHas,
  /** @export */
  _JS_performInstanceOf,
  /** @export */
  _JS_performInvoke,
  /** @export */
  _JS_performNew,
  /** @export */
  _JS_performSet,
  /** @export */
  _JS_popFloat,
  /** @export */
  _JS_popInteger,
  /** @export */
  _JS_popString,
  /** @export */
  _JS_pushAlien,
  /** @export */
  _JS_pushExpat,
  /** @export */
  _JS_pushFloat,
  /** @export */
  _JS_pushInteger,
  /** @export */
  _JS_pushString,
  /** @export */
  __syscall_fcntl64: ___syscall_fcntl64,
  /** @export */
  __syscall_fstat64: ___syscall_fstat64,
  /** @export */
  __syscall_ioctl: ___syscall_ioctl,
  /** @export */
  __syscall_lstat64: ___syscall_lstat64,
  /** @export */
  __syscall_newfstatat: ___syscall_newfstatat,
  /** @export */
  __syscall_openat: ___syscall_openat,
  /** @export */
  __syscall_stat64: ___syscall_stat64,
  /** @export */
  _abort_js: __abort_js,
  /** @export */
  _emscripten_throw_longjmp: __emscripten_throw_longjmp,
  /** @export */
  _tzset_js: __tzset_js,
  /** @export */
  clock_time_get: _clock_time_get,
  /** @export */
  emscripten_resize_heap: _emscripten_resize_heap,
  /** @export */
  environ_get: _environ_get,
  /** @export */
  environ_sizes_get: _environ_sizes_get,
  /** @export */
  exit: _exit,
  /** @export */
  fd_close: _fd_close,
  /** @export */
  fd_read: _fd_read,
  /** @export */
  fd_seek: _fd_seek,
  /** @export */
  fd_write: _fd_write,
  /** @export */
  invoke_vi
};
var wasmExports;
createWasm();

function invoke_vi(index,a1) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}


// include: postamble.js
// === Auto-generated postamble setup entry stuff ===

var calledRun;

function stackCheckInit() {
  // This is normally called automatically during __wasm_call_ctors but need to
  // get these values before even running any of the ctors so we call it redundantly
  // here.
  _emscripten_stack_init();
  // TODO(sbc): Move writeStackCookie to native to to avoid this.
  writeStackCookie();
}

function run() {

  if (runDependencies > 0) {
    dependenciesFulfilled = run;
    return;
  }

  stackCheckInit();

  preRun();

  // a preRun added a dependency, run will be called later
  if (runDependencies > 0) {
    dependenciesFulfilled = run;
    return;
  }

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    assert(!calledRun);
    calledRun = true;
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    Module['onRuntimeInitialized']?.();
    consumedModuleProp('onRuntimeInitialized');

    assert(!Module['_main'], 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(() => {
      setTimeout(() => Module['setStatus'](''), 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
  checkStackCookie();
}

function checkUnflushedContent() {
  // Compiler settings do not allow exiting the runtime, so flushing
  // the streams is not possible. but in ASSERTIONS mode we check
  // if there was something to flush, and if so tell the user they
  // should request that the runtime be exitable.
  // Normally we would not even include flush() at all, but in ASSERTIONS
  // builds we do so just for this check, and here we see if there is any
  // content to flush, that is, we check if there would have been
  // something a non-ASSERTIONS build would have not seen.
  // How we flush the streams depends on whether we are in SYSCALLS_REQUIRE_FILESYSTEM=0
  // mode (which has its own special function for this; otherwise, all
  // the code is inside libc)
  var oldOut = out;
  var oldErr = err;
  var has = false;
  out = err = (x) => {
    has = true;
  }
  try { // it doesn't matter if it fails
    flush_NO_FILESYSTEM();
  } catch(e) {}
  out = oldOut;
  err = oldErr;
  if (has) {
    warnOnce('stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.');
    warnOnce('(this may also be due to not including full filesystem support - try building with -sFORCE_FILESYSTEM)');
  }
}

function preInit() {
  if (Module['preInit']) {
    if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
    while (Module['preInit'].length > 0) {
      Module['preInit'].shift()();
    }
  }
  consumedModuleProp('preInit');
}

preInit();
run();

// end include: postamble.js

// include: meta/croquet-post.js
/* Croquet integration for the Newspeak runtime, linked in via --post-js.
   Extracted verbatim from the working hand-maintained croquetpsoup.js (the tail
   following the emscripten glue), which was the only copy that ever ran. */
var theModel;
var theView;
var localViewId;

function replaceUndefined(obj, seen = new Map()) {
    // Check if the current value is an object and not null
    if (obj && typeof obj === 'object') {
        // If we've already seen this object, return its previously processed copy to avoid infinite recursion
        if (seen.has(obj)) {
            return seen.get(obj);
        }
        
        // Create a copy of the object or array
        let copy = Array.isArray(obj) ? [] : {};
        
        // Store the copy in the Map before processing further to handle cyclic references
        seen.set(obj, copy);
        
        // Recursively process each key/value pair, including inherited properties
        for (let key in obj) {
            // Replace `undefined` with an empty object
            if (obj[key] === undefined) {
                copy[key] = {};
            } else {
                // Recursively process the value
                copy[key] = replaceUndefined(obj[key], seen);
            }
        }
        return copy;
    }
    
    // Return the value if it's not an object (base case)
    return obj;
}

function printJSObjectTree(obj, indent = 0) {
    // Create a string of spaces for indentation
    const indentString = ' '.repeat(indent);

    // Check if the current value is an object and not null
    if (obj && typeof obj === 'object') {
        // If it's an array, print each element
        if (Array.isArray(obj)) {
            console.log(indentString + '[Array]');
            obj.forEach((item, index) => {
                console.log(indentString + `  [${index}]`);
                printJSObjectTree(item, indent + 4);
            });
        } else {
            // If it's an object, print each key/value pair
            console.log(indentString + '{Object}');
            for (let key in obj) {
                if (true) {
                    console.log(indentString + `  ${key}:`);
                    printJSObjectTree(obj[key], indent + 4);
                }
            }
        }
    } else {
        // If it's not an object, just print the value
        console.log(indentString + obj);
    }
}

function sanitizeKeydownEvent(kde) {
    return {
        key: kde.key,
	metaKey: kde.metaKey,
	ctrlKey: kde.ctrlKey,
	shiftKey: kde.shiftKey,
	altKey: kde.altKey
    }

}
function storeModelAndView(m, v) {
    theModel = m;
    theView = v;
    croquetInitDone = true;
}

function newspeakFragmentData(fid, data) {
    return {fid: fid, data: data}
}

function nsCodeMirrorChange(change) {
    return {from: nsCursorPos(change.from.ch, change.from.line),
	    to:  nsCursorPos(change.to.ch, change.to.line),
	    text: change.text,
	    removed: change.removed
	   }
}

function nsCodeMirrorSelectionChange(change) {
    var from = change.ranges[0].anchor;
    var to = change.ranges[0].head;
    return {anchor: {line: from.line, ch: from.ch},
	    head: {line: to.line, ch: to.ch}
	   }
}

function nsPopstateData(event){
    return {state: event.state}
}

function nsCursorPos(ch, line) {
    return {ch: ch, line: line}
}

function nsCodeMirrorData(textBeingAccepted, change) {
    return {
	textBeingAccepted: textBeingAccepted,
	change: change
    }
}


function nsTextEditorData(textBeingAccepted, selectionStart, selectionEnd) {
    return {
	textBeingAccepted: textBeingAccepted,
	selectionStart: selectionStart,
	selectionEnd: selectionEnd
    }
}

function fileish(fd) {
    /* Why not just create a File object? Because the File API is not invertible; you cannot pass it the webkitRelativePath property. On the other hand,
some APIs we use (like JSZip) insist on taking File. So we probably will scrap this code. */
    buffer = fd.arrayBuff;
    
    return {
	name: fd.name,
	type: fd.type,
	lastModified: fd.lastModified,
	webkitRelativePath: fd.webkitRelativePath,
        arrayBuffer: function() {
            return Promise.resolve(buffer);
        },
        bytes: function() {
            return Promise.resolve(new Uint8Array(buffer));
        },
        slice: function(start = 0, end = buffer.byteLength) {
            const slicedBuffer = buffer.slice(start, end);
            return Promise.resolve(slicedBuffer);
        },
        stream: function() {
            const readableStream = new ReadableStream({
                start(controller) {
                    controller.enqueue(new Uint8Array(buffer));
                    controller.close();
                }
            });
            return Promise.resolve(readableStream);
        },
        text: function() {
            const decoder = new TextDecoder();
            const text = decoder.decode(buffer);
            return Promise.resolve(text);
        }
    };
}

// The number of the last event processed by this client
var lastProcessedEvent = 0;

// convenience method to increment the processed event count. Easier to call from Newspeak.
function eventProcessed() {
    lastProcessedEvent++;
}

/* 
A map describing all the subscription handlers Newspeak has to Croquet events. 
Each entry lists the scope, event spec and handler for a given subscription. This is needed, so that we can replay them when Croquet creates a new view, which it does when it restores from a snapshot. At that point, all our existing subscriptions are gone, and we have to resubscribe. See replaySubscriptions()
*/
var newspeakSubscriptions = new Map();

function replaySubscriptions() {
    for (let s of newspeakSubscriptions.values()){
	theView.subscribe(s.scope, s.eventSpec, s.handler);
    }
}

/* Large-payload detour.

   The Croquet client SILENTLY DROPS any reflector message whose payload exceeds
   16KB (PAYLOAD_LIMIT_MAX in controller.js, with a console.warn). The event then
   reaches no model, no history, and no client's handler -- including the
   sender's, whose DOM already shows the local edit. Since the editor fragments
   publish their full buffer text on every keystroke, one large-enough editor
   (e.g. a document's raw view) permanently desynchronized the session at the
   first oversized keystroke.

   The cure is the one files already use (see FileChooserFragment in
   HopscotchForCroquet.ns): store the payload with the session Data API -- which
   puts the encrypted bytes on the file server -- and publish only the returned
   handle. On dispatch, fetch and decode before invoking the subscriber. Handles
   serialize through events, the model's event history and snapshots, so replay
   and late joiners work unchanged.

   Ordering: store and fetch are asynchronous, and editor events carry the full
   text, so applying a stale event after a newer one would regress the buffer.
   Both directions are therefore serialized through FIFO promise chains: a
   publish waits for the stores of all earlier publishes, and a dispatch waits
   for the fetches of all earlier dispatches. Events arrive at human input rate,
   so the queues cost nothing.

   Exemption: payloads that already contain DataHandles (the file events). A
   handle's fields live under Symbol keys, invisible to JSON, so a JSON detour
   would destroy it. Those payloads are file METADATA and stay far below the
   cap regardless. */

const NS_DETOUR_LIMIT = 8 * 1024;  // half of Croquet's hard 16KB cap, for margin

function nsIsDataHandle(x) {
    if (!x || typeof x !== 'object') return false;
    if (typeof Croquet !== 'undefined' && Croquet.Data) {
	if (x instanceof Croquet.Data) return true;
	// Duck-type fallback: toId() answers a non-empty id only for a real
	// handle; anything else returns '' or throws on the malformed URL.
	try { return Croquet.Data.toId(x) !== ''; } catch (e) { return false; }
    }
    return false;
}

function nsContainsDataHandle(x, depth = 0) {
    if (!x || typeof x !== 'object' || depth > 8) return false;
    if (nsIsDataHandle(x)) return true;
    for (const k in x) {
	if (nsContainsDataHandle(x[k], depth + 1)) return true;
    }
    return false;
}

/* Replicated randomness (see HopscotchForCroquet.ns Hopscotch>>syncRandom).
   A mulberry32 PRNG seeded from the session id, so every client starts from
   the same state. It stays replicated under one DISCIPLINE: draw from it only
   inside synchronized (Croquet-dispatched) event handlers, which run in
   identical order on every client and under replay. Croquet's own model-side
   Math.random patch is unavailable to us because our state mutates view-side
   (see the architecture comment in HopscotchForCroquet.ns). */
var nsSyncRandomState = 0;
var nsSyncRandomSeeded = false;

function nsSyncRandomSeed(sessionId) {
    // FNV-1a over the session id string.
    let h = 0x811c9dc5;
    for (let i = 0; i < sessionId.length; i++) {
	h ^= sessionId.charCodeAt(i);
	h = Math.imul(h, 0x01000193) >>> 0;
    }
    nsSyncRandomState = h >>> 0;
}

function nsSyncRandom() {
    nsSyncRandomState = (nsSyncRandomState + 0x6D2B79F5) >>> 0;
    let z = nsSyncRandomState;
    z = Math.imul(z ^ (z >>> 15), z | 1) >>> 0;
    z = (z ^ (z + Math.imul(z ^ (z >>> 7), z | 61))) >>> 0;
    return ((z ^ (z >>> 14)) >>> 0) / 4294967296;
}

var nsPublishChain = Promise.resolve();

// The single outbound funnel: HopscotchForCroquet's publish:event:data: calls
// this instead of theView.publish directly.
function nsPublish(scope, eventSpec, data) {
    nsPublishChain = nsPublishChain.then(async () => {
	try {
	    if (!theView || !theView.session) {
		// The view is detached (rate-limit disconnect, dormancy). The
		// session will replay history on rejoin; publishing into the
		// void would only throw from session.data below.
		console.warn('nsPublish (' + scope + ' ' + eventSpec + ') dropped: view detached');
		return;
	    }
	    let payload = data;
	    // Only {fid, data} envelopes can carry something big; bare payloads
	    // (button clicks etc.) are fragment ids and stay tiny.
	    const isEnvelope = data && typeof data === 'object'
		  && 'fid' in data && 'data' in data;
	    if (isEnvelope
		&& JSON.stringify(data).length > NS_DETOUR_LIMIT
		&& !nsContainsDataHandle(data.data)) {
		const bytes = new TextEncoder().encode(JSON.stringify(data.data));
		const handle = await theView.session.data.store(bytes.buffer);
		payload = {fid: data.fid, data: {__nsDetouredPayload: true, handle: handle}};
	    }
	    theView.publish(scope, eventSpec, payload);
	} catch (err) {
	    console.error('nsPublish (' + scope + ' ' + eventSpec + ') failed; event not sent:', err);
	}
    });
}

var nsDispatchChain = Promise.resolve();

// Resolve a possibly-detoured event payload: fetch and decode if it is a
// handle envelope, otherwise pass it through. Shared by live dispatch and
// replay.
async function nsResolvePayload(e) {
    if (e && e.__nsDetouredPayload) {
	if (!theView || !theView.session) {
	    throw Error('view detached; cannot fetch detoured payload');
	}
	const buffer = await theView.session.data.fetch(e.handle);
	return JSON.parse(new TextDecoder().decode(buffer));
    }
    return e;
}

// The single inbound funnel: HopscotchForCroquet's
// subscribeFragment:scope:eventSpec:handler: calls this. It records the wrapped
// handler in newspeakSubscriptions -- so resubscription after a snapshot
// restore (replaySubscriptions) goes through the same wrapper -- and subscribes
// it. The RAW handler is recorded too: replayEvents must invoke handlers
// inline from its own chain thunks (see there), where calling the wrapped form
// would re-enqueue and decouple lookup order from execution order.
function nsSubscribe(scope, eventSpec, handler) {
    const wrapped = e => {
	nsDispatchChain = nsDispatchChain.then(async () => {
	    try {
		handler(await nsResolvePayload(e));
	    } catch (err) {
		console.error('Newspeak dispatch (' + scope + ' ' + eventSpec + ') failed; event skipped:', err);
	    }
	});
    };
    newspeakSubscriptions.set(scope + eventSpec,
	{scope: scope, eventSpec: eventSpec, handler: wrapped, raw: handler});
    theView.subscribe(scope, eventSpec, wrapped);
}

// The inbound funnel's inverse: HopscotchForCroquet calls this when a fragment
// lineage is disposed of (kind replacement or removal) or hands its
// subscription to a same-kind successor. Deleting the registry entry is the
// durable act -- replaySubscriptions resubscribes only what is here.
// view.unsubscribe is handler-specific (croquet >= 1.1), so removing this
// entry cannot disturb another subscription on the same scope; on a detached
// view the deletion above suffices.
function nsUnsubscribe(scope, eventSpec) {
    const key = scope + eventSpec;
    const entry = newspeakSubscriptions.get(key);
    if (!entry) return;
    newspeakSubscriptions.delete(key);
    if (theView && theView.session) {
	theView.unsubscribe(scope, eventSpec, entry.handler);
    }
}

/* Session persistence. Our session state is the recorded event history (the
   heap is reconstructible from it), and with a standalone --storage=none
   reflector that history lived ONLY in reflector RAM: ~10s after the last
   client disconnected the island was deleted, and the next join silently
   started a FRESH session under the same id -- history gone, later joiners
   unable to catch up. Croquet's designed answer is Model.persistSession: the
   root model periodically saves its essential state (encrypted, to the
   session's file server via files=), and a fresh island incarnation receives
   it in init(). The NS-PATCHed reflector remembers the pointer on local disk
   (see reflector.js SAVE), so sessions survive everyone leaving AND reflector
   restarts: connect from any device at any time.

   DataHandles (detour payloads, file events) do not survive JSON, so the
   collect/seed pair flattens them to ids (Croquet.Data.toId) and revives them
   (Data.fromId) -- the same convention Croquet's own serializer uses. */
function nsFlattenHandles(x, depth = 0) {
    if (!x || typeof x !== 'object' || depth > 12) return x;
    if (nsIsDataHandle(x)) return { __nsDataId: Croquet.Data.toId(x) };
    if (Array.isArray(x)) return x.map(e => nsFlattenHandles(e, depth + 1));
    const copy = {};
    for (const k in x) { if (Object.prototype.hasOwnProperty.call(x, k)) copy[k] = nsFlattenHandles(x[k], depth + 1); }
    return copy;
}

function nsReviveHandles(x, depth = 0) {
    if (!x || typeof x !== 'object' || depth > 12) return x;
    if (typeof x.__nsDataId === 'string') return Croquet.Data.fromId(x.__nsDataId);
    if (Array.isArray(x)) return x.map(e => nsReviveHandles(e, depth + 1));
    const copy = {};
    for (const k in x) { if (Object.prototype.hasOwnProperty.call(x, k)) copy[k] = nsReviveHandles(x[k], depth + 1); }
    return copy;
}

// Root model. See HopscotchForCroquet.ns for an overview of how
// things work.

class NewspeakCroquetModel extends Croquet.Model {
/*
Several things that are not evident from the Croquet docs.

When Croquet restores the model from a snapshot, a fresh instance of the root model class is instantiated. The instance's init() method is called (this seems to contradict the docs, which say init() is called only once per session). 

This of course implies that it explicitly resubscribes; we explictly unsubscribe the old model.

Now, the view-join event is  processed. 

Hence no snapshot state is available at that point. 

Note that a view-join can happen even without a snapshot.

Only afterward is the snapshot state restored in the new model. Next a new root view object is instantiated, with the new model as an argument. 
*/
    
    addEvent(e){
	this.newspeakEvents.push(e);
	// Debounced persistence: one pending future per burst of events; the
	// flag is model state, so it snapshots/restores consistently.
	if (!this.persistPending) {
	    this.persistPending = true;
	    this.future(10000).doPersistTick();
	}
    }

    doPersistTick() {
	this.persistPending = false;
	this.persistSession(() => ({
	    version: 1,
	    newspeakEvents: nsFlattenHandles(this.newspeakEvents),
	    coordinatedFetches: nsFlattenHandles(this.coordinatedFetches),
	    timers: this.timers
	}));
    }

    publishEventAndData(scope, eventSpec, data, fid) {
	this.addEvent({scope: scope, eventSpec: eventSpec, fid: fid, data: data});
	this.publish(scope + fid, eventSpec, data);
    }

    publishEvent(scope, eventSpec, fid) {
	this.addEvent({scope: scope, eventSpec: eventSpec, fid: fid, data: fid});
	this.publish(scope + fid, eventSpec);
    }
    
    init(options, persisted) {  // runs when a new session is initiated OR when a new shapshot is deserialized. Thus, not the right place to start up Newspeak

	// If we had a prior model (every time this runs except the first)
	// then we get rid of its subscriptions
	if (theModel) theModel.unsubscribeAll();
	// A list of all events ever sent to the model
	this.newspeakEvents = [];

	// Leaf fragment support; issues: scope differs by fragment class (no such thing as nsFragmentId)
	this.subscribe(this.sessionId, 'onMouseDown', this.mouseDown);
	this.subscribe(this.sessionId, 'onMouseEnter', this.mouseEnter);
	this.subscribe(this.sessionId, 'onMouseMove', this.mouseMove);
	this.subscribe(this.sessionId, 'onMouseOut', this.mouseOut);
	this.subscribe(this.sessionId, 'onMouseOver', this.mouseOver);
	this.subscribe(this.sessionId, 'onMouseUp', this.mouseUp);
	this.subscribe(this.sessionId, 'onTouchCancel', this.touchCancel);
	this.subscribe(this.sessionId, 'onTouchEnd', this.touchEnd);
	this.subscribe(this.sessionId, 'onTouchMove', this.touchMove);
	this.subscribe(this.sessionId, 'onTouchStart', this.touchStart);
	this.subscribe(this.sessionId, 'onWheel', this.wheel);
	
	this.subscribe('nsbutton_', 'button_click', this.button_click);
	this.subscribe('nsImagebutton_', 'image_button_click', this.image_button_click);
	this.subscribe('nshyperlink_', 'hyperlink_click', this.hyperlink_click);
	this.subscribe('nshyperlinkImage_', 'hyperlink_image_click', this.hyperlink_image_click);
	this.subscribe('nscheckbox_', 'checkBox_checked', this.checkBox_checked);
	this.subscribe('nscheckbox_', 'checkBox_unchecked', this.checkBox_unchecked);	
	this.subscribe('nsradiobutton_', 'radioButton_released', this.radioButton_released);
	this.subscribe('nsradiobutton_', 'radioButton_pressed', this.radioButton_pressed);	
	this.subscribe('nscodemirror_', 'codeMirror_beforeChange', this.codeMirror_beforeChange);
	this.subscribe('nscodemirror_', 'codeMirror_change', this.codeMirror_change);
	this.subscribe('nscodemirror_', 'codeMirror_keydown', this.codeMirror_keydown);
	this.subscribe('nscodemirror_', 'codeMirror_accept', this.codeMirror_accept);
	this.subscribe('nscodemirror_', 'codeMirror_cancel', this.codeMirror_cancel);
 	this.subscribe('nscodemirror_', 'codeMirror_beforeSelectionChange', this.codeMirror_beforeSelectionChange);	
	this.subscribe('nstexteditor_', 'textEditor_accept', this.textEditor_accept);
	this.subscribe('nstexteditor_', 'textEditor_change', this.textEditor_change);
	this.subscribe('nstexteditor_', 'textEditor_cancel', this.textEditor_cancel);
	this.subscribe('nstogglecomposer_', 'toggleComposer_toggle', this.toggleComposer_toggle);
	this.subscribe('nspicker_', 'picker_pick', this.picker_pick);
	this.subscribe('nscolorpicker_', 'colorPicker_pick', this.color_picker_pick);
	this.subscribe('nsdatepicker_', 'datePicker_pick', this.date_picker_pick);
	this.subscribe('nstimepicker_', 'timePicker_pick', this.time_picker_pick);
	this.subscribe('nsslider_', 'slider_pick', this.slider_pick);
	this.subscribe('nsdropdownmenu_', 'dropDownMenu_click', this.dropDownMenu_click);
        this.subscribe('nsmenu_', 'menu_click', this.menu_click);
        this.subscribe('nsshell_', 'shell_userBack', this.shell_userBack);
        this.subscribe('nsshell_', 'shell_activeMenuBlurred', this.shell_activeMenuBlurred);	
	this.subscribe('nsfilechooser_', 'fileChooser_click', this.fileChooser_click);
	this.subscribe('nsmediacreator_', 'mediaCreator_setFile', this.mediaCreator_setFile);

	// Coordinated once-per-session fetches (see HopscotchForCroquet.ns
	// coordinatedFetch:via:ifSuccess:ifFailure:; Documents uses keys like
	// 'document:<name>' for transclusions). Maps fetch key ->
	// {status: 'fetching'} or {status: 'loaded', handle}. A plain object, so
	// it snapshots without custom serializers. Like newspeakEvents, the reset
	// here is the fresh-session default; a snapshot restore overwrites it.
	this.coordinatedFetches = {};
	this.subscribe('nscoordfetch_', 'coordinatedFetch_request', this.coordinatedFetch_request);
	this.subscribe('nscoordfetch_', 'coordinatedFetch_loaded', this.coordinatedFetch_loaded);
	this.subscribe('nscoordfetch_', 'coordinatedFetch_failed', this.coordinatedFetch_failed);

	// Synchronized timers (see HopscotchForCroquet.ns TimerFragment). Maps
	// fragment id -> {remaining} while a countdown runs, then PERMANENTLY
	// {status: 'done'} - completed entries must survive so that a fragment
	// re-realization (late-joiner replay, document revisit) cannot restart
	// the countdown. Ticks run on the model's own future queue, so they
	// pace on teatime - identically on every client - and each tick is
	// recorded, so late joiners replay the same stream. Pending future
	// messages ride in snapshots.
	this.timers = {};
	this.subscribe('nstimer_', 'timer_start', this.timer_start);
	this.subscribe('nstimer_', 'timer_stop', this.timer_stop);

	// Debounce flag for persistence (see addEvent/doPersistTick).
	this.persistPending = false;

	// Seed from persisted session data (a previous island incarnation --
	// see the persistence comment above). Runs only for a genuinely fresh
	// island: on a snapshot restore, the restored state overwrites all of
	// this anyway.
	if (persisted && persisted.version === 1) {
	    this.newspeakEvents = nsReviveHandles(persisted.newspeakEvents) || [];
	    this.coordinatedFetches = nsReviveHandles(persisted.coordinatedFetches) || {};
	    this.timers = persisted.timers || {};
	    // Countdowns that were mid-flight when the previous island died:
	    // their pending future ticks died with it, so reschedule.
	    for (const fid in this.timers) {
		const t = this.timers[fid];
		if (t && t.status !== 'done' && t.interval) this.future(t.interval).timer_tick(fid, t.interval);
	    }
	}
    }
    // same issues with scope for these methods
    mouseDown(fid){
	console.log('MouseDown ' + fid);
	this.publish(fid, 'model_mouseDown');
    }
    mouseEnter(fid){
	console.log('MouseEnter ' + fid);
	this.publish(fid, 'model_mouseEnter');
    }
    mouseMove(fid){
	console.log('MouseMove ' + fid);
	this.publish(fid, 'model_mouseMove');
    }
    mouseOut(fid){
	console.log('MouseOut ' + fid);
	this.publish(fid, 'model_mouseOut');
    }
    mouseOver(fid){
	console.log('MouseOver ' + fid);
	this.publish(fid, 'model_mouseOver');
    }
    mouseUp(fid){
	console.log('MouseUp ' + fid);
	this.publish(fid, 'model_mouseUp');
   }
   touchCancel(fid){
	console.log('TouchCancel ' + fid);
	this.publish(fid, 'model_touchCancel');
   }
   touchEnd(fid){
	console.log('TouchEnd ' + fid);
	this.publish(fid, 'model_touchEnd');
   }	
   touchMove(fid){
	console.log('TouchMove ' + fid);
	this.publish(fid, 'model_touchMove');
   }
   touchStart(fid){
	console.log('TouchStart ' + fid);
	this.publish(fid, 'model_touchStart');
   }
   wheel(fid){
	console.log('Wheel ' + fid);
	this.publish(fid, 'model_wheel');
   }    // end leaf methods
    button_click(fid){
	this.publishEvent('nsbutton_', 'model_button_click', fid);
    }
    image_button_click(fid){
	this.publishEvent('nsImagebutton_', 'model_image_button_click', fid);
    }
    hyperlink_click(fid){
	this.publishEvent('nshyperlink_', 'model_hyperlink_click', fid);
    }
    hyperlink_image_click(fid){
	this.publishEvent('nshyperlinkImage_', 'model_hyperlink_image_click', fid);
    }
   
    checkBox_checked(fid){
//	console.log('model checkbox checked');
	this.publishEvent('nscheckbox_', 'model_checkBox_checked', fid);
    }
    checkBox_unchecked(fid){
//	console.log('model checkbox unchecked');	
	this.publishEvent('nscheckbox_', 'model_checkBox_unchecked', fid);
    }
    radioButton_released(fid){
	this.publishEvent('nsradiobutton_', 'model_radioButton_released', fid);
    }
    radioButton_pressed(fid){
	this.publishEvent('nsradiobutton_', 'model_radioButton_pressed', fid);
    }
    codeMirror_beforeChange(nsOptions){
	this.publishEventAndData('nscodemirror_', 'model_codeMirror_beforeChange', nsOptions.data, nsOptions.fid);
    }
    codeMirror_change(nsOptions){
	this.publishEventAndData('nscodemirror_', 'model_codeMirror_change', nsOptions.data, nsOptions.fid);
    }
    codeMirror_keydown(nsOptions){
	this.publishEventAndData('nscodemirror_', 'model_codeMirror_keydown', nsOptions.data, nsOptions.fid);
    }
    codeMirror_accept(nsOptions){
	this.publishEventAndData('nscodemirror_', 'model_codeMirror_accept', nsOptions.data, nsOptions.fid);
    }
    codeMirror_cancel(nsOptions){
	this.publishEventAndData('nscodemirror_', 'model_codeMirror_cancel', nsOptions.data, nsOptions.fid);
    }
    codeMirror_beforeSelectionChange(nsOptions){
	this.publishEventAndData('nscodemirror_', 'model_codeMirror_beforeSelectionChange', nsOptions.data, nsOptions.fid);
    }    
    textEditor_accept(nsOptions){
	this.publishEventAndData('nstexteditor_', 'model_textEditor_accept', nsOptions.data, nsOptions.fid);
    }
    textEditor_change(nsOptions){
	this.publishEventAndData('nstexteditor_', 'model_textEditor_change', nsOptions.data, nsOptions.fid);
    }
    textEditor_cancel(nsOptions){
	this.publishEventAndData('nstexteditor_', 'model_textEditor_cancel', nsOptions.data, nsOptions.fid);
    }
    toggleComposer_toggle(fid){
	this.publishEvent('nstogglecomposer_', 'model_toggleComposer_toggle', fid);
    }     
    picker_pick(nsOptions){
	this.publishEventAndData('nspicker_', 'model_picker_pick', nsOptions.data, nsOptions.fid);
    }
    color_picker_pick(nsOptions){
	this.publishEventAndData('nscolorpicker_', 'model_colorPicker_pick', nsOptions.data, nsOptions.fid);
    }
    date_picker_pick(nsOptions){
	this.publishEventAndData('nsdatepicker_', 'model_datePicker_pick', nsOptions.data, nsOptions.fid);
    }    
    time_picker_pick(nsOptions){
	this.publishEventAndData('nstimepicker_', 'model_timePicker_pick', nsOptions.data, nsOptions.fid);
    }
    slider_pick(nsOptions){
	this.publishEventAndData('nsslider_', 'model_slider_pick', nsOptions.data, nsOptions.fid);
    }     
    dropDownMenu_click(fid){
	this.publishEventAndData('nsdropdownmenu_', 'model_dropDownMenu_click', fid, fid);
    }
    menu_click(nsOptions){
	this.publishEventAndData('nsmenu_', 'model_menu_click', nsOptions.data, nsOptions.fid);
    }
    shell_userBack(nsOptions){
	this.publishEventAndData('nsshell_', 'model_shell_userBack', nsOptions.data, nsOptions.fid);
    }
    shell_activeMenuBlurred(fid){
	console.log('shell_activeMenuBlurred ' + fid);
	this.publishEvent('nsshell_', 'model_shell_activeMenuBlurred', fid);
    }     
    fileChooser_click(nsOptions){
	this.publishEventAndData('nsfilechooser_', 'model_fileChooser_click', nsOptions.data, nsOptions.fid);
    }
    mediaCreator_setFile(nsOptions){
	this.publishEventAndData('nsmediacreator_', 'model_mediaCreator_setFile', nsOptions.data, nsOptions.fid);
    }
    // Coordinated once-per-session fetches. Every client wanting the bytes
    // for a key publishes a request carrying its view id; the FIRST request
    // elects that view as the fetcher (reflector ordering is the election).
    // Only loaded answers are recorded in newspeakEvents -- including repeat
    // answers to late requests, so the per-client processed-event counting
    // stays exact -- ensuring every client, and every late joiner replaying
    // history, consumes the same stored bytes. The election and failure
    // broadcasts are NOT recorded, and their Newspeak-side handlers are
    // subscribed uncounted.
    coordinatedFetch_request(nsOptions){
	const name = nsOptions.fid;
	const entry = this.coordinatedFetches.hasOwnProperty(name) ? this.coordinatedFetches[name] : null;
	if (!entry) {
	    this.coordinatedFetches[name] = {status: 'fetching'};
	    this.publish('nscoordfetch_' + name, 'model_coordinatedFetch_fetch', nsOptions.data);
	} else if (entry.status === 'loaded') {
	    this.publishEventAndData('nscoordfetch_', 'model_coordinatedFetch_loaded', entry.handle, name);
	}
	// status 'fetching': an answer is already on its way; ignore.
    }
    coordinatedFetch_loaded(nsOptions){
	this.coordinatedFetches[nsOptions.fid] = {status: 'loaded', handle: nsOptions.data};
	this.publishEventAndData('nscoordfetch_', 'model_coordinatedFetch_loaded', nsOptions.data, nsOptions.fid);
    }
    coordinatedFetch_failed(nsOptions){
	delete this.coordinatedFetches[nsOptions.fid];
	this.publish('nscoordfetch_' + nsOptions.fid, 'model_coordinatedFetch_failed', nsOptions.data);
    }
    // Synchronized timers. Every client publishes start on realizing a timer
    // fragment; only the first registers (idempotent start). The count rides
    // in the start event and the model stops itself, so recorded history is
    // bounded per timer. The interval is clamped so a runaway caller cannot
    // flood the recorded history with ticks.
    timer_start(nsOptions){
	const fid = nsOptions.fid;
	if (this.timers.hasOwnProperty(fid)) {
	    const t = this.timers[fid];
	    // A start for a COMPLETED timer is a fragment re-realization -- a
	    // late joiner's replay, or a revisit of the containing document --
	    // never a new user intent (realization is not a user event, so it
	    // must be idempotent forever, not merely while running). Restarting
	    // here made a late joiner's replay restart everyone's countdown.
	    // Answer with a recorded final tick instead, so the new fragment's
	    // display converges to 0; an ACTIVE timer just ignores the repeat.
	    if (t.status === 'done') {
		this.publishEventAndData('nstimer_', 'model_timer_tick', 0, fid);
	    }
	    return;
	}
	const interval = Math.max(250, nsOptions.data.interval || 1000);
	const count = Math.max(1, nsOptions.data.count || 1);
	// interval is kept in the entry so a persisted-and-restored island can
	// reschedule a mid-flight countdown (see init).
	this.timers[fid] = {remaining: count, interval};
	this.future(interval).timer_tick(fid, interval);
    }
    timer_tick(fid, interval){
	const t = this.timers.hasOwnProperty(fid) ? this.timers[fid] : null;
	if (!t || t.status === 'done') return; // stopped or completed
	t.remaining -= 1;
	this.publishEventAndData('nstimer_', 'model_timer_tick', t.remaining, fid);
	if (t.remaining > 0) {
	    this.future(interval).timer_tick(fid, interval);
	} else {
	    this.timers[fid] = {status: 'done'};
	}
    }
    timer_stop(nsOptions){
	// Mark done rather than delete: a deleted entry would let a later
	// re-realization (replay, document revisit) restart the countdown.
	this.timers[nsOptions.fid] = {status: 'done'};
    }
}


NewspeakCroquetModel.register("NewspeakCroquetModel");

class NewspeakCroquetView extends Croquet.View {
    constructor(model, presenter) {
	super(model);
	console.log("croquet sessio id = " + this.sessionId);
	localViewId = this.viewId;
	// Seed once per client lifetime: this constructor ALSO runs on snapshot
	// restores, and reseeding then would reset a stream handlers already drew
	// from, breaking replication.
	if (!nsSyncRandomSeeded) { nsSyncRandomSeeded = true; nsSyncRandomSeed(this.sessionId); }
	this.presenter = presenter;
        storeModelAndView(model, this);
        replaySubscriptions();
	this.replay();   	
	if (croquetDepActive) {
	    removeRunDependency(croquetDepId);
	    croquetDepActive = false;
        }
    }

    // Newspeak subscriptions arrive via nsSubscribe (above), which records the
    // wrapped handler in newspeakSubscriptions and subscribes it. This method
    // remains ONLY for compatibility with vfuels older than the large-payload
    // detour, whose subscribeFragment: calls it (followed by a direct
    // subscribe). Such handlers cannot resolve detoured payloads -- removing
    // this method entirely made a stale cached vfuel die at its first
    // subscription, during boot, with a blank screen.
    addSubscription(scope, eventSpec, handler) {
	newspeakSubscriptions.set(scope + eventSpec, {scope: scope, eventSpec: eventSpec, handler: handler});
    }

    storedData() {return this.session.data}
    
    replayEvents(from) {
	// If Newspeak has not run yet (fresh client: this is the constructor's
	// replay), no fragment has subscribed and we cannot replay; Newspeak
	// will ask again after the first presenter is displayed.
	if (newspeakSubscriptions.size === 0) return;
	const total = theModel.newspeakEvents.length;
	for (var i = from; i < total; i++) {
	    const e = theModel.newspeakEvents[i];
	    // the key to find the handler is the event scope (indicating the
	    // type of fragment) followed by the fragment id
	    // followed by the eventSpec
	    const k = e.scope + e.fid + e.eventSpec;
	    const n = i;
	    // Enqueue on the dispatch chain; live events arriving meanwhile
	    // queue up behind and stay in order. The subscription lookup MUST
	    // happen inside the thunk, at execution time: the target fragment
	    // is typically constructed by an EARLIER replayed event (a
	    // navigation, an editor opening), or by deferred content that
	    // realizes across animation frames afterwards. A lookup at enqueue
	    // time -- or a synchronous loop, as this originally was -- runs
	    // before any of that construction and finds nothing.
	    nsDispatchChain = nsDispatchChain.then(async () => {
		// Wait for the subscriber to appear while deferred content
		// drains (one action per animation frame; big pages take
		// seconds). The timeout only bites for events whose fragment
		// will never exist -- a genuinely diverged or stale session --
		// where slow catch-up beats wrong catch-up.
		let s = newspeakSubscriptions.get(k);
		let waited = 0;
		while (!s && waited < 15000) {
		    await new Promise(r => setTimeout(r, 100));
		    waited += 100;
		    s = newspeakSubscriptions.get(k);
		}
		if (!s) {
		    console.warn('Croquet replay: no subscriber for key "' + k +
			'" (scope=' + e.scope + ' fid=' + e.fid + ' event=' + e.eventSpec +
			') after ' + waited + 'ms, event ' + n + ' of ' + total + ' - skipped');
		    return;
		}
		try {
		    // raw, not the wrapped handler: wrapped would re-enqueue at
		    // the chain's tail, decoupling execution from this slot.
		    // (s.raw missing means an old-vfuel handler registered via
		    // addSubscription; it is already raw.)
		    (s.raw || s.handler)(await nsResolvePayload(e.data));
		} catch (err) {
		    console.error('Croquet replay of "' + k + '" failed; event skipped:', err);
		}
	    });
	}
    }
    // Also called by Newspeak when it starts up the first time
    replay() {this.replayEvents(lastProcessedEvent)};
}

/**
Produce an object emulating window.localStorage. We want to have distinct
local storage per croquet session, so that apps and sessions don't step on each other's persistent state, invalidating the sync process.

Each such per-session object gets stored in regular local storage.
Therefore, we must JSONify and de-JSONify the data.
*/
function createSessionStorage(sessionId, {prefix = "app-session:"} = {}) {
  const storageKey = `${prefix}${sessionId}`;

  function load() {
    const raw = localStorage.getItem(storageKey);
    return raw ? JSON.parse(raw) : {};
  }

  function save(data) {
    localStorage.setItem(storageKey, JSON.stringify(data));
  }

  return {
    getItem(key) {
      const data = load();
      return data.hasOwnProperty(key) ? data[key] : null;
    },

    setItem(key, value) {
      const data = load();
      data[key] = String(value); // match localStorage behavior
      save(data);
    },

    removeItem(key) {
      const data = load();
      delete data[key];
      save(data);
    },

    clear() {
      save({});
    },

    key(index) {
      const keys = Object.keys(load());
      return keys[index] || null;
    },

    get length() {
      return Object.keys(load()).length;
    }
  };
}


/**
 * getURIParam(paramName)
 * 
 * Retrieves a named parameter from the current page's URL or, if not found, from localStorage.
 * 
 * Behavior:
 * 1. Checks the current URL's query string for the parameter.
 * 2. If found, stores the value in localStorage under the same key for persistence.
 * 3. If not found in the URL, attempts to retrieve the value from localStorage.
 * 4. Returns the value as a string if found, or null if not found in either place.
 * 
 * Design decisions:
 * - If the value is only found in localStorage, it is *not* written back to the URL.
 *   This avoids exposing potentially sensitive information in the address bar.
 * - The return value is consistently `null` when the parameter is not found, never `undefined`.
 * - This pattern supports one-time setup via query parameters, with silent persistence afterward.
 * 
 * Example usage:
 *   getURIParam("sessionId"); // "abc123" or null
 * 
 * Notes:
 * - If you want to force the value into the URL for bookmarking/sharing, you could extend
 *   this function later to support an optional `syncToURL` flag.
 */
function getURIParam(paramName) {
  const url = new URL(window.location.href);
  let value = url.searchParams.get(paramName);

  if (value !== null) {
    // Found in URL — persist to localStorage
    localStorage.setItem(paramName, value);
  } else {
    // Not in URL — try getting from localStorage
    value = localStorage.getItem(paramName);
  }
  return value;
}


async function saveBlobWithSaveFilePicker(fileName, fileBlob) {
    let fileHandle;
    let writableStream;

    try {
        // 1. Define options (suggested name)
        const options = { suggestedName: fileName };

        // 2. Open OS Save As dialog (MUST be called within user gesture)
        fileHandle = await window.showSaveFilePicker(options);

        // **CRUCIAL:** Immediately create the writable stream.
        // If the browser grants implicit write permission based on the user gesture,
        // it happens here. We skip the explicit requestPermission() call.
        writableStream = await fileHandle.createWritable();

        // 3. Write the Blob content
        await writableStream.write(fileBlob);

        // 4. Close the stream to finalize the file
        await writableStream.close();
        
        return { success: true };

    } catch (error) {
        // Handle common errors:
        // - AbortError (User cancelled the dialog)
        // - NotAllowedError (If implicit permission failed, as you saw)
        
        console.error('File saving failed:', error);
        
        // Return an error object for the Newspeak side to handle
        return { success: false, error: error.name || 'UnknownError', message: error.message };
    }
}

/**
 * Safely downloads a Blob, using showSaveFilePicker (FSAA) if available,
 * and falling back to the standard <a> tag download otherwise.
 *
 * @param {string} fileName - The desired name for the file (e.g., 'ActorsForJs.ns').
 * @param {Blob} fileBlob - The content to be saved as a Blob object.
 * @returns {Promise<object>} - A promise that resolves with a success/failure object.
 */
async function safeDownloadBlob(fileName, fileBlob) {
    // 1. Feature Detection: Check if the File System Access API is supported.
    if ('showSaveFilePicker' in window) {
        // --- A. USE FILE SYSTEM ACCESS API (for Chrome/Edge/etc.) ---
        try {
            const options = { suggestedName: fileName };
            
            // 2. Opens the OS Save As dialog (relies on active user gesture)
            const fileHandle = await window.showSaveFilePicker(options);

            // 3. Get the writable stream immediately (maintains transient activation)
            const writableStream = await fileHandle.createWritable();

            try {
                // 4. Write the content and close
                await writableStream.write(fileBlob);
            } finally {
                await writableStream.close();
            }
            
            return { success: true, method: 'FSAA' };

        } catch (error) {
            // Handle user cancellation (AbortError) or permission issues (NotAllowedError)
            console.error('FSAA Download failed (may be user cancelled):', error);
            // Treat user cancellation as a successful skip, otherwise an error.
            if (error.name === 'AbortError') {
                return { success: true, method: 'FSAA', message: 'User cancelled save.' };
            }
            return { success: false, method: 'FSAA', error: error.name || 'UnknownError' };
        }

    } else {
        // --- B. FALLBACK: USE STANDARD <a> TAG DOWNLOAD (for Firefox/Safari/etc.) ---
        
        console.warn('FSAA not supported. Falling back to standard download.');

        // 2. Create a temporary object URL for the Blob
        const url = URL.createObjectURL(fileBlob);
        
        // 3. Create and click a temporary anchor tag
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName; // This triggers the browser's automatic renaming behavior
        document.body.appendChild(a);
        a.click();
        
        // 4. Cleanup
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        return { success: true, method: 'Standard', message: 'Standard download started (may be renamed by browser).' };
    }
}

const name = getURIParam("sessionId"); 
// or else Croquet.App.autoSession();
const apiKey = getURIParam("apiKey");// originates from croquet.io/keys
const appId = getURIParam("appId");
const password = getURIParam("pwd"); // Croquet.App.autoPassword();

 




// classes aren't stored in the global object, so assign them to
// variables so we can easily get them from Newspeak
var NSCroquetModel = NewspeakCroquetModel;
var NSCroquetView = NewspeakCroquetView;

// autoSleep: false -- by default the Croquet client disconnects a tab some
// seconds after it is hidden ("going dormant"). With --storage=none the
// reflector DELETES an island ~10s after its last client disconnects, so two
// users switching away from their tabs at the same time silently erased the
// whole session history: the waking clients rejoined a FRESH session under
// the same id, their heaps masking the loss, and every later joiner got a
// history that starts mid-stream and can never be reconstructed (seen as
// "new browser doesn't catch up", reflector log: "island ... deleted").
// A persistent IDE session must hold its connection while the tab exists.
Croquet.Session.join({ apiKey, appId, name, password, autoSleep: false, model: NewspeakCroquetModel, view: NewspeakCroquetView });


// {{MODULE_ADDITIONS}}



// end include: meta/croquet-post.js

