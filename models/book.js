const { Model } = require('./model');


class Book extends Model {
    constructor (name, author, imprint) {
        super();
        this.name = name;
        this.author = author;
        this.imprint = imprint;
    }
    
}


exports.Book = Book;
