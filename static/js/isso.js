// Function to initialise Isso.
function initIsso() {
    // Get the div that will contain the comments.
    const commentsDiv = document.querySelector('.comments');
    if (commentsDiv) {
        // Get the lazy-loading setting from the div.
        const lazyLoading = commentsDiv.getAttribute('data-lazy-loading') === "true";

        // If lazy-loading is enabled, create an Intersection Observer and use it.
        if (lazyLoading) {
            const observer = new IntersectionObserver(entries => {
                // Loop over the entries.
                entries.forEach(entry => {
                    // If the element is in the viewport, initialize Isso.
                    if (entry.isIntersecting) {
                        loadIsso(commentsDiv);
                        // Once the Isso is loaded, we don't need to observe the element anymore.
                        observer.unobserve(commentsDiv);
                    }
                });
            });

            // Start observing the comments div.
            observer.observe(commentsDiv);
        } else {
            // If lazy-loading is not enabled, initialise Isso immediately.
            loadIsso(commentsDiv);
        }
    }
}

// Function to load Isso.
function loadIsso(commentsDiv) {
    // Get the various settings from data attributes on the div.
    const endpointUrl = commentsDiv.getAttribute('data-endpoint-url');
    const pageId = commentsDiv.getAttribute('data-isso-id');
    const title = commentsDiv.getAttribute('data-title');
    const lang = commentsDiv.getAttribute('data-page-language');
    const maxCommentsTop = commentsDiv.getAttribute('data-max-comments-top');
    const maxCommentsNested = commentsDiv.getAttribute('data-max-comments-nested');
    const avatar = commentsDiv.getAttribute('data-avatar');
    const voting = commentsDiv.getAttribute('data-voting');
    const hashes = commentsDiv.getAttribute('data-page-author-hashes');

    // Create a new script tag that will load the Isso script.
    const script = document.createElement('script');
    script.src = endpointUrl + 'js/embed.min.js';
    script.async = true;

    // Set the various settings as data attributes on the script tag.
    script.setAttribute('data-isso', endpointUrl);
    script.setAttribute('data-isso-lang', lang);
    script.setAttribute('data-isso-max-comments-top', maxCommentsTop);
    script.setAttribute('data-isso-max-comments-nested', maxCommentsNested);
    script.setAttribute('data-isso-avatar', avatar);
    script.setAttribute('data-isso-vote', voting);
    script.setAttribute('data-isso-page-author-hashes', hashes);
    script.setAttribute('data-isso-css', 'false');

    // Set the id and data-isso-id of the Isso thread.
    const section = document.createElement('section');
    section.id = 'isso-thread';
    section.setAttribute('data-isso-id', pageId);
    section.setAttribute('data-title', title);
    commentsDiv.appendChild(section);

    // Add the script tag to the div.
    commentsDiv.appendChild(script);

    // Create a link tag for the Isso CSS.
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '/isso.min.css';

    // Add the CSS link tag to the head of the document.
    document.head.appendChild(link);
}

// Initialize Isso.
initIsso();
