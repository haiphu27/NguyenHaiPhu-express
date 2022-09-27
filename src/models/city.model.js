const cityDB=require('./db')

module.exports=class CityModal{
    constructor() {}

    static getListCity(){
        return new Promise(function(resolve, reject){
            let sql=`select * from City`
            cityDB.query(sql,(err,result)=>{
                if (err){
                    reject(err);
                }
                resolve(result);
            })
        })
    }

    static insertCity(name,area){
        return new Promise(function(resolve, reject){
            let sql=`insert into City(name,area) values('${name}','${area}')`
            cityDB.query(sql,(err,result)=>{
                if (err){
                    reject(err);
                }
                resolve({msg:"add success",data:{name,area}});
            })
        })
    }
     static updateCity(id,name,area){
        return new Promise(function(resolve, reject){
            let sql=`UPDATE city SET name='${name}',area='${area}' WHERE idcity='${id}'`
            cityDB.query(sql,(err,result)=>{
                if (err){
                    reject(err);
                }
                resolve({msg:"update success",data:{name,area}});
            })
        })
    }

    static deleteCity(id){
        return new Promise(function(resolve, reject){
            let sql=`delete from City where idcity ='${id}'`
            cityDB.query(sql,(err,result)=>{
                if (err){
                    reject(err);
                }
                resolve({msg:'delete success',data:{name,area}});
            })
        })
    }

}