const router = require('express').Router();

const classesRoutes = require('./classes')

router.use('/', classesRoutes)



module.exports = router;