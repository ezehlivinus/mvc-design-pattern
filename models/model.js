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

            this.property = value;
        }
        return this;    
    }

    
    delete () {
        console.log('success');
        return {status: 'success'}
    }

    static find (query) {
        // I could search a database to find the resource
        // that match query
        console.log(query)
        // an object of the searched resource would be returned
        return {'book': `the book details: ${query}`};
    }
    
}


exports.Model = Model;
