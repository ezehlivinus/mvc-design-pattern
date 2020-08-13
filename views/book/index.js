// This handles listing of books

const { list } = require('../../controllers/bookController')

const listAll = () => {
    let books = list();
    console.log(books);
}

listAll();

