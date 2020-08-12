import "./style/style.css";
import home from "./js/home";
import about from "./js/about";
import menu from "./js/menu";
import contact from "./js/contact";

const appendChildren = (parent, children) => {
  children.forEach((child) => parent.appendChild(child));
};

const content = document.getElementById("content");

const tabController = (section) => {
  // First child is header, second child is section
  content.removeChild(content.childNodes[1]);

  if (section === "home") {
    content.appendChild(home);
    document.getElementById("home-btn").focus();
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
    logoContainer.addEventListener("click", () => {
      tabController("home");
    });
    return logoContainer;
  };

  const createUL = () => {
    const navBar = document.createElement("ul");
    navBar.setAttribute("class", "nav-container");

    const createLi = (linkText, section) => {
      const listItem = document.createElement("li");
      listItem.setAttribute("class", "nav-item");
      const navBtn = document.createElement("button");

      navBtn.setAttribute("class", "nav-btn");
      navBtn.setAttribute("id", "home-btn");
      navBtn.innerText = linkText;
      navBtn.addEventListener("click", () => {
        tabController(section);
      });
      listItem.appendChild(navBtn);
      return listItem;
    };

    appendChildren(navBar, [
      createLi("Home", "home"),
      createLi("About", "about"),
      createLi("Menu", "menu"),
      createLi("Contact", "contact"),
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
