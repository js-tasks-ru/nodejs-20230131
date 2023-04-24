let i = 0;

const obj = {};

function handler(req, res) {
    // req - req.url, req.headers
    // obj[Date.now()] = '*'.repeat(10000).split('');

    i++;
    res.end(`your request number is ${i}`);
}

module.exports = handler;

// common js
// ES Modules (ecmascript)