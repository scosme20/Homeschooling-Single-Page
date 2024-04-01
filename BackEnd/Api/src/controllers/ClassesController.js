const { Classes: ClassesModels } = require('../models/ClassesModels.js');

const classesController = {
    create: async (req, res) => {
        try {
            const classes = {
                theme: req.body.theme,
                type: req.body.type,
                activities: req.body.activities,
            };

        const response = await ClassesModels.create(classes);

        res.status(201).json({response, msg: "Aula criada com sucesso"});
        } catch (error) {
            console.log('error creating!')
        }
    },
    getAll: async (req, res) => {
        try {
            
            const classes = await ClassesModels.find();

            res.json(classes)
        } catch (error) {
            console.log('error getting all!', error);
        }
    },
    get: async (req, res) => {
        try {
            
            const id = req.params.id;
            const classes = await ClassesModels.findById(id);

            if(!classes) {
                res.status(404).json({msg: "Not Found!"})
                return;
            }

            res.json(classes)
        } catch (error) {
            console.log('error getting ID!', error);
        }
    },
    delete: async (req, res) => {
        try {
            
            const id = req.params.id;
            const classes = await ClassesModels.findById(id)

            if(!classes) {
                res.status(404).json({msg: "Not Found!"})
                return;
            }
            const deleteClasses = await ClassesModels.findByIdAndDelete(id)

            res
            .status(200)
            .json({ deleteClasses, msg: "Deleted Successfully" })

        } catch (error) {
            console.log("Erro no Delete", error)
        }
    },
    update: async (req, res) => {
        const id = req.params.id

        const classes = {
            theme: req.body.theme,
            type: req.body.type,
            activities: req.body.activities,
        };

        const updateClasses = await ClassesModels.findByIdAndUpdate(id, classes)

        if(!updateClasses) {
            res.status(404).json({msg: "Not Found!"})
            return;
        }
        res.status(200).json({classes, msg: "Updated"})
    }
};

module.exports = classesController;