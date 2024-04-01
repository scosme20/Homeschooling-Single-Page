const router = require('express').Router();

const teacherControlle= require('../controllers/TeachersControllers.js');

router.route('/teachers').post((req, res) => teacherControlle.create(req,res));

module.exports = router