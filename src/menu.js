import * as helpers from './helpers.js';

const item = "Menu Item";
const description = `Lorem ipsum dolor sit amet, in est molestie quaerendum
accommodare, sed odio expetendis dissentias ad, vel erant nullam nonumes at. No
est velit principes, etiam labitur ad sit. Cu mea.`;
const price = "Price: $0.00";

let menuItems = document.createElement('ul');
menuItems.classList.add('menu');

// loop to create filler text menu items
for (let i = 0; i < 10; i++) {
  const li = document.createElement('li');
  li.classList.add('menu-item');

  const div = document.createElement('div');

  div.appendChild(helpers.createHeading(3, item));
  div.appendChild(helpers.createP(description));
  div.appendChild(helpers.createP(price));

  li.appendChild(div);
  menuItems.appendChild(li);
}

const article = helpers.createArticle([
  helpers.createHeading(2, 'Menu'),
  menuItems
]);

function showMenuTab() {
  const tabContent = document.getElementById('tab-content');

  tabContent.innerHTML = "";
  tabContent.appendChild(article);

  helpers.toggleTab('menu');
}

export { showMenuTab };
