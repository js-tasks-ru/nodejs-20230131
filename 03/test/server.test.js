/**
 * 1. launch server
 * 2. make request
 * 3. check response
 * 4. stop server
 */

const axios = require('axios');
const assert = require('node:assert/strict');
const server = require('../server');

describe('server tests', () => {
    before((done) => {
        server.listen(3000, done);
    });

    after((done) => {
        server.close(done);
    });

    it('replace word', async () => {
        const response = await axios({
            method: 'post',
            url: 'http://localhost:3000',
            params: {
                from: 'banana',
                to: 'raspberry',
            },
            data: 'apple banana cherry watermelon apple'
        });

        assert.strictEqual(response.data, 'apple raspberry cherry watermelon apple');
    });
});