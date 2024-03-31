const { schedules: SchedulesModels } = require('../models/schedulesModels')
const mongoose = require('mongoose')

            const schedulesController = mongoose.model('schedules', {
                availability: Boolean,
            });

module.exports =    schedulesController;