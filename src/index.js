import "./style/style.css";
import home from "./js/home";
import about from "./js/about";
import menu from "./js/menu";
import contact from "./js/contact";

const appendChildren = (parent, children) => {
  children.forEach((child) => parent.appendChild(child));
};

const content = document.getElementById("content");

const tabSwitcher = (section) => {
  // First child is header, second child is section
  content.removeChild(content.childNodes[1]);

  if (section === "home") {
    content.appendChild(home);
  } else if (section === "about") {
    content.appendChild(about);
  } else if (section === "menu") {
    content.appendChild(menu);
  } else {
    content.appendChild(contact);
  }
};

const header = (() => {
  const createLogo = () => {
    const logoContainer = document.createElement("a");
    logoContainer.setAttribute("href", "#");
    logoContainer.setAttribute("id", "logo");
    const logo = document.createElement("h1");
    logo.textContent = "Brocollily";
    logoContainer.appendChild(logo);
    return logoContainer;
  };

  const createUL = () => {
    const navBar = document.createElement("ul");
    navBar.setAttribute("class", "nav-container");

    const li = (linkText, section) => {
      const listItem = document.createElement("li");
      listItem.setAttribute("class", "nav-item");
      const navLink = document.createElement("button");
      navLink.setAttribute("href", "#");
      navLink.setAttribute("class", "nav-link");
      navLink.innerText = linkText;
      navLink.addEventListener("click", () => {
        tabSwitcher(section);
      });
      listItem.appendChild(navLink);
      return listItem;
    };
    appendChildren(navBar, [
      li("Home", "home"),
      li("About", "about"),
      li("Menu", "menu"),
      li("Contact", "contact"),
    ]);
    return navBar;
  };

  const nav = () => {
    const nav = document.createElement("nav");
    appendChildren(nav, [createLogo(), createUL()]);
    return nav;
  };

  const header = () => {
    const header = document.createElement("header");
    header.appendChild(nav());
    return header;
  };

  return header();
})();

appendChildren(content, [header, home]);
