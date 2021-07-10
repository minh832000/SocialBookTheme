var blockSettingMenu = document.querySelector('.setting-menu');
var btnDarkMode = document.querySelector('#themeModeToggle');

console.log(blockSettingMenu);
function showSettingMenu() {
      blockSettingMenu.classList.toggle('show-setting-menu');
}

btnDarkMode.onclick = () => {
      btnDarkMode.classList.toggle('dark-mode-active');
      document.body.classList.toggle('dark-mode');
};