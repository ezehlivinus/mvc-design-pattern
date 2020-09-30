const bookController = require('../controllers/bookController')
const { Book } = require('../models/book')

describe('book controller test', () => {


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
})