const express=require('express')
const router=express.Router()
const cityController=require('../controller/city.controller')

router.get('/list',cityController.listCity)
router.post('/create',cityController.listCity)
router.put('/:id',cityController.listCity)
router.delete('/:id',cityController.listCity)

module.exports =router