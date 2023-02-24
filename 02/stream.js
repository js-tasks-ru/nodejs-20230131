/**
 * readable (file, network)
 * writable (file, network)
 * duplex, transform (gzip)
 */

const fs = require('node:fs');

const stream = fs.createReadStream('text.txt', {
    highWaterMark: 9,
    // encoding: 'utf-8'
});

let body = [];
stream.on('data', (chunk) => {
    body.push(chunk);
});

stream.on('end', () => {
    console.log(Buffer.concat(body).toString());
});
