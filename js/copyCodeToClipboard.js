const copiedText = document.getElementById('copy-success').textContent;
const initCopyText = document.getElementById('copy-init').textContent;

const changeIcon = (copyDiv, className) => {
    copyDiv.classList.add(className);
    copyDiv.setAttribute('aria-label', copiedText);
    setTimeout(() => {
        copyDiv.classList.remove(className);
        copyDiv.setAttribute('aria-label', initCopyText);
    }, 2500);
};

const addCopyEventListenerToDiv = (copyDiv, block) => {
    copyDiv.addEventListener('click', () => copyCodeAndChangeIcon(copyDiv, block));
};

const copyCodeAndChangeIcon = async (copyDiv, block) => {
    const code = block.querySelector('table')
        ? getTableCode(block)
        : getNonTableCode(block);
    try {
        await navigator.clipboard.writeText(code);
        changeIcon(copyDiv, 'checked');
    } catch (error) {
        changeIcon(copyDiv, 'error');
    }
};

const getNonTableCode = (block) => {
    return [...block.querySelectorAll('code')].map((code) => code.textContent).join('');
};

const getTableCode = (block) => {
    return [...block.querySelectorAll('tr')]
        .map((row) => row.querySelector('td:last-child')?.innerText ?? '')
        .join('');
};

document.querySelectorAll('pre:not(.mermaid)').forEach((block) => {
    const copyDiv = document.createElement('div');
    copyDiv.setAttribute('role', 'button');
    copyDiv.setAttribute('aria-label', initCopyText);
    copyDiv.setAttribute('title', initCopyText);
    copyDiv.className = 'copy-code';
    block.prepend(copyDiv);
    addCopyEventListenerToDiv(copyDiv, block);
});
