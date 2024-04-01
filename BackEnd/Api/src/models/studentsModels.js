const mongoose = require('mongoose');
const { classesSchema } = require('../models/ClassesModels')
const { disciplineSchema } = require('../models/DisciplineModels')
const { schedulesSchema } = require('../models/schedulesModels')
const { teacherSchema } = require('../models/TeachersModels')
const { Schema } = mongoose


const studentsSchema = new Schema({
    name: {
        type: 'string',
        required: true
    },
    note: {
        type: 'number',
        required: true
    },
    presence: {
        type: 'number',
        required: true
    },
    classes : {
        type: [classesSchema]
    },
    discipline : {
        type: [disciplineSchema]
    },
    schedules : {
        type: [schedulesSchema]
    },
    teachers : {
        type: [teachersSchema]
    },

}, {timestamps: true})

const Students = mongoose.model("Students", studentsSchema)

module.export = Students;

