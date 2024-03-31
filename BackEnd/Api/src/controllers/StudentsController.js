const { student: StudentModels } = require('../models/studentsModels')
const mongoose = require('mongoose')

            const studentsController = mongoose.model('students', {
                name: String,
                note: Number,
                presence: Number
            });

module.exports =    studentsController;