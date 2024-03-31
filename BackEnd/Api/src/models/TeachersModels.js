const mongoose = require('mongoose');
const { Schema } = mongoose

const teacherSchema = new Schema({
    name: {
        type: 'string',
        required: true
    },
    type: {
        type: 'string',
        required: true
    },
    discipline: {
        type: 'string',
        required: true
    }
}, {timestamps: true})

const Teachers = mongoose.model("Teachers", teacherSchema)

module.export = {
    Teachers,
    teachersSchema,
}



