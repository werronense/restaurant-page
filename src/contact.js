import * as helpers from './helpers.js';

const article = helpers.createArticle([
  helpers.createHeading(2, 'Contact'),
  helpers.createP("Telephone: (555) 555-555"),
  helpers.createP("E-mail: example@example.com")
]);

export { article as contact };
