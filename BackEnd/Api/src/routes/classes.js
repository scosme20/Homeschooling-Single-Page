const router = require('express').Router();

const classesController = require('../controllers/ClassesController');

router
.route("/classes")
.post((req, res) => classesController.create(req, res));

module.exports = router;