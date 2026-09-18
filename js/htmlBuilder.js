const htmlInput = document.getElementById("html-input");
const cssInput = document.getElementById("css-input");
const previewFrame = document.getElementById("preview-frame");

function updatePreview() {
    const html = htmlInput.value;
    const customCss = cssInput.value;

    const previewDocument = previewFrame.contentDocument;

    previewDocument.open();

    previewDocument.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                /* Preview base styles */
                
                #preview-root {
                    width: 100%;
                    overflow: auto;
                }

                p {
                    margin-bottom: 1.7em;
                }

                #workskin .twt-replybox p {
                    margin-bottom: 1em;
                }

                #workskin .twt-replybox {
                    margin-top: 0em;
                }

                /* User's custom CSS */

                ${customCss}
            </style>
        </head>

        <body>
            <div id="preview-root">
                <div id="workskin">
                    ${html}
                </div>
            </div>
        </body>
        </html>
    `);

    previewDocument.close();
}

htmlInput.addEventListener("input", updatePreview);
cssInput.addEventListener("input", updatePreview);

updatePreview();
