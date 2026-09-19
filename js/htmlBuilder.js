const htmlInput = document.getElementById("html-input");
const cssInput = document.getElementById("css-input");
const previewFrame = document.getElementById("preview-frame");

function updatePreview() {
    const html = htmlInput.value;
    const customCss = cssInput.value;

    // Get the iframe document
    const previewDocument = previewFrame.contentDocument;

    // Clear the iframe
    previewDocument.open();
    previewDocument.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Preview</title>
        </head>
        <body>
            <div id="preview-root">
                <div id="workskin"></div>
            </div>
        </body>
        </html>
    `);
    previewDocument.close();

    // Add the user's HTML INSIDE #workskin
    const workskin = previewDocument.getElementById("workskin");
    workskin.innerHTML = html;

    // Create the CSS
    const style = previewDocument.createElement("style");

    style.textContent = `
        /* ================================
           Required Preview CSS
           ================================ */

        #preview-root {
            width: 100%;
            overflow: auto;
        }

        p {
            margin-bottom: 1.7em;
        }

        #workskin .twt-replybox p {
            margin-bottom: 1.7em;
        }

        #workskin .twt-replybox {
            margin-top: 0em;
        }


        /* ================================
           User's Custom CSS
           ================================ */

        ${customCss}
    `;

    // Add the style to the iframe
    previewDocument.head.appendChild(style);
}

// Update whenever HTML changes
htmlInput.addEventListener("input", updatePreview);

// Update whenever CSS changes
cssInput.addEventListener("input", updatePreview);

// Initial preview
updatePreview();
