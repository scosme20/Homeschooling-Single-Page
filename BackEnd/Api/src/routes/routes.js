const router = require('express').Router();

const classesRoutes = require('./classes')
const disciplinesRoutes = require('./disciplines')
const studentsRoutes = require('./students')
const teachersRoutes = require('./teacher')

router.use('/', classesRoutes)
router.use('/', disciplinesRoutes)
router.use('/', studentsRoutes)
router.use('/', teachersRoutes)



module.exports = router;