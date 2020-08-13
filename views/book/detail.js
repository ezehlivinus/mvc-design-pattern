// handle showing of a book details

const { detail } = require('../../controllers/bookController')

/**
 * 
 * @param query search-param  
 */
const getAbook = (query) => {
    let book = detail(query);
    console.log(book);
}

getAbook('Things fall apart');


