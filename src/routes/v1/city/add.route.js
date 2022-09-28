const express = require('express')
const router = express.Router()
const cityController = require("../../../controller/city.controller");

router.post('/add', cityController.addCity)

module.exports =router;