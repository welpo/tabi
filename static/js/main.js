const themeSwitcher = document.querySelector('.theme-switcher input');
let currentTheme = localStorage.getItem('theme');
let userHasManuallyChangedTheme = currentTheme !== null;

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  themeSwitcher.checked = theme === 'dark';
  localStorage.setItem('theme', theme);
  currentTheme = theme;
}

if (currentTheme) {
  setTheme(currentTheme);
} else {
  const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(isSystemDark ? 'dark' : 'light');
}

function switchTheme(e) {
  const newTheme = e.target.checked ? 'dark' : 'light';
  setTheme(newTheme);
  userHasManuallyChangedTheme = true;
}

themeSwitcher.addEventListener('change', switchTheme, false);

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!userHasManuallyChangedTheme) {
    setTheme(e.matches ? 'dark' : 'light');
  }
});
