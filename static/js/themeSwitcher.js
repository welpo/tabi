// Get the theme switcher button element.
const themeSwitcher = document.querySelector(".theme-switcher");

// Retrieve theme from localStorage.
let currentTheme = localStorage.getItem("theme");

// Function to switch between dark and light themes.
function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    // Dispatch a custom event for comment systems.
    const event = new CustomEvent("themeChanged", {
        detail: { theme: theme }
    });
    window.dispatchEvent(event);
}

function switchTheme() {
    // Set the new theme based on the current theme.
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
}

themeSwitcher.addEventListener("click", switchTheme, false);

// Update the theme based on system preference if the user hasn't manually changed the theme.
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
    if (!localStorage.getItem("theme")) {
        const newTheme = e.matches ? "dark" : "light";
        setTheme(newTheme);
    }
});
