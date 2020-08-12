const contact = (() => {
  const createContactSection = () => {
    const contactSection = document.createElement("section");
    contactSection.classList.add("contact");

    contactSection.textContent = "contact";
    return contactSection;
  };
  return createContactSection();
})();

export default contact;
