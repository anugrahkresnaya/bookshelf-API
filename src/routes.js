const { bookSaveHandler, getBooksHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: bookSaveHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getBooksHandler,
  },
];

module.exports = { routes };
