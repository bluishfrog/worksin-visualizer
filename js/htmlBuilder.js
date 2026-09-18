const htmlInput = document.getElementById("html-input");
const cssInput = document.getElementById("css-input");
const previewFrame = document.getElementById("preview-frame");

function updatePreview() {
    const html = htmlInput.value;
    const css = cssInput.value;

    const previewDocument = previewFrame.contentDocument;

    previewDocument.open();

    previewDocument.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                ${css}
            </style>
        </head>

        <body>
            ${html}
        </body>
        </html>
    `);

    previewDocument.close();
}

htmlInput.addEventListener("input", updatePreview);
cssInput.addEventListener("input", updatePreview);

// Initial preview
updatePreview();
