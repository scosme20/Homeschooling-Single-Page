const { Students: StudentsModels } = require('../models/studentsModels')

const studentsController = {
    create: async (req, res) => {
        try {
            
            const students = {
                name: req.body.name, 
                email: req.body.email,
            }

            const response = await StudentsModels.create(students)

            res.status(201).json({response, msg: "estudante criado com sucesso"});
        } catch (error) {
            console.log('Failed to create student')
        }
    }
}

module.exports = studentsController