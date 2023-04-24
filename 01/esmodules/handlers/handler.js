let i = 0;

function handler(req, res) {
    // req - req.url, req.headers

    i++;

    res.end(`your request number is ${i}`);
}

// module.exports = handler;
export default handler;

// common js
// ES Modules (ecmascript)