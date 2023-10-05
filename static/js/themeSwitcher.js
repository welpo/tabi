// Get the theme switcher button elements.
const themeSwitcher = document.querySelector(".theme-switcher");
const themeResetter = document.querySelector(".theme-resetter");

// Retrieve theme from either the localStorage or the data-theme attribute on the document element.
let currentTheme = localStorage.getItem("theme") || document.documentElement.getAttribute('data-theme');

// Function to set theme.
function setTheme(theme, saveToLocalStorage = false) {
    document.documentElement.setAttribute("data-theme", theme);
    currentTheme = theme;
    let togglePressed = theme === "dark" ? "true" : "false";
    themeSwitcher.setAttribute("aria-pressed", togglePressed);

    if (saveToLocalStorage) {
        localStorage.setItem("theme", theme);
        themeResetter.classList.add("has-custom-theme");
        themeResetter.setAttribute("aria-hidden", "false");
    } else {
        localStorage.removeItem("theme");
        themeResetter.classList.remove("has-custom-theme");
        themeResetter.setAttribute("aria-hidden", "true");
    }

    // Dispatch a custom event for comment systems.
    const event = new CustomEvent("themeChanged", {
        detail: { theme: theme }
    });
    window.dispatchEvent(event);
}

function resetTheme() {
    const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const defaultTheme = isSystemDark ? "dark" : "light";
    setTheme(defaultTheme);
}

// Function to switch between dark and light themes.
function switchTheme() {
    // Set the new theme based on the current theme.
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme, true); // Save the theme to localStorage when the user changes it.
}

// Initialize the theme switcher button.
themeSwitcher.addEventListener("click", switchTheme, false);
themeResetter.addEventListener("click", resetTheme, false);

themeSwitcher.setAttribute("role", "button");
let togglePressed = currentTheme === "dark" ? "true" : "false";
themeSwitcher.setAttribute("aria-pressed", togglePressed);

// Update the theme based on system preference if the user hasn't manually changed the theme.
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
    const newTheme = e.matches ? "dark" : "light";
    setTheme(newTheme);
});

if (localStorage.getItem("theme")) {
    themeResetter.classList.add("has-custom-theme");
} else {
    themeResetter.classList.remove("has-custom-theme");
}
