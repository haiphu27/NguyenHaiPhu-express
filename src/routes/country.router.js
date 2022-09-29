const router = require('express').Router()

router.get('/country2',(req, res, next) => {
    res.send('country2.json')
})

module.exports = router