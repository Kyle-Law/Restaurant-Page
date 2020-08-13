import appendChildren from './helpers';

const home = (() => {
  const topHome = () => {
    // Container
    const div = document.createElement('div');
    div.classList.add('home-container');
    // Title
    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome To Brocollily';
    h1.classList.add('home-title');
    // Sub title
    const h2 = document.createElement('h2');
    h2.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    h2.classList.add('home-sub-title');
    // Append Nodes
    appendChildren(div, [h1, h2]);
    return div;
  };

  const createHomeSection = () => {
    // Create Section
    const homeSection = document.createElement('section');
    homeSection.classList.add('home');

    // Appending Nodes
    appendChildren(homeSection, [topHome()]);
    return homeSection;
  };
  return createHomeSection();
})();

export default home;
