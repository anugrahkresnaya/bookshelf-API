const {
  bookSaveHandler,
  getBooksHandler,
  getBookDetailsByIdHandler,
  editBooksHandler,
  deleteBookHandler,
} = require('./handler');

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
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBooksHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookHandler,
  },
];

module.exports = { routes };
