var Request = require('request');
let URL = 'http://localhost:3000';

describe('Server', () => {
    var server;
    beforeAll(() => {
        server = require('../app');
    });
    afterAll(() => {
        server.close();
    });
    describe('GET /', () => {
        let data = {};
        beforeAll((done) => {
            Request.get(URL, (err, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            });
        });
        it('Status 200', () => {
            expect(data.status).toBe(200);
        });
        it('Body', () => {
            expect(data.body).toBe('API Is Running');
        });
    });

    describe('GET /test', () => {
        let data = {};
        beforeAll((done) => {
            Request.get(`${URL}/test`, (err, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });
        it('Status 500', () => {
            expect(data.status).toBe(500);
        });
        it('Body', () => {
            expect(data.body.message).toBe('API Internal Servicer Error');
        });
    });
});