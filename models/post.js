const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: false,
        default: Date.now()
    },
});

module.exports = model('Posts', postSchema);
