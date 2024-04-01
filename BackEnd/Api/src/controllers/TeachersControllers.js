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
    },
    getAll: async (req, res) => {
        try {
            
            const teachers = await TeachersModels.find()

            res.json(teachers)

        } catch (error) {
            console.log('Failed to get all teachers')
        }
    },
    get: async (req, res) => {
        try {
            
            const id = req.params.id;
            const teachers = await TeachersModels.findById(id);

            if(!teachers) {
                res.status(404).json({msg: "Not Found!"})
                return;
            }

            res.json(teachers)
        } catch (error) {
            console.log('error getting ID!', error);
        }
},
delete: async (req, res) => {
    try {
        
        const id = req.params.id;
        const teachers = await TeachersModels.findById(id)

        if(!teachers) {
            res.status(404).json({msg: "Not Found!"})
            return;
        }
        const deleteTeachers = await TeachersModels.findByIdAndDelete(id)

        res
        .status(200)
        .json({ deleteTeachers, msg: "Deleted Successfully" })

    } catch (error) {
        console.log("Erro no Delete", error)
    }
},
update: async (req, res) => {
    const id = req.params.id

    const teachers = {
        name: req.body.name,
        email:req.body.email,
        type: req.body.type,
        discipline: req.body.discipline,
    };

    const updateTeachers = await TeachersModels.findByIdAndUpdate(id, teachers)

    if(!updateTeachers) {
        res.status(404).json({msg: "Not Found!"})
        return;
    }
    res.status(200).json({teachers, msg: "Updated"})
}
}

module.exports = teachersController