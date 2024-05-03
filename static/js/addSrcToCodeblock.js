document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.code-source').forEach(function(marker) {
        let sourceUrl = marker.getAttribute('data-source');
        let nextPre = marker.nextElementSibling;

        if (nextPre && nextPre.tagName === 'PRE') {
            let codeElement = nextPre.querySelector('code');
            if (codeElement) {
                // Use a span element for the source path if it's not a link.
                let sourceElement = document.createElement(sourceUrl.startsWith('http') ? 'a' : 'span');
                sourceElement.textContent = sourceUrl;
                sourceElement.className = 'source-path';
                if (sourceUrl.startsWith('http')) {
                    sourceElement.href = sourceUrl;
                }
                codeElement.prepend(sourceElement);
            }
        }
    });
});
