// Copyright (c) 2026-2027, Gilad Bracha. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.
//
// Saved images for a page that runs Eurasia: Save Image (Actors>>saveImage:)
// hands the running image to the page (run's onSaveImage), which keeps it in
// the browser's origin private file system, one file per image in a
// directory of the page's choosing; the next time the page loads, it offers
// them before it starts. Used by ide.html (directory eurasia-images) and by
// newspeak's deploy-boot.js for deployed document pages (their own
// directory, so that a site's documents and an IDE on the same origin do
// not offer each other's images).

// The saved images in directory `directory`.
export function imageStore(directory) {
  const dir = async () =>
    (await navigator.storage.getDirectory()).getDirectoryHandle(directory, { create: true });
  // A name may hold any character (a date's slashes); its file name is
  // URI-encoded.
  const fileName = (name) => `${encodeURIComponent(name)}.eus`;
  const store = async (name, bytes) => {
    const file = await (await dir()).getFileHandle(fileName(name), { create: true });
    const writable = await file.createWritable();
    await writable.write(bytes);
    await writable.close();
    navigator.storage.persist?.();
    console.log(`eurasia: saved the image ${name} (${bytes.length} bytes)`);
  };
  // The images, newest first: {name, entry, size, when}.
  const list = async () => {
    const images = [];
    try {
      for await (const [entry, handle] of (await dir()).entries()) {
        if (handle.kind !== 'file' || !entry.endsWith('.eus')) continue;
        const file = await handle.getFile();
        images.push({ name: decodeURIComponent(entry.slice(0, -4)), entry, size: file.size, when: file.lastModified });
      }
    } catch (e) {
      console.warn('eurasia: no saved images:', e.message);
    }
    return images.sort((a, b) => b.when - a.when);
  };
  const readEntry = async (entry) =>
    new Uint8Array(await (await (await (await dir()).getFileHandle(entry)).getFile()).arrayBuffer());
  const read = (name) => readEntry(fileName(name));
  // Offers `images` (from list), or a fresh start labelled `freshLabel`;
  // answers the chosen image's bytes, or null for the fresh start. The
  // panel is #eurasia-images.
  const choose = (images, freshLabel) => new Promise((resolve) => {
    addStyle();
    const panel = document.createElement('div');
    panel.id = 'eurasia-images';
    const show = (rest) => {
      panel.replaceChildren();
      const heading = document.createElement('h1');
      heading.textContent = 'Saved images';
      const fresh = document.createElement('button');
      fresh.textContent = freshLabel;
      fresh.onclick = () => { panel.remove(); resolve(null); };
      const table = document.createElement('table');
      for (const image of rest) {
        const row = table.insertRow();
        row.insertCell().textContent = image.name;
        const size = row.insertCell();
        size.className = 'size';
        size.textContent = `${(image.size / 1048576).toFixed(1)} MB`;
        const when = row.insertCell();
        when.className = 'when';
        when.textContent = new Date(image.when).toLocaleString();
        const open = document.createElement('button');
        open.textContent = 'Open';
        open.onclick = async () => { panel.remove(); resolve(await readEntry(image.entry)); };
        const remove = document.createElement('button');
        remove.textContent = 'Delete';
        remove.onclick = async () => {
          if (!confirm(`Delete the image ${image.name}? This cannot be undone.`)) return;
          await (await dir()).removeEntry(image.entry);
          const left = rest.filter((i) => i !== image);
          if (left.length === 0) { panel.remove(); resolve(null); } else show(left);
        };
        row.insertCell().append(open, ' ', remove);
      }
      panel.append(heading, table, fresh);
    };
    show(images);
    document.body.prepend(panel);
  });
  return { store, list, read, choose };
}

// The chooser's look, once per page.
function addStyle() {
  if (document.getElementById('eurasia-images-style')) return;
  const style = document.createElement('style');
  style.id = 'eurasia-images-style';
  style.textContent = `
#eurasia-images { font: 14px system-ui, sans-serif; max-width: 40em; margin: 4em auto; padding: 8px 16px 16px; background: #fff; color: #222; border-radius: 6px; }
#eurasia-images h1 { font-size: 20px; font-weight: 600; }
#eurasia-images table { border-collapse: collapse; width: 100%; margin: 1em 0; }
#eurasia-images td { padding: 6px 8px; border-top: 1px solid #ddd; }
#eurasia-images td.size, #eurasia-images td.when { color: #666; white-space: nowrap; }
#eurasia-images td:last-child { white-space: nowrap; }
#eurasia-images button { font: inherit; padding: 3px 10px; cursor: pointer; }`;
  document.head.append(style);
}
