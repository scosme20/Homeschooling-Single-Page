const router = require('express').Router();

const studentsController = require('../controllers/StudentsController')

//POST
router
.route('/students')
.post((req, res) => studentsController.create(req,res));

//GETALL
router
.route('/students')
.get((req, res) => studentsController.getAll(req,res));

//GETBYID
router
.route('/students/:id')
.get((req, res) => studentsController.get(req, res));

//DELETE
router
.route('/students/:id')
.delete((req, res) => studentsController.delete(req, res))


//UPDATE

router
.route('/students/:id')
.put((req, res) => studentsController.update(req, res))

module.exports = router