(function () {
    // Get the current theme from the browser's local storage.
    // This allows the user's theme preference to persist across sessions.
    const currentTheme = localStorage.getItem('theme');

    // Check if the current theme is stored in local storage.
    if (currentTheme) {
        // If a theme is found in local storage, apply it to the document.
        document.documentElement.setAttribute('data-theme', currentTheme);
    } else {
        // If no theme is found in local storage, determine if the user's system prefers a dark color scheme.
        const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        // Set the document's theme attribute to match the system preference.
        document.documentElement.setAttribute('data-theme', isSystemDark ? 'dark' : 'light');
    }
})();
