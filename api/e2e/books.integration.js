const request = require('supertest');

const createApp = require('../src/app');


describe('test for books', () => {
   let app = null;
   let server = null;
    beforeAll(() => {
         app = createApp();
         server = app.listen(3001);
    }) ;

    afterAll(async () => {
        await server.close(); 
    });
    
    describe('test for [GET]/api/v1/books', () => {
        test('should return books', () => {
            return request(app)
                .get('/api/v1/books') //always use slash first in the route
                .expect(200)
                .then(({body}) => {
                    console.log(body);
                    expect(body.length).toEqual(1);
            });
        }); 
    });
});

