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

function createTab([text, callback]) {
  const li = document.createElement('li');
  li.textContent = text;
  li.classList.add('tab');
  li.setAttribute('id', text.toLowerCase());

  if (text == 'Description') {
    li.classList.add('selected');
  }

  li.addEventListener('click', callback);
  return li;
}

function createTabs(tabNames) {
  const ul = document.createElement('ul');
  ul.classList.add('tabs');
  tabNames.forEach(name => ul.appendChild(createTab(name)));
  return ul;
}

function createContentTab() {
  const div = document.createElement('div');
  div.setAttribute('id', 'tab-content');
  return div;
}

function toggleTab(tabID) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    if (tab.getAttribute('id') == tabID) {
      tab.classList.add('selected');
    } else {
      tab.classList.remove('selected');
    }
  });
}

function populateParent(parent, children) {
  children.forEach(child => parent.appendChild(child));
  return parent;
}

export {
  createHeading, createHeader, createImage, createP, createArticle,
  createMain, createTab, createTabs, createContentTab, toggleTab, populateParent
};
