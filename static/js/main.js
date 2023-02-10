//https://codepen.io/codeorum/pen/bGedRJO

var themeSwitcher = document.querySelector('.theme-switcher input');
var currentTheme = localStorage.getItem('theme');

// check what is current theme right now and activate it
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        themeSwitcher.checked = true;
    }
}

// switch between themes
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

// event listener on checkbox change
themeSwitcher.addEventListener('change', switchTheme, false);
