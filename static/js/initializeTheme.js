(function () {
    // Get the default theme from the HTML data-theme attribute.
    const defaultTheme = document.documentElement.getAttribute('data-theme');

    // Set the data-default-theme attribute only if defaultTheme is not null.
    if (defaultTheme) {
        document.documentElement.setAttribute('data-default-theme', defaultTheme);
    }

    // Attempt to retrieve the current theme from the browser's local storage.
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
        document.documentElement.setAttribute('data-theme', storedTheme);
    } else if (defaultTheme) {
        document.documentElement.setAttribute('data-theme', defaultTheme);
    } else {
        // If no theme is found in local storage and no default theme is set, use user's system preference.
        const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', isSystemDark ? 'dark' : 'light');
    }
})();
