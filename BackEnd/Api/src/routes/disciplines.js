const router = require('express').Router();

const disciplinesController = require('../controllers/DisciplineController')

//POST
router
.route('/disciplines')
.post((req, res) => disciplinesController.create(req, res));


//GETALL
router
.route('/disciplines')
.get((req, res) => disciplinesController.getAll(req, res))



//GETBYID
router
.route('/disciplines/:id')
.get((req, res) => disciplinesController.get(req, res))



//DELETE
router
.route('/disciplines/:id')
.delete((req, res) => disciplinesController.delete(req, res))


//UPDATE

router
.route('/disciplines/:id')
.put((req, res) => disciplinesController.update(req, res))

module.exports = router;
