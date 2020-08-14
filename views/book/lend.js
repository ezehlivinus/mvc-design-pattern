
const { detail, list, lend } = require('../../controllers/bookController')

// const 

const lendABook = () => {
    let book = detail('Things fall apart');

    book = lend(book);

    console.log(book);

}

var x = 1;

lendABook();
// list all books,
// console.log(list());

