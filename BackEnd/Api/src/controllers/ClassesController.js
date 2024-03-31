const { classes: ClassesModels } = require('../models/ClassesModels')
const mongoose = require('mongoose')

            const classesController = mongoose.model('classes', {
                theme: String,
                type: String,
                activities: String
            });

module.exports =    classesController;