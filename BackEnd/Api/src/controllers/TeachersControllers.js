const { teachers: TeachersModels } = require('../models/TeachersModels')
const mongoose = require('mongoose')

            const teachersController = mongoose.model('teachers', {
                name: String,
                type: String,
                discipline: String
            });

module.exports =    teachersController;