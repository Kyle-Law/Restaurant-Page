const menu = (() => {
  const createMenuSection = () => {
    const menuSection = document.createElement("section");
    menuSection.classList.add("menu");

    menuSection.textContent = "menu";
    return menuSection;
  };
  return createMenuSection();
})();

export default menu;
