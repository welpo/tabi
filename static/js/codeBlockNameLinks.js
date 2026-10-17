// Open links in a new tab only when the site enables `external_links_target_blank`.
const openInNewTab = document.currentScript?.dataset.newTab === 'true';

document.addEventListener("DOMContentLoaded", function() {
    // Convert URLs in data-name to links.
    const processedCodeBlocks = new Set();
    document.querySelectorAll('pre[data-name], code[data-name]').forEach(function(element) {
        const pre = element.tagName === 'PRE' ? element : element.closest('pre');
        const code = element.tagName === 'CODE' ? element : element.querySelector('code');
        if (!code || processedCodeBlocks.has(code)) return;
        processedCodeBlocks.add(code);

        const name = pre?.getAttribute('data-name') || code.getAttribute('data-name');
        if (name.startsWith('http')) {
            const link = document.createElement('a');
            link.href = name;
            link.className = 'source-path';
            if (openInNewTab) {
                link.target = '_blank';
                link.rel = 'noopener';
            }
            link.textContent = name;
            code.insertBefore(link, code.firstChild);
            code.removeAttribute('data-name');
            pre?.removeAttribute('data-name');
        }
    });
});
