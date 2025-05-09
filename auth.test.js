const request = require('supertest');
const app = require('../server'); // Import your Express app

describe('POST /auth/login', () => {
    it('should return a token when credentials are valid', async () => {
        const res = await request(app).post('/auth/login').send({ username: 'test', password: 'password' });
        expect(res.status).toBe(200);
        expect(res.body.token).toBeDefined();
        expect(typeof res.body.token).toBe('string'); // Check that the token is a string
    });

    it('should return 401 when credentials are invalid', async () => {
        const res = await request(app).post('/auth/login').send({ username: 'invalid', password: 'wrong' });
        expect(res.status).toBe(401); // Unauthorized is a better status code for invalid credentials
        expect(res.body.error).toBeDefined(); // Optionally check for error message in the response
    });
});
