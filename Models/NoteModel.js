const mongoose = require('mongoose');

const definition = {
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
};

const options = {
    timestamps: true
}

const noteSchema = new mongoose.Schema(definition, options);
const noteModel = mongoose.model('Note', noteSchema, 'notes');

module.exports = noteModel;