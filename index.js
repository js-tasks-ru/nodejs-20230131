const http = require('node:http');

const server = new http.Server();

server.on('request', (req, res) => {
    res.end("hello wolrd");
});

server.listen(3000);