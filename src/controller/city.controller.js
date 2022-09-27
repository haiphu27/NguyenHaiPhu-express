const cityModal=require('../models/city.model')


class CityController{
    constructor(){}

    async listCity(req, res, next){
        cityModal.getListCity()
            .then(result =>)
    }
      async addACity(req, res, next){

    }
      async updateACity(req, res, next){

    }
      async deleteACity(req, res, next){

    }
}

module.exports =new CityController()