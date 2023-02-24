/**
 * mocha, jasmine, jest, tape
 * "assertions"
 * 
 */

const assert = require('node:assert/strict');
const ReplacerStream = require('../replacer');

describe('Replacer Stream', () => {
    it('replace word', (done) => {
        const replacer = new ReplacerStream({ from: 'banana', to: 'rasberry' });

        replacer.on('data', (chunk) => {
            assert.strictEqual(chunk.toString(), 'apple rasberry cherry watermelon apple');
        });

        replacer.on('end', () => {
            done();
        });

        replacer.write('apple banana cherry watermelon apple');
        replacer.end();
    });
});