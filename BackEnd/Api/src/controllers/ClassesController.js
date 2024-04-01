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
    }
};

module.exports = classesController;