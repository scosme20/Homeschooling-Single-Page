const router = require('express').Router();

const disciplineController = require('../controllers/DisciplineController');

//POST
router
.route('/disciplines')
.post((req, res) => disciplineController.create(req, res));


//GETALL
router
.route('/disciplines')
.get((req, res) => disciplineController.getAll(req, res));


//GETBYID
router
.route('/disciplines/:id')
.get((req, res) => disciplineController.get(req, res))


//DELETE
router
.route('/disciplines/:id')
.delete((req, res) => disciplineController.delete(req, res))


//UPDATE
router
.route('/disciplines/:id')
.put((req, res) => disciplineController.update(req, res))

module.exports = router;


