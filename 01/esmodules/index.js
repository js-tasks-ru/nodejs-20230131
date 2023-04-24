// const http = require('node:http'); // lodash, axios
// const handler = require('./handler');

import http from 'node:http';
import handler from './handlers/handler.js?foo=bar'; // URL

const server = new http.Server();

server.on('request', handler);

server.listen(3000);