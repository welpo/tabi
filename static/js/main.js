const themeSwitcher = document.querySelector('.theme-switcher input');
const currentTheme = localStorage.getItem('theme');

// detect the user's preferred color scheme and activate it
if (currentTheme) {
    document.documentElement.setAttribute( 'data-theme', currentTheme);
    themeSwitcher.checked = currentTheme === 'dark';
} else {
    const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute( 'data-theme', isSystemDark? 'dark' : 'light');
    themeSwitcher.checked = isSystemDark;
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
