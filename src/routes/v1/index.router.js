const express = require('express')
const router = express.Router()


router.use('/city',require('./city/index.router'))
router.use('/country',require('./country/index.router'))


module.exports = router