const mongoose = require('mongoose');
const { Schema } = mongoose

const classesSchema = new Schema({
    theme: {
        type: 'string',
        required: true
    },
    type: {
        type: 'string',
        required: true
    },
    activities: {
        type: 'string',
        required: true
    }
}, {timestamps: true})

const Classes = mongoose.model("Classes", classesSchema)

module.export = {
    Classes,
    classesSchema,
}



