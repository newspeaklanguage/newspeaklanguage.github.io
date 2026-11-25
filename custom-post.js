/**
 * NOTE: this file is CANONICAL for platform JS helpers reached from Newspeak
 * as window globals. The NS2JS deployment carries a MIRROR of every function
 * here in the compiler prelude (newspeak/Newspeak2JSCompilation.ns, the
 * "Platform helper parity" verbatim) - when adding or changing a helper here,
 * update the mirror in the same change, or JS deploys will lack it
 * (seen 2026-07-23: safeDownloadBlob missing broke Ampleforth document save).
 *
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
