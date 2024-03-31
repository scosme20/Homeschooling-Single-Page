const mongoose = require('mongoose');
const { Schema } = mongoose

const disciplineSchema = new Schema({
    content: {
        type: 'string',
        required: true
    },
    description: {
        type: 'string',
        required: true
    },
}, {timestamps: true})

const Discipline = mongoose.model("Discipline", disciplineSchema)

module.export = {
    Discipline,
    disciplineSchema,
}