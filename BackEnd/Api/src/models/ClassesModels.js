const mongoose = require('mongoose');
const { Schema } = mongoose

const classesSchema = new Schema({
    theme: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    activities: {
        type: String,
        required: true
    },
}, {timestamps: true})

const Classes = mongoose.model("Classes", classesSchema)

module.exports = {
    Classes,
    classesSchema
}



