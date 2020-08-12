const { Model } = require('./model');


class Book extends Model {
    print () {
        console.log(this.name);
    }
}


const book = new Book().print();

