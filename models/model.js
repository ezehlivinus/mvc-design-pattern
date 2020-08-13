const { books } = require('../databases/books');

const db = {
    books
}

/**
 * Abstract class Model
 * @class Model
 */
class Model {
    constructor () {
        if (this.constructor == Model) {
            throw new Error('This class is an abstract class and cannot be instantiated');
        }
    }

    // other properties and methods common to all model
    
    /**
     * @param object the key/value pair to be updated
     * @returns objects the objects 
     */
    update (object) {
        for (let [property, value] of Object.entries(object)) {
            if (!this.hasOwnProperty(property)) {
                console.log(`Error: ${this.constructor.name} model does not have '${property}' property`);
                return false;
            }
            // do not use dot notation to avoid creating new property as object.property
            this[ property ] = value;

        }
        return this;    
    }

    
    delete () {
        console.log('success');
        return {status: 'success'}
    }

    /**
     * This is an exact search for now
     * @param {book-title} query
     */
    static find (query) {

        let collection = `${this.name.toLowerCase()}s`;

        // only work for book model
        let result = db[collection].find( ({ title }) => title.toLowerCase() === query.toLowerCase() );
        return result;
        // an object of the searched resource would be returned
        return {'book': `the book details: ${query}`};
    }

    /**
     * @returns all collection/table
     */
    static all () {
        let collection = `${this.name.toLowerCase()}s`;
        return db[collection];
    }
    
}

exports.Model = Model;
