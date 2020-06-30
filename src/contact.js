import * as helpers from './helpers.js';

const article = helpers.createArticle([
  helpers.createHeading(2, 'Contact'),
  helpers.createP("Telephone: (555) 555-5555"),
  helpers.createP("E-mail: example@example.com")
]);

function showContactTab() {
  const tabContent = document.getElementById('tab-content');

  tabContent.innerHTML = "";
  tabContent.appendChild(article);

  helpers.toggleTab('contact');
}

export { showContactTab };
