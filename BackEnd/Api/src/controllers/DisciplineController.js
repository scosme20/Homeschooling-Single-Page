const { discipline: DisciplineModels } = require('../models/DisciplineModels')
const mongoose = require('mongoose')

            const disciplineController = mongoose.model('discipline', {
                content: String,
                description: String,
            });

module.exports =    disciplineController;