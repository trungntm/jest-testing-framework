const request = require('supertest');
const app = require('./app')

// TODO: Use done to notify that it ends
describe('Test the root path', () => {
    test('It should response the GET method', (done) => {
        request(app).get('/').then((res) => {
            expect(res.statusCode).toBe(200);
            done();
        });
    });
});

// TODO: Promise way
describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return request(app).get('/').then((res) => {
            expect(res.statusCode).toBe(200);
        });
    });
});

// TODO: Async, await way to test
describe('Test the root path', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
})

// TODO: Why not the Supertest way
describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return request(app).get('/').expect(200);
        // If not return, this test will always pass, and don't end 
    });
})