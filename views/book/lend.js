
const { detail, list } = require('../../controllers/bookController')


const lend = () => {
   let book = detail('things fall apart');
   if (!book || book === undefined && book.length === 0) {
       console.log('Not found');
       return false;
   }

   book.isLended = true;
   console.log(book);
}

lend();
// list all books, and see change has been made
console.log(list());
