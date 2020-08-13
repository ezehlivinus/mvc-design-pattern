const { Book } = require('../models/book');

/**
 * create new book
 * 
 * @param {*} object 
 */
const create = (object) => {
    const book = new Book('Things fall apart', 'Ezeh', 'Location');
    return book;
}

/**
 * update a book
 * 
 * @param {*} book 
 * @param {*} request 
 */
const update = (book, request) => {
    // In real world app: we may want to find the book first
    // with a given id
    const book = book.update(request);

    return {'status': 'success', book};
}

/**
 * 
 * @param {*} query 
 */
const findBook = (query) => {
    let book = Book.find(query);
    return book;
}



