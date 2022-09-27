const cityModal = require('../models/city.model')
const redis = require('redis')

class CityController {
    constructor() {
    }

    async listCity(req, res, next) {
        try {
            cityModal.getListCity()
                .then(async result => {
                    return res.json(result);
                }).catch(err => {
                return res.json({status: 500, message: err.message});
            })
        } catch (e) {
            return res.status(500).json({message: e.message});
        }
    }

    addCity(req, res, next) {
        try{
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
        try{
            cityModal.deleteCity(req.params.id)
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
        try{
            cityModal.updateCity(req.params.id, req.body.name, req.body.area)
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