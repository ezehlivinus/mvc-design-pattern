
const { update, detail } = require('../../controllers/bookController');

const editBook = () => {

    let book = detail('Things fall apart');

    const request = { author: 'Ezeh Livinus', imprint: 'CEC' };

    const response =  update(book, request);
    console.log(response);
}

editBook();
