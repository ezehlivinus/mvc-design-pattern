const bookController = require('../controllers/bookController')
const { Book } = require('../models/book')

describe('book controller test', () => {

    let book;

    beforeEach(() => {
        const request = {
            author: 'Robert Green',
            title: '48 Laws of power',
            imprint: 'London'
        };
        book = new Book(request.title, request.author, request.imprint);

        
      });
      

    it('should create a book', () => {
        const request = {
            author: 'Robert Green',
            title: '48 Laws of power',
            imprint: 'London'
        };        

        const response = bookController.create(request)

        expect(response.status).toBe('success');

        expect(response.data).toMatchObject(request);

    });

    it('should update a book and return a book', () => {

        const request = {
            author: 'Donald Trump',
            title: '48 Laws of power',
            imprint: 'London'
        };
              
        const response = bookController.update(book, request)

        expect(response.status).toBe('success');

        expect(response.book).toMatchObject(request);

        expect(response.book.author).toBe(request.author);

    });
})