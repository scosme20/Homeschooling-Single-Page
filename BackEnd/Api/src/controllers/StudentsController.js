const { Students: StudentsModels } = require('../models/studentsModels');

const StudentsController = {
    create: async (req, res) => {
        try {
            const students = {
                name: req.body.name,
                email: req.body.email
            };

        const response = await StudentsModels.create(students);

        res.status(201).json({response, msg: "Aula criada com sucesso"});
        } catch (error) {
            console.log('error creating!')
        }
    },
    getAll: async (req, res) => {
        try {
            
            const students = await  StudentsModels.find();

            res.json(students)
        } catch (error) {
            console.log('error getting all!', error);
        }
    },
    get: async (req, res) => {
        try {
            

            const id = req.params.id;
            const students = await StudentsModels.findById(id);

            if(!students) {
                res.status(404).json({msg: "Not Found!"})
                return;
            }

            res.json(students)
        } catch (error) {
            console.log('error getting ID!', error);
        }
    },
    delete: async (req, res) => {
        try {
            
            const id = req.params.id;
            const students = await StudentsModels.findById(id)

            if(!students) {
                res.status(404).json({msg: "Not Found!"})
                return;
            }
            const deleteStudents = await StudentsModels.findByIdAndDelete(id)

            res
            .status(200)
            .json({ deleteStudents, msg: "Deleted Successfully" })

        } catch (error) {
            console.log("Erro no Delete", error)
        }
    },
    update: async (req, res) => {
        const id = req.params.id

        const students = {
            name: req.body.name,
            email: req.body.email
        };

        const updateStudents = await StudentsModels.findByIdAndUpdate(id, students)

        if(!updateStudents) {
            res.status(404).json({msg: "Not Found!"})
            return;
        }
        res.status(200).json({students, msg: "Updated"})
    }
};

module.exports = StudentsController;
