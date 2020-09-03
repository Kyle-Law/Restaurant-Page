import appendChildren from './helpers';

const about = (() => {
  const createAboutContainer = () => {
    const div = document.createElement('div');
    div.classList.add('about-container');

    const h2 = document.createElement('h2');
    h2.textContent = 'Broccoli is an edible green plant in the cabbage family (family Brassicaceae, genus Brassica) whose large flowering head and stalk is eaten as a vegetable. The word broccoli comes from the Italian plural of broccolo, which means "the flowering crest of a cabbage", and is the diminutive form of brocco, meaning "small nail" or "sprout"';

    const h4 = document.createElement('h4');
    h4.textContent = 'Benefits of Brocolli';

    const ul = document.createElement('ul');
    const benefits = [
      'Reducing the risk of cancer',
      'Improving bone health',
      'Boosting immune health',
      'Aiding digestion',
      'Reducing inflammation',
      'Reducing the risk of diabetes',
      'Protecting cardiovascular health',
    ];
    benefits.forEach((b) => {
      const li = document.createElement('li');
      li.textContent = b;
      ul.appendChild(li);
    });
    appendChildren(div, [h2, h4, ul]);
    return div;
  };

  const createAboutSection = () => {
    const aboutSection = document.createElement('section');
    aboutSection.classList.add('about');

    appendChildren(aboutSection, [createAboutContainer()]);
    return aboutSection;
  };
  return createAboutSection();
})();

export default about;
