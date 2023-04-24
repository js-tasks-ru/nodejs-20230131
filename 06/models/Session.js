const mongoose = require('mongoose');
const connection = require('../libs/connection');

const schema = new mongoose.Schema({
    key: {
        type: String,
        unique: true,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
});

const Session = connection.model('Session', schema);

module.exports = Session;