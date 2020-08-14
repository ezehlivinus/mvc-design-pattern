// This handles creation of a new book
const { create, list } = require('../../controllers/bookController');
const { Book } = require('../../models/book');

const newBook = () => {
    let title = 'some title';
    let author = 'authors name';
    let imprint = 'London Imprint';

    const request = { title, author, imprint };
    // you can create more books by calling create() 
    // multiple time on diff object parameters
    const response =  create(request);

    console.log('\nNew book created\n\n', response);
    
}

newBook();
console.log('\n\n', list())

