const { Model } = require('./model');

/**
 * @class Book
 */
class Book extends Model {

    constructor (title, author, imprint) {
        super();
        this.title = title;
        this.author = author;
        this.imprint = imprint;
        this.isLended = false;
 
    }

    getIsLended () {
        return this.isLended;
    }

    setIsLended(value=true) {
        this.isLended = value;
    }
    
}



exports.Book = Book;
