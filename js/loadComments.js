// Wait for the full HTML document to be parsed and ready.
document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the button element.
    const loadCommentsButton = document.querySelector('#load-comments');

    // If the button exists…
    if (loadCommentsButton) {
        // Add a "click" event listener to the button.
        loadCommentsButton.addEventListener('click', () => {
            // Create a new "script" HTML element.
            const script = document.createElement('script');

            // Set the source of the script to the URL in the button's "data-script-src" attribute.
            script.src = loadCommentsButton.dataset.scriptSrc;

            // Load asynchronously.
            script.async = true;

            // Add the script element to the end of the document body, which causes the script to start loading and executing.
            document.body.appendChild(script);

            // Hide the button after it's clicked.
            loadCommentsButton.style.display = 'none';
        });
    }
});
