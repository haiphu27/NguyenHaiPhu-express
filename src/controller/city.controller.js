const cityModal = require('../models/city.model')
const axios = require("axios");
const redisClient =require('../models/redis-config')

class CityController {
    constructor() {
    }

    async listCity(req, res, next) {
        const key = req.route.path.split('/')[1];
        try {
            // await axios.get('https://jsonplaceholder.typicode.com/comments')
            cityModal.getListCity()
                .then(async result => {
                    await redisClient.set(key,JSON.stringify(result),{
                        EX:3600
                    });
                    return res.json(result);
                }).catch(err => {
                return res.json({status: 500, message: err.message});
            })
        } catch (e) {
            return res.status(500).json({message: e.message});
        }
    }

    addCity(req, res, next) {
        try {
            cityModal.insertCity(req.body.name, req.body.area)
                .then(result => {
                    res.status(200).json(result)
                })
                .catch(err => {
                    res.status(500).send({error: err.message});
                })
        } catch (err) {
            return res.status(500).json({message: err.message});
        }
    }

    deleteCity(req, res, next) {
        try {
            cityModal.deleteCity(req.query.id)
                .then(result => {
                    res.status(200).json(result)
                })
                .catch(err => {
                    res.status(500).send({error: err.message});
                })
        } catch (err) {
            return res.status(500).json({message: err.message});
        }
    }

    updateCity(req, res, next) {
        try {
            cityModal.updateCity(req.query.id, req.body.name, req.body.area)
                .then(result => {
                    res.status(200).json(result)
                })
                .catch(err => {
                    res.status(500).send({error: err.message});
                })
        } catch (err) {
            return res.status(500).json({message: err.message});
        }
    }
}

module.exports = new CityController()