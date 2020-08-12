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
    
}


exports.Model = Model;
