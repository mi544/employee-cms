const router = require('express').Router()
const api = require('./api')
const hbs = require('./hbs')

router.use('/', hbs)
router.use('/api', api)

module.exports = router
