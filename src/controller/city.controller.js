const cityModal = require('../models/city.model')
const redis = require("redis");
const axios = require("axios");

class CityController {
    constructor() {
    }

    async listCity(req, res, next) {
        const key = req.route.path.split('/')[1];
        try {
            const client = redis.createClient();
            await client.connect();
            // cityModal.getListCity()
            await axios.get('https://jsonplaceholder.typicode.com/comments')
                .then(async result => {
                    await client.setex(key,3600, JSON.stringify(result.data));
                    return res.json(result.data);
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