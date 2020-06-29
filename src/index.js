import './styles.css';

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
  content.appendChild(createHeader([createHeading(1, 'Restaurant')]));

  // append main to #content
  content.appendChild(createMain([
    createImage('../src/pasta.jpg', 'bowl of spaghetti'),
    createTabs(['Description', 'Menu', 'Contact']),
    createArticle([
      createHeading(2, 'Description'),
      createP(p1),
      createP(p2)
    ])
  ]));
}

// helper functions
function createHeading(level, text) {
  const heading = document.createElement(`h${level}`);
  heading.textContent = text;
  return heading;
}

function createHeader(children) {
  const header = document.createElement('header');
  return populateParent(header, children);
}

function createImage(src, alt) {
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  return img;
}

function createP(text) {
  const p = document.createElement('p');
  p.textContent = text;
  return p;
}

function createArticle(children) {
  const article = document.createElement('article');
  return populateParent(article, children);
}

function createMain(children) {
  const main = document.createElement('main');
  return populateParent(main, children);
}

function createTab(text) {
  const div = document.createElement('div');
  div.textContent = text;
  div.classList.add('tab');
  if (text == 'Description') {
    div.classList.add('selected');
  }
  return div;
}

function createTabs(tabNames) {
  const div = document.createElement('div');
  div.classList.add('tabs');
  tabNames.forEach(name => div.appendChild(createTab(name)));
  return div;
}

function populateParent(parent, children) {
  children.forEach(child => parent.appendChild(child));
  return parent;
}
