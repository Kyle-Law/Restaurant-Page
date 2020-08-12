const about = (() => {
  const createAboutSection = () => {
    const aboutSection = document.createElement("section");
    aboutSection.classList.add("about");

    aboutSection.textContent = "about";
    return aboutSection;
  };
  return createAboutSection();
})();

export default about;
