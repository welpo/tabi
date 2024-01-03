function initHyvorTalk() {
    // Get the div that will contain the comments.
    const commentsDiv = document.querySelector('.comments');
    if (commentsDiv) {
        // Get the various settings from data attributes on the div.
        const websiteId = commentsDiv.getAttribute('data-website-id');
        const pageId = commentsDiv.getAttribute('data-page-id');
        const pageLanguage = commentsDiv.getAttribute('data-page-language');
        const loading = commentsDiv.getAttribute('data-loading');
        const pageAuthor = commentsDiv.getAttribute('data-page-author');

        // Create a new script tag that will load the Hyvor Talk script.
        const script = document.createElement('script');
        script.src = 'https://talk.hyvor.com/embed/embed.js';
        script.async = true;
        script.type = 'module';
        document.head.appendChild(script);

        // Create a new Hyvor Talk comments tag.
        const comments = document.createElement('hyvor-talk-comments');
        comments.setAttribute('website-id', websiteId);
        comments.setAttribute('page-id', pageId);
        comments.setAttribute('page-language', pageLanguage);
        comments.setAttribute('loading', loading);
        comments.setAttribute('page-author', pageAuthor);

        // Choose the correct theme based on the current theme of the document.
        const currentTheme =
            document.documentElement.getAttribute('data-theme') || 'light';
        comments.setAttribute('colors', currentTheme);

        // Add the Hyvor Talk comments tag to the div.
        commentsDiv.appendChild(comments);

        // Listen for theme changes and update the Hyvor Talk theme when they occur.
        window.addEventListener('themeChanged', (event) => {
            const selectedTheme = event.detail.theme;
            comments.setAttribute('colors', selectedTheme);
        });
    }
}

// Initialize HyvorTalk.
initHyvorTalk();
