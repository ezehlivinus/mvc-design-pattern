# mvc-design-pattern
This is a simple demo of the Model View Controller (MVC) design pattern in vanilla javascript without using existing library or framework.
THIS IS A DEMO AND IT IS FOR LEARNING PURPOSE ONLY and not meant for live app.

## repo url
<a href="https://github.com/ezehlivinus/mvc-design-pattern">mvc-design-patter</a>

## File Structure
Project folder: mvc-design-pattern
- controllers
    - `bookController.js` book logic handler
- models
    - `book.js` the book model
    - `model.js` an abstract base model inheritable by other models. example Book...
- views
    - book
        - `create.js`
        - `edit.js`
        - `index.js`
        - `detail.js`
        - `lend.js`
- databases
    - `books.js`

Base `controller, and view` was intentionally not created. It will perhaps be created in the future. However, `model.js` is the base model for all entities like: User, Book ... on this project.

## Usage
0. Requirements: `node.js` installed. All scripts in this project are JS. It does not require setting up a server.

1. Clone or <a href="https://repl.it/@ezehlivinus/mvc-design-pattern">run online</a>

2. To fetch or list all books, use the command: `node views/book/index.js`

3. To fetch a single book, use the command: `node views/book/detail.js` You can open the file to see the change the search query according to specs.

4. To update or edit a book: `node views/book/edit.js`. You can also check the edit view to make changes.

5. To create a book: `node views/book/create.js`.

6. To lend a book: `node views/book/lend.js`.



## Contributing
It will be great if you decide to contribute to this small app and make it better. For now there is no guide line except that the coding style need to follow: Airbnb Style guide and ESlint standard.
Just make a pull request.

## Disclaimer
Note that the data at `databases/books.js` are dummy data and not (or may not be) accurate inline with what exists out there.

## Author
<a href="https://github.com/ezehlivinus">Ezeh Livinus</a>