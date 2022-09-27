const express = require('express')
const router = express.Router()
const cityController = require('../controller/city.controller')
const redis = require("redis");


// async function cache(req, res, next) {
//     const key = req.route.path.split('/')[1];
//     const client = redis.createClient("redis://localhost:6379");
//     await client.connect();
//     await client.get(key, function (err, data) {
//         if (err) throw err;
//         if (data != null) {
//             return res.json(data);
//         } else {
//             next();
//         }
//     });
// }

router.get('/list', cityController.listCity)
router.post('/add', cityController.addCity)
router.put('/update/:id', cityController.updateCity)
router.delete('/delete/:id', cityController.deleteCity)

module.exports = router