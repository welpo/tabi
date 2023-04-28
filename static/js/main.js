const themeSwitcher = document.querySelector('.theme-switcher');
let currentTheme = localStorage.getItem('theme');
let userHasManuallyChangedTheme = currentTheme !== null;

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  currentTheme = theme;
}

function switchTheme() {
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
  userHasManuallyChangedTheme = true;
}

themeSwitcher.addEventListener('click', switchTheme, false);

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!userHasManuallyChangedTheme) {
    setTheme(e.matches ? 'dark' : 'light');
  }
});
