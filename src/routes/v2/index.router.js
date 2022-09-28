const express = require('express')
const router = express.Router()

router.get('/testV2',(req, res, next) => {
    res.send('/v2/testV2')
})

module.exports = router