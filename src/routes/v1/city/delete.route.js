const express = require('express')
const cityController = require("../../../controller/city.controller");
const router = express.Router()

router.delete('/delete', cityController.deleteCity)

module.exports =router;