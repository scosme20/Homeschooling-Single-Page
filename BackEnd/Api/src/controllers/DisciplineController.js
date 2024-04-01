const { Disciplines: DisciplinesModels } = require('../models/DisciplineModels')

const disciplineController = {
    create: async(req, res) => {
        try {
            
            const disciplines = {
                name: req.body.name,
                content: req.body.content,
                description: req.body.description,
            };

            const response = await DisciplinesModels.create(disciplines)

            res.status(201).json({response, msg: "disciplina criada com sucesso"});

        } catch (error) {
            console.log('Error creating a new discipline', error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}

module.exports = disciplineController;