const { Model } = require('./model');

/**
 * @class Book
 */
class Book extends Model {
    #isLended = false;
    constructor (title, author, imprint) {
        super();
        this.title = title;
        this.author = author;
        this.imprint = imprint;
        this.#isLended = false;
    }

    get isLended () {
        return this.#isLended;
    }

    set isLended(value=true) {
        this.#isLended = value;
    }
    
}



exports.Book = Book;
