const navBar = (() => {
  const navBar = document.createElement("div");
  navBar.classList.add("navBar");
  document.body.appendChild(navBar);

  const addButton = (navButton, buttonName, buttonId) => {
    navButton = document.createElement("button");
    navButton.innerHTML = buttonName;
    navButton.id = buttonId;
    navButton.classList.add("navButtonStyle");
    navBar.appendChild(navButton);
  };
  return { addButton };
})();

export { navBar as navBar };
