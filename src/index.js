import './styles.css';
import * as helpers from './helpers.js';
import { description } from './description.js';

document.addEventListener('DOMContentLoaded', addContent);

function addContent() {
  const content = document.getElementById('content');

  // append the header
  content.appendChild(
    helpers.createHeader([helpers.createHeading(1, 'Restaurant')])
  );

  // append main to #content
  content.appendChild(helpers.createMain([
    helpers.createImage('../src/pasta.jpg', 'bowl of spaghetti'),
    helpers.createTabs(['Description', 'Menu', 'Contact']),
    description
  ]));
}
