const { bookSaveHandler, getBooksHandler, getBookDetailsByIdHandler } = require('./handler');

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
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookDetailsByIdHandler,
  },
];

module.exports = { routes };
