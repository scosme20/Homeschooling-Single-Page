const mongoose = require('mongoose');
const { Schema } = mongoose

const studentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Students = mongoose.model('Students', studentSchema);

module.exports = {
    Students,
    studentSchema
}
