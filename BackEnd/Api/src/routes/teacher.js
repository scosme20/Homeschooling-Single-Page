const router = require('express').Router();

const teacherControllers= require('../controllers/TeachersControllers.js');

//POST
router
.route('/teachers')
.post((req, res) => teacherControllers.create(req,res));


//GETALL
router
.route('/teachers')
.get((req, res) => teacherControllers.getAll(req, res));

//GETBYID

router
.route('/teachers/:id')
.get((req, res) => teacherControllers.get(req, res))

//DELETE
router
.route('/teachers/:id')
.delete((req, res) => teacherControllers.delete(req, res))


//UPDATE

router
.route('/teachers/:id')
.put((req, res) => teacherControllers.update(req, res))

module.exports = router