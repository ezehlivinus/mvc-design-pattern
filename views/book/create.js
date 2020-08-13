// This handles creation of a new book
const { create } = require('../../controllers/bookController');
const { Book } = require('../../models/book');

const newBook = () => {
    let title = 'some title';
    let author = 'authors name';
    let imprint = 'London';

    const request = { title, author, imprint };

    const response =  create(request);
    console.log(response);
}

newBook();

