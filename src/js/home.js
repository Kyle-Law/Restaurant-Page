const home = (() => {
  const createHomeSection = () => {
    const homeSection = document.createElement("section");
    homeSection.classList.add("home");

    homeSection.textContent = "home";
    return homeSection;
  };
  return createHomeSection();
})();

export default home;
