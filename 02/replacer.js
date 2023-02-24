const { Transform } = require('node:stream');

/**
 * 
 * apple banana cherry watermelon apple
 * 
 * 'apple' -> 'raspberry'
 * 
 */

class ReplacerStream extends Transform {
    constructor(options) {
        super(options);

        this.from = options.from;
        this.to = options.to;
    }

    _transform(chunk, encoding, callback) {
        setTimeout(() => {
            callback(new Error('whoops'));
        }, 1000);
        // callback(null, chunk.toString().replaceAll(this.from, this.to));
    }
}

module.exports = ReplacerStream;

// const replacer = new ReplacerStream({ from: 'banana', to: 'rasberry' });

// replacer.on('data', (chunk) => {
//     console.log(chunk.toString());
// });

// replacer.write('apple banana cherry watermelon apple');
