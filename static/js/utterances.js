function setUtterancesTheme(newTheme) {
    // Get the frame with class "utterances-frame".
    const frame = document.querySelector(".utterances-frame");
    
    if (frame) {
        // If the iframe exists, send a message to set the theme.
        frame.contentWindow.postMessage(
            { type: 'set-theme', theme: newTheme },
            'https://utteranc.es'
        );
    }
}

function initUtterances() {
    // Get the comments div.
    const commentsDiv = document.querySelector('.comments');

    // Check if the comments div exists.
    if (commentsDiv) {
        // Get all necessary attributes for initializing Utterances.
        const repo = commentsDiv.getAttribute('data-repo');
        const issueTerm = commentsDiv.getAttribute('data-issue-term');
        const label = commentsDiv.getAttribute('data-label');
        const lightTheme = commentsDiv.getAttribute('data-light-theme');
        const darkTheme = commentsDiv.getAttribute('data-dark-theme');
        const lazyLoading = commentsDiv.getAttribute('data-lazy-loading');

        // Create a new script element.
        const script = document.createElement('script');
        script.src = 'https://utteranc.es/client.js';
        script.async = true;
        script.setAttribute('repo', repo);
        script.setAttribute('issue-term', issueTerm);
        script.setAttribute('label', label);

        // Set the initial theme.
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const selectedTheme = currentTheme === 'dark' ? darkTheme : lightTheme;
        script.setAttribute('theme', selectedTheme);

        script.setAttribute('crossorigin', 'anonymous');

        // Enable lazy loading if specified.
        if (lazyLoading === 'true') {
            script.setAttribute('data-loading', 'lazy');
        }

        // Append the script to the comments div.
        commentsDiv.appendChild(script);

        // Listen for themeChanged event to update the theme.
        window.addEventListener('themeChanged', (event) => {
            // Determine the new theme based on the event detail.
            const selectedTheme = event.detail.theme === 'dark' ? darkTheme : lightTheme;
            // Set the new theme.
            setUtterancesTheme(selectedTheme);
        });
    }
}

// Initialize Utterances once the window has loaded.
window.addEventListener('load', () => {
    initUtterances();
});
