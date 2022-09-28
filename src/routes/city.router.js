const express = require('express')
const router = express.Router()
const cityController = require('../controller/city.controller')
const cache = require('../middaware/cache')

router.get('/list',cache,cityController.listCity)
router.post('/add', cityController.addCity)
router.put('/update/:id', cityController.updateCity)
router.delete('/delete/:id', cityController.deleteCity)

module.exports = router