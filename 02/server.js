const http = require('node:http');
const ReplacerStream = require('./replacer');

const server = new http.Server();

server.on('request', (req, res) => {
    const replacer = new ReplacerStream({ from: 'apple', to: 'raspberry' });

    req.pipe(replacer).pipe(res);

    replacer.on('error', err => {
        console.log(err);
        res.statusCode = 500;
        res.end('something went wrong');
    });
});

server.listen(3000);
