const { Teachers: TeachersModels } = require('../models/TeachersModels.js')

const teachersController = {
    create: async (req, res) => {
        try {

            const teachers = {
                name: req.body.name,
                email:req.body.email,
                type: req.body.type,
                discipline: req.body.discipline,
            };

            const response = await TeachersModels.create(teachers);
            res.status(201).json({response, msg: 'Teacher created successfully'})
        } catch (error) {
            console.log('Error creating teachers')
        }
    }
}

module.exports = teachersController