import './styles.css';

document.addEventListener('DOMContentLoaded', addContent);

function addContent() {
  const content = document.getElementById('content');

  // create the header
  const header = document.createElement('header');
  const headerH1 = document.createElement('h1');
  headerH1.textContent = 'Restaurant';

  // create main element
  const main = document.createElement('main');

  // create the article
  const article = document.createElement('article');
  const pastaImage = document.createElement('img');
  pastaImage.setAttribute('src', '../src/pasta.jpg');
  pastaImage.setAttribute('alt', 'bowl of spaghetti');

  // create article heading
  const articleH2 = document.createElement('h2');
  articleH2.textContent = 'Description';

  // create the paragraphs
  const p1 = document.createElement('p');
  p1.textContent = `Lorem ipsum dolor sit amet, at quot postea cum.
  Sumo scripta eam ex. Ne velit convenire quo, vero inimicus eam te. Ipsum
  meliore no sit, vis at brute periculis, ei aeterno accusata vix.`;

  const p2 = document.createElement('p');
  p2.textContent = `Errem tantas eu vis, dolor tollit accusam qui cu,
  vitae mandamus euripidis vix te. Paulo salutandi accommodare vix ea. Sed ut
  aperiam intellegat, sit viderer graecis sensibus ad, scripta delectus
  explicari vix at. Dicat intellegam duo et, pri ex dicant
  tantas, vel audiam partiendo ad.`;

  // append the header
  header.appendChild(headerH1);
  content.appendChild(header);

  // append content to article
  article.appendChild(articleH2);
  article.appendChild(p1);
  article.appendChild(p2);

  // append the article to main
  main.appendChild(pastaImage);
  main.appendChild(article);

  // append main to #content
  content.appendChild(main);
}
