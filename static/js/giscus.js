function setGiscusTheme(newTheme) {
    // Get the giscus iframe.
    const frame = document.querySelector('iframe.giscus-frame');

    if (frame) {
        // If the iframe exists, send a message to set the theme.
        frame.contentWindow.postMessage(
            { giscus: { setConfig: { theme: newTheme } } },
            'https://giscus.app'
        );
    }
}

// Function to initialize Giscus. This function is run when the window loads.
function initGiscus() {
    // Get the div that will contain the comments.
    const commentsDiv = document.querySelector('.comments');
    if (commentsDiv) {
        // Get the various settings from data attributes on the div.
        const repo = commentsDiv.getAttribute('data-repo');
        const repoId = commentsDiv.getAttribute('data-repo-id');
        const category = commentsDiv.getAttribute('data-category');
        const categoryId = commentsDiv.getAttribute('data-category-id');
        const strictTitleMatching = commentsDiv.getAttribute('data-strict');
        const term = commentsDiv.getAttribute('data-term');
        const reactionsEnabled = commentsDiv.getAttribute('data-reactions-enabled');
        const inputPosition = commentsDiv.getAttribute('data-input-position');
        const lightTheme = commentsDiv.getAttribute('data-light-theme');
        const darkTheme = commentsDiv.getAttribute('data-dark-theme');
        const lang = commentsDiv.getAttribute('data-lang');
        const lazyLoading = commentsDiv.getAttribute('data-lazy-loading');

        // Create a new script tag that will load the Giscus script.
        const script = document.createElement('script');
        script.src = 'https://giscus.app/client.js';
        script.async = true;

        // Set the various settings as data attributes on the script tag.
        script.setAttribute('data-repo', repo);
        script.setAttribute('data-repo-id', repoId);
        script.setAttribute('data-category', category);
        script.setAttribute('data-category-id', categoryId);
        script.setAttribute('data-term', term);
        script.setAttribute('data-strict', strictTitleMatching);
        script.setAttribute('data-reactions-enabled', reactionsEnabled);
        script.setAttribute('data-emit-metadata', '0');
        script.setAttribute('data-input-position', inputPosition);
        script.setAttribute('data-lang', lang);
        script.setAttribute('crossorigin', 'anonymous');

        // Set the mapping if it is provided.
        const mapping = commentsDiv.getAttribute('data-mapping');
        if (mapping) {
            script.setAttribute('data-mapping', mapping);
        }

        // Choose the correct theme based on the current theme of the document.
        const currentTheme =
            document.documentElement.getAttribute('data-theme') || 'light';
        const selectedTheme = currentTheme === 'dark' ? darkTheme : lightTheme;
        script.setAttribute('data-theme', selectedTheme);

        // Set the loading attribute if lazy loading is enabled.
        if (lazyLoading === 'true') {
            script.setAttribute('data-loading', 'lazy');
        }

        // Add the script tag to the div.
        commentsDiv.appendChild(script);

        // Listen for theme changes and update the Giscus theme when they occur.
        window.addEventListener('themeChanged', (event) => {
            const selectedTheme =
                event.detail.theme === 'dark' ? darkTheme : lightTheme;
            setGiscusTheme(selectedTheme);
        });
    }
}

// Initialize Giscus.
initGiscus();
