// Get the theme switcher button element.
const themeSwitcher = document.querySelector(".theme-switcher");

// Retrieve theme from localStorage.
let currentTheme = localStorage.getItem("theme");

// Function to switch between dark and light themes.
function switchTheme() {
    // Set the new theme based on the current theme.
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);

    // Send a message to the Utterances iframe to change its theme.
    document.querySelectorAll(".utterances-frame").forEach((frame) => {
        frame.contentWindow.postMessage(
            { type: 'set-theme', theme: `github-${currentTheme}` },
            '*'
        );
    });
}

// Initialize the theme switcher button.
themeSwitcher.addEventListener("click", switchTheme, false);

// Update the theme based on system preference if the user hasn't manually changed the theme.
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
    if (!localStorage.getItem("theme")) {
        currentTheme = e.matches ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", currentTheme);
    }
});

// Fix the theme switcher button not working on the first click by updating currentTheme.
if (!currentTheme) {
    currentTheme = document.documentElement.getAttribute("data-theme");
}
