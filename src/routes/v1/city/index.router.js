const express = require('express')
const router = express.Router()

router.use('/list',require('./list.route') )
router.use('/add',require('./add.route') )
router.use('/update',require('./update.route') )
router.use('/delete',require('./delete.route') )

module.exports = router