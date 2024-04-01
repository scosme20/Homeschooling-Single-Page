const router = require('express').Router();

const disciplinesController = require('../controllers/DisciplineController')

router.route('/disciplines').post((req, res) => disciplinesController.create(req, res));


module.exports = router;
