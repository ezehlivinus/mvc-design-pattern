const { Book } = require('../models/book');
const { books } = require('../databases/books');

/**
 * create new book
 * 
 * @param {*} object 
 */
exports.create = (request) => {
    let {title, author, imprint } = request;

    const book = new Book(title, author, imprint);

    books.push(book);

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
    // it is assumed that book is available and can be found in the db
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
    // instance of a class ... let make it one so that it can have method and class behavior
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

// lend a book
exports.lend = (book) => {
    if (book.isLended) {
        return 'This book is not available';
    }

    book.isLended = true;

    return {status: 'successfully lend', data: book};

}

