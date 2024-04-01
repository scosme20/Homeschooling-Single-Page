const mongoose = require('mongoose')
const { Schema} = require('mongoose')

const disciplineSchemas = new Schema ({
    name: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
}, {timestamps: true})

const Disciplines = mongoose.model('Disciplines', disciplineSchemas)

module.exports = {
    Disciplines,
    disciplineSchemas
}