(() => {
  const CLASSLIST = {
    CHECKED: "checked"
  };

  const toggleLabel = document.querySelector(
    '[data-script-id*="toggle-label"]'
  );
  const toggleInput = document.querySelector(
    '[data-script-id*="toggle-input"]'
  );

  toggleInput.addEventListener("click", (event) => {
    const isChecked = event.currentTarget.checked;

    if (isChecked) {
      toggleLabel.classList.add(CLASSLIST.CHECKED);
    } else {
      toggleLabel.classList.remove(CLASSLIST.CHECKED);
    }
  });
})();
