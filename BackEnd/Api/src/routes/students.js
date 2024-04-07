const router = require('express').Router();

const studentController = require('../controllers/StudentsController');

//POST
router
.route('/student')
.post((req, res) => studentController.create(req, res));


//GETALL
router
.route('/student')
.get((req, res) => studentController.getAll(req, res));


//GETBYID
router
.route('/student/:id')
.get((req, res) => studentController.get(req, res))


//DELETE
router
.route('/student/:id')
.delete((req, res) => studentController.delete(req, res))


//UPDATE
router
.route('/student/:id')
.put((req, res) => studentController.update(req, res))

module.exports = router;