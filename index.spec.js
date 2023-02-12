const request = require('supertest');
const app = require('./server');

describe('Test My app server', () => {
    it('should get main route', async () => { 
        const res = await request(app).get('/')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('message')
})
})

/**
 * Deus te abençoe !
 * Tutorial: https://www.youtube.com/watch?v=HzjHDsoHwB4
 */