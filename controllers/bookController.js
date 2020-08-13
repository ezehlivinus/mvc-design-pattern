const { Book } = require('../models/book');

/**
 * create new book
 * 
 * @param {*} object 
 */
exports.create = (request) => {
    let {title, author, imprint } = request;
    const book = new Book(title, author, imprint);
    let response = {
        status: 'success',
        data: book
    }
    return response;
}

/**
 * update a book
 * 
 * @param {*} book a book object 
 * @param {*} request and object holding form/JSON data
 */
exports.update = (book, request) => {
    // In real world app: we may want to find the book first
    // with a given id
    book = book.update(request);

    return {'status': 'success', book};
}

/**
 * returns a single book
 * @param query book title
 */
exports.detail = (query) => {
    let book = Book.find(query);
    // this book is just an object, but not really an 
    // instance of a class ... let make it one so that it can hae method and class behavior
    let {title, author, imprint } = book;
    book = new Book(title, author, imprint);

    return book;
}

/**
 * returns list of books
 *
 */
exports.list = () => {
    let book = Book.all();
    return book;
}



