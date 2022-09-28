const express = require('express')
const router = express.Router()
const cache = require("../../../middaware/cache");
const cityController = require("../../../controller/city.controller");

router.get('/list',cache,cityController.listCity)

module.exports = router