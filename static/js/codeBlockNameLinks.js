// Links created here bypass Zola's Markdown rewriting, so mimic its external link settings.
const scriptData = document.currentScript?.dataset ?? {};
const openInNewTab = scriptData.newTab === 'true';
const relAttributes = [];
if (openInNewTab) relAttributes.push('noopener');
if (scriptData.noFollow === 'true') relAttributes.push('nofollow');
if (scriptData.noReferrer === 'true') relAttributes.push('noreferrer');

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
            }
            if (relAttributes.length) {
                link.rel = relAttributes.join(' ');
            }
            link.textContent = name;
            code.insertBefore(link, code.firstChild);
            code.removeAttribute('data-name');
            pre?.removeAttribute('data-name');
        }
    });
});
