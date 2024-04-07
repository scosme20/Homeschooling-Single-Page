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
    },
    getAll: async(req, res) => {
        try {
            
            const disciplines = await DisciplinesModels.find()

            res.json(disciplines)

        } catch (error) {
            console.log('Error getting all discipline', error);
        }
    },
    get: async (req, res) => {
        try {
            
            const id = req.params.id;
            const disciplines = await DisciplinesModels.findById(id);

            if(!disciplines) {
                res.status(404).json({msg: "Not Found!"})
                return;
            }
            res.json(disciplines)
        } catch (error) {
            console.log('error getting ID!', error);
        }
},  delete: async (req, res) => {
    try {
        const id = req.params.id;
        console.log('ID recebido para exclusão:', id); // Verifique se o ID está sendo recebido corretamente

        const disciplines = await DisciplinesModels.findById(id);
        if (!disciplines) {
            res.status(404).json({ msg: "Disciplina não encontrada!" });
            return;
        }

        const deleteDisciplines = await DisciplinesModels.findByIdAndDelete(id);
        res.status(200).json({ deleteDisciplines, msg: "Disciplina excluída com sucesso" });
    } catch (error) {
        console.log("Erro ao excluir disciplina:", error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
},
update: async (req, res) => {
    const id = req.params.id

    const disciplines = {
        name: req.body.name,
        content: req.body.content,
        description: req.body.description,
    };

    const updateDisciplines = await DisciplinesModels.findByIdAndUpdate(id, disciplines)

    if(!updateDisciplines) {
        res.status(404).json({msg: "Not Found!"})
        return;
    }
    res.status(200).json({disciplines, msg: "Updated"})
}
}

module.exports = disciplineController;