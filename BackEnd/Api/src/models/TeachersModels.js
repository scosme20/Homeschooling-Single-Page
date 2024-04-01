const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const teachersSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    discipline: {
        type: String,
        required: true,
    }
}, {timestamps: true})

const Teachers = mongoose.model('Teachers', teachersSchema)

module.exports = {
    Teachers,
    teachersSchema
}



