let i = 0;

let obj = {};

function handler(req, res) {
    i++;

    obj[i] = "*".repeat(10000).split('');

    res.end(i.toString());
}

// module.exports = handler;

export default handler;