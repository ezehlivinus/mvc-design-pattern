const { Model } = require('./model');


class Book extends Model {
    constructor (name, author, imprint) {
        super();
        this.name = name;
        this.author = author;
        this.imprint = imprint;
    }
    
}


const book = new Book('Things fall apart', 'Ezeh', 'Location');
book.update({name: 'ezeh', age: 26});
let b = Book.find(book.name);

