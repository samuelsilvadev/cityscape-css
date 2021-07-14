(() => {
  const THEME_CLASSLISTS = {
    LIGHT: "light",
    DARK: "dark"
  };

  const themeController = document.querySelector(
    '[data-script-id*="theme-controller"]'
  );
  const body = document.body;

  setThemeClasses(true);

  function setThemeClasses(isLight) {
    if (isLight) {
      body.classList.remove(THEME_CLASSLISTS.DARK);
      body.classList.add(THEME_CLASSLISTS.LIGHT);
    } else {
      body.classList.remove(THEME_CLASSLISTS.LIGHT);
      body.classList.add(THEME_CLASSLISTS.DARK);
    }
  }

  themeController.addEventListener("click", (event) => {
    const isLightTheme = !event.currentTarget.checked;

    setThemeClasses(isLightTheme);
  });
})();
