import './styles.css';
import * as helpers from './helpers.js';

// text for paragraphs
const p1 = `Lorem ipsum dolor sit amet, at quot postea cum.
Sumo scripta eam ex. Ne velit convenire quo, vero inimicus eam te. Ipsum
meliore no sit, vis at brute periculis, ei aeterno accusata vix.`;

const p2 = `Errem tantas eu vis, dolor tollit accusam qui cu,
vitae mandamus euripidis vix te. Paulo salutandi accommodare vix ea. Sed ut
aperiam intellegat, sit viderer graecis sensibus ad, scripta delectus
explicari vix at. Dicat intellegam duo et, pri ex dicant
tantas, vel audiam partiendo ad.`;


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
    helpers.createArticle([
      helpers.createHeading(2, 'Description'),
      helpers.createP(p1),
      helpers.createP(p2)
    ])
  ]));
}
