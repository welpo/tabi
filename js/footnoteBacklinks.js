// Assign unique IDs to the footnote references based on their hashes.
function assignReferenceIds() {
    const references = document.querySelectorAll('.footnote-reference');
    for (const ref of references) {
        ref.id = `ref:${ref.children[0].hash.substring(1)}`;
    }
}

// Create backlinks for each footnote definition if a corresponding reference exists.
function createFootnoteBacklinks() {
    const footnotes = document.querySelectorAll('.footnote-definition');
    for (const footnote of footnotes) {
        const backlinkId = `ref:${footnote.id}`;

        // Skip if there's no corresponding reference in the text (i.e. the footnote doesn't reference anything).
        if (!document.getElementById(backlinkId)) continue;

        const backlink = document.createElement('a');
        backlink.href = `#${backlinkId}`;
        backlink.className = 'footnote-backlink';
        backlink.textContent = '↩';
        footnote.lastElementChild.appendChild(backlink);
    }
}

// Initialise the handlers for the footnote references and definitions.
function initFootnotes() {
    assignReferenceIds();
    createFootnoteBacklinks();
}

// Wait for the window to load, then execute the main function.
window.addEventListener('load', initFootnotes);
