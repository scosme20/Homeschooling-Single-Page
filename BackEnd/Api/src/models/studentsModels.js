const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const studentsSchemas = new Schema ({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
}, {timestamps: true})

const Students = mongoose.model('Students', studentsSchemas)

module.exports = {
    Students,
    studentsSchemas
}

