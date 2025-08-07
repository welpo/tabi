// Select the table and table headers.
var table = document.querySelector('#sitemapTable');
var headers = Array.from(table.querySelectorAll('th'));

// Create and append the live region for accessibility announcements.
var liveRegion = document.createElement('div');
liveRegion.setAttribute('aria-live', 'polite');
liveRegion.setAttribute('aria-atomic', 'true');
liveRegion.classList.add('visually-hidden');
document.body.appendChild(liveRegion);

// Initialise headers with click and keyboard listeners.
initializeHeaders();
addSortText(); // Add text for screen readers for initial sort direction.
updateSortIndicators(headers[0], 'asc'); // Set initial sort indicators.

function updateSortIndicators(header, direction) {
    removeSortArrows(header);
    var arrow = document.createElement('span');
    arrow.classList.add('sort-arrow');
    arrow.textContent = direction === 'asc' ? ' ▲' : ' ▼';
    arrow.setAttribute('aria-hidden', 'true');
    header.appendChild(arrow);
}

function removeSortArrows(header) {
    var arrows = header.querySelectorAll('.sort-arrow');
    arrows.forEach(function (arrow) {
        arrow.remove();
    });
}

function initializeHeaders() {
    headers.forEach(function (header, index) {
        header.classList.add('sortable');
        header.setAttribute('tabindex', '0');
        header.sortDirection = 'asc'; // Default sort direction.
        var sortAttribute = index === 0 ? 'ascending' : 'none';
        header.setAttribute('aria-sort', sortAttribute);
        header.addEventListener('click', function () {
            sortTable(index);
        });
        header.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                sortTable(index);
            }
        });
    });
}

function announceSort(header, direction) {
    var columnTitle = header.querySelector('.columntitle').textContent;
    liveRegion.textContent =
        'Column ' + columnTitle + ' is now sorted in ' + direction + ' order';
}

function sortTable(index) {
    var header = headers[index];
    var direction = header.sortDirection === 'asc' ? 'desc' : 'asc';
    var tbody = table.querySelector('tbody');
    var rows = Array.from(tbody.querySelectorAll('tr'));
    sortRows(rows, index, direction);
    refreshTableBody(tbody, rows);
    updateHeaderAttributes(header, direction);
    announceSort(header, direction === 'asc' ? 'ascending' : 'descending');
}

function sortRows(rows, index, direction) {
    rows.sort(function (rowA, rowB) {
        var cellA = rowA.querySelectorAll('td')[index].textContent;
        var cellB = rowB.querySelectorAll('td')[index].textContent;
        return direction === 'asc'
            ? cellA.localeCompare(cellB)
            : cellB.localeCompare(cellA);
    });
}

function refreshTableBody(tbody, rows) {
    tbody.innerHTML = ''; // Clear existing rows.
    rows.forEach(function (row) {
        tbody.appendChild(row);
    });
}

function updateHeaderAttributes(header, direction) {
    headers.forEach(function (otherHeader) {
        if (otherHeader !== header) {
            otherHeader.setAttribute('aria-sort', 'none');
            removeSortArrows(otherHeader);
        }
    });
    header.setAttribute('aria-sort', direction === 'asc' ? 'ascending' : 'descending');
    header.sortDirection = direction;
    updateSortIndicators(header, direction);
    updateAnnounceText(header);
}

// Update screen reader text for sorting.
function updateAnnounceText(header) {
    var span = header.querySelector('.visually-hidden');
    span.textContent =
        'Click to sort in ' +
        (header.sortDirection === 'asc' ? 'descending' : 'ascending') +
        ' order';
}

// Add text for screen readers regarding sort order.
function addSortText() {
    headers.forEach(function (header) {
        var span = document.createElement('span');
        span.classList.add('visually-hidden');
        span.textContent = 'Click to sort in descending order';
        header.appendChild(span);
    });
}

headers[0].sortDirection = 'asc';
headers[0].setAttribute('aria-sort', 'ascending');
