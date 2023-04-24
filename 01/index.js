const http = require('node:http'); // lodash, axios
const handler = require('./handler');

const server = new http.Server();

server.on('request', handler);

server.listen(3000);