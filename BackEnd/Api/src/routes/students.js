const router = require('express').Router();

const studentsController = require('../controllers/StudentsController')

router.route('/students').post((req, res) => studentsController.create(req,res));

module.exports = router