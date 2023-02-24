const http = require('node:http');

const server = new http.Server();

// req1, req2, req3
// req1 - 3s, req2 - 6s, req3 - 9s

// (macro)task queue: []
server.on('request', (req, res) => {
    // const now = Date.now();
    // while(now + 3000 > Date.now()) {}

    // res.end('hello world');
    setTimeout(() => {
        res.end('hello world');
    }, 3000);
});

server.listen(3000);
