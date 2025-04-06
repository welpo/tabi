// Get the light and dark favicon elements
lightSchemeIcon = document.querySelector('link#light-favicon');
darkSchemeIcon = document.querySelector('link#dark-favicon');

// Set the favicon color by adding the appropriate link element
// to the document head and removing the other
function updateFaviconColor(dark) {
    if (!lightSchemeIcon || !darkSchemeIcon) return;

    if (dark) {
        lightSchemeIcon.remove();
        document.head.append(darkSchemeIcon);
    } else {
        document.head.append(lightSchemeIcon);
        darkSchemeIcon.remove();
    }
}

// Get the current theme at startup, defaulting to light
const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';

// Set the favicon color on startup
updateFaviconColor(currentTheme === 'dark');

// Listen for theme changes and update the favicon color accordingly
window.addEventListener('themeChanged', (event) => {
    updateFaviconColor(event.detail.theme === 'dark');
});
