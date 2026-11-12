document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const filterLinks = document.querySelectorAll('.filter-controls a');
    const allProjectsFilter = document.querySelector('#all-projects-filter');
    if (!cards.length || !filterLinks.length) return;
    allProjectsFilter.style.display = 'block';

    // Create a Map for O(1) lookups of links by filter value.
    const linkMap = new Map(
        Array.from(filterLinks).map(link => [link.dataset.filter, link])
    );

    // Pre-process cards data for faster filtering.
    const cardData = Array.from(cards).map(card => ({
        element: card,
        tags: card.dataset.tags?.toLowerCase().split(',').filter(Boolean) ?? []
    }));

    function getTagSlugFromUrl(url) {
        return url.split('/').filter(Boolean).pop();
    }

    function getFilterFromHash() {
        if (!window.location.hash) return 'all';
        const hash = decodeURIComponent(window.location.hash.slice(1));
        const matchingLink = Array.from(filterLinks).find(link =>
            getTagSlugFromUrl(link.getAttribute('href')) === hash
        );
        return matchingLink?.dataset.filter ?? 'all';
    }

    function setActiveFilter(filterValue, updateHash = true) {
        if (updateHash) {
            if (filterValue === 'all') {
                history.pushState(null, '', window.location.pathname);
            } else {
                const activeLink = linkMap.get(filterValue);
                if (activeLink) {
                    const tagSlug = getTagSlugFromUrl(activeLink.getAttribute('href'));
                    history.pushState(null, '', `#${tagSlug}`);
                }
            }
        }
        const isAll = filterValue === 'all';
        const display = isAll ? '' : 'none';
        const ariaHidden = isAll ? 'false' : 'true';
        requestAnimationFrame(() => {
            filterLinks.forEach(link => {
                const isActive = link.dataset.filter === filterValue;
                link.classList.toggle('active', isActive);
                link.setAttribute('aria-pressed', isActive);
            });
            if (isAll) {
                cardData.forEach(({ element }) => {
                    element.style.display = display;
                    element.setAttribute('aria-hidden', ariaHidden);
                });
            } else {
                cardData.forEach(({ element, tags }) => {
                    const shouldShow = tags.includes(filterValue);
                    element.style.display = shouldShow ? '' : 'none';
                    element.setAttribute('aria-hidden', !shouldShow);
                });
            }
        });
    }

    const filterContainer = filterLinks[0].parentElement.parentElement;
    filterContainer.addEventListener('click', e => {
        const link = e.target.closest('a');
        if (!link) return;
        e.preventDefault();
        const filterValue = link.dataset.filter;
        if (filterValue) setActiveFilter(filterValue);
    });

    filterContainer.addEventListener('keydown', e => {
        const link = e.target.closest('a');
        if (!link) return;
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            link.click();
        }
    });

    filterLinks.forEach(link => {
        link.setAttribute('role', 'button');
        link.setAttribute('aria-pressed', link.classList.contains('active'));
    });

    window.addEventListener('popstate', () => {
        setActiveFilter(getFilterFromHash(), false);
    });

    const initialFilter = getFilterFromHash();
    if (initialFilter !== 'all') {
        setActiveFilter(initialFilter, false);
    }
});
