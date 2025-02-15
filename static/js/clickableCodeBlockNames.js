document.addEventListener("DOMContentLoaded", function() {
    // Convert URLs in data-name to links.
    document.querySelectorAll('code[data-name]').forEach(function(code) {
        const name = code.getAttribute('data-name');
        if (name.startsWith('http')) {
            const link = document.createElement('a');
            link.href = name;
            link.className = 'source-path';
            link.textContent = name;
            code.insertBefore(link, code.firstChild);
            // Remove data-name to avoid overlap with Zola's native display.
            code.removeAttribute('data-name');
            code.parentElement?.removeAttribute('data-name');
        }
    });

    // Legacy support for old shortcode. https://github.com/welpo/tabi/pull/489
    document.querySelectorAll('.code-source').forEach(function(marker) {
        const sourceUrl = marker.getAttribute('data-source');
        const nextPre = marker.nextElementSibling;
        if (nextPre?.tagName === 'PRE') {
            const code = nextPre.querySelector('code');
            if (code) {
                if (sourceUrl.startsWith('http')) {
                    const link = document.createElement('a');
                    link.href = sourceUrl;
                    link.className = 'source-path';
                    link.textContent = sourceUrl;
                    code.insertBefore(link, code.firstChild);
                } else {
                    code.setAttribute('data-name', sourceUrl);
                }
            }
        }
    });
});
