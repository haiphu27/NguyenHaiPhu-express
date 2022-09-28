const express = require('express')
const router = express.Router()
const cityController = require("../../../controller/city.controller");

router.put('/update', cityController.updateCity)

module.exports = router