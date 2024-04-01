const router = require('express').Router();

const classesController = require('../controllers/ClassesController.js');

router
.route('/classes')
.post((req, res) => classesController.create(req, res));

router.route('/classes').get((req, res) => classesController.getAll(req, res));

router
.route('/classes/:id')
.get((req, res) => classesController.get(req, res))

router
.route('/classes/:id')
.delete((req, res) => classesController.delete(req, res))

router
.route('/classes/:id')
.put((req, res) => classesController.update(req, res))

module.exports = router;