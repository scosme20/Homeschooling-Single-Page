const mongoose = require('mongoose');
const { Schema } = mongoose

const scheduleSchema = new Schema({
    theme: {
        availability: 'boolean',
        required: true
}
}, {timestamps: true})

const Schedules = mongoose.model("Schedules", scheduleSchema)

module.export = {
    Schedules,
    SchedulesSchema,
}



