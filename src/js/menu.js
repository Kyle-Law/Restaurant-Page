import appendChildren from './helpers';

const menu = (() => {
  const menuList = [
    {
      title: 'Grilled Beef with Broccoli',
      subtitle:
        'You’ll get all the traditional flavors of the classic takeout dish by using a marinade made up of oyster sauce, Shaoxing wine, and soy sauce, but the steak and broccoli are grilled for a fresh summertime variation.',
      imgLink:
        'https://assets.bonappetit.com/photos/597f6557a2d4466309949378/1:1/w_1600%2Cc_limit/0817-murray-mancini-grilled-chinese-beef-broccoli.jpg',
    },
    {
      title: 'Broccoli Caesar',
      subtitle:
        "You've never met a better, brighter riff on the classic Caesar than this raw broccoli twist.",
      imgLink:
        'https://assets.bonappetit.com/photos/5bc0fb73b64423561c543f50/1:1/w_1600%2Cc_limit/broccoli-caesar.jpg',
    },
    {
      title: 'Grilled Broccoli with Avocado and Sesame',
      subtitle:
        'Broccoli can take more heat on the grill than you might think; it won’t taste burnt unless you actually set it on fire.',
      imgLink:
        'https://assets.bonappetit.com/photos/5938212a70d3934f3de23370/1:1/w_1600%2Cc_limit/Broc%2520Salad_20170522%2520WEB10237.jpg',
    },
    {
      title: 'Cracked Farro and Broccoli Salad',
      subtitle:
        'A crunchy, salty salad that proves (once again!) that it’s worth having a mandoline slicer.',
      imgLink:
        'https://assets.bonappetit.com/photos/57acc01253e63daf11a4d9ac/1:1/w_1600%2Cc_limit/cracked-farro-and-broccoli-salad.jpg',
    },
    {
      title: "Farmers' Market Quinoa Salad",
      subtitle:
        'Use whatever looks good at the market, but if broccoli is in season, definitely grab some.',
      imgLink:
        'https://assets.bonappetit.com/photos/57ace46df1c801a1038bc8a6/1:1/w_1600%2Cc_limit/farmers-market-quinoa-salad.jpg',
    },
    {
      title: 'Grilled Mustard Broccoli',
      subtitle:
        'This is not your average side dish recipe: The broccoli is slathered in a spiced yogurt sauce, then grilled for even more flavor.',
      imgLink:
        'https://assets.bonappetit.com/photos/5914ca7d1164e45c330144d0/1:1/w_1600%2Cc_limit/grilled-mustard-broccoli.jpg',
    },
    {
      title: 'Cold Sesame Noodles with Broccoli and Kale',
      subtitle:
        'Instead of deep-frying the broccoli in this sesame noodles recipe, we used a high-heat roasting method and swapped the restaurant’s sesame brittle for toasted seeds. Similar flavors; easier to make at home.',
      imgLink:
        'https://assets.bonappetit.com/photos/5824f2f4d2d071f65de3fbc1/1:1/w_1600%2Cc_limit/cold-sesame-noodles-with-broccoli-and-kale.jpg',
    },
    {
      title: 'Pork Shoulder with Pineapple and Sesame Broccoli',
      subtitle:
        'While pork rib chops would be fine for this recipe, thin shoulder steaks or blade chops have more fat, meaning they’ll stay ultrajuicy even after a hard sear.',
      imgLink:
        'https://assets.bonappetit.com/photos/58700a9079d17c98746231fa/1:1/w_1600%2Cc_limit/pork-shoulder-with-pineapple-and-sesame-broccoli.jpg',
    },
    {
      title: 'Grilled Broccoli and Arugula Salad',
      subtitle:
        'An unexpected side dish that can be made hours ahead of a party; wait until the last minute to toss together.',
      imgLink:
        'https://assets.bonappetit.com/photos/57ae345d53e63daf11a4e391/1:1/w_1600%2Cc_limit/grilled-broccoli-and-arugula-salad.jpg',
    },
    {
      title: 'Roasted Broccoli',
      subtitle: 'Our method to perfectly roast broccoli every single time.',
      imgLink:
        'https://assets.bonappetit.com/photos/57acd5e41b3340441497522b/1:1/w_1600%2Cc_limit/ROAST-VEG-7-of-7.jpg',
    },
    {
      title: 'Broccoli and Cheese Quiche',
      subtitle:
        'This is a remarkable quiche recipe for a few reasons: The dough is intentionally generous so that it can be formed into tall walls all around, and the filling is jam-packed full of healthy greens. They balance out the butter and cream, right?',
      imgLink:
        'https://assets.bonappetit.com/photos/5824f6b374299e805041bff3/1:1/w_1600%2Cc_limit/broccoli-and-cheese-quiche.jpg',
    },
    {
      title: 'Roasted and Charred Broccoli with Peanuts',
      subtitle:
        'Believe it or not, we came up with a new way to chop broccoli: Include the stems!',
      imgLink:
        'https://assets.bonappetit.com/photos/57ad266cf1c801a1038bc9d8/1:1/w_1600%2Cc_limit/roasted-and-charred-broccoli-with-peanuts.jpg',
    },
  ];

  const createMenuItem = (title, subtitle, imgLink) => {
    const div = document.createElement('div');
    div.classList.add('menu-item');

    // Title
    const h3 = document.createElement('h3');
    h3.classList.add('menu-item-title');
    h3.textContent = title;
    // Subtitle
    const p = document.createElement('p');
    p.classList.add('menu-item-subtitle');
    p.textContent = subtitle;

    // Image
    const img = document.createElement('img');
    img.classList.add('menu-item-image');
    img.setAttribute('src', imgLink);

    // Appending Nodes to container
    appendChildren(div, [img, h3, p]);

    return div;
  };

  const createMenuSection = () => {
    const menuSection = document.createElement('section');
    menuSection.classList.add('menu');

    // Create Each Menu
    menuList.forEach((item) => {
      const menuItem = createMenuItem(item.title, item.subtitle, item.imgLink);
      menuSection.appendChild(menuItem);
    });

    return menuSection;
  };
  return createMenuSection();
})();

export default menu;
