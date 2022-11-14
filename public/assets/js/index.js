const colorThemes = document.querySelectorAll('[name="theme"]');

// salva il tema
const storeTheme = function (theme) {
  localStorage.setItem("theme", theme);
};

// imposta il tema
const setTheme = function () {
  const activeTheme = localStorage.getItem("theme");
  colorThemes.forEach((themeOption) => {
    if (themeOption.id === activeTheme) {
      themeOption.checked = true;
    }
  });
};

//ascolta un click
colorThemes.forEach((themeOption) => {
  themeOption.addEventListener("click", () => {
    storeTheme(themeOption.id);
  });
});

document.onload = setTheme();