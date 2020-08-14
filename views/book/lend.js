
const { detail, list, lend } = require('../../controllers/bookController')


const lendABook = () => {
    let book = detail('Things fall apart');

    book = lend(book);

    console.log(book);

}


lendABook();
// list all books,
// console.log(list());

