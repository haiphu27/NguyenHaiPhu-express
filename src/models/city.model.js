const connectMySQL=require('./db').connectMySQL()

module.exports=class CityModal{

    constructor() {
    }

    static listCity(){
        return new Promise(function(resolve, reject){
            let sql=`select * from City`
            connectMySQL.query(sql,(err,result)=>{
                if (err){
                    reject(err);
                }
                resolve(result);
            })
        })
    }

    static addCity(name,area){
        return new Promise(function(resolve, reject){
            let sql=`insert into City(name,type) values('${name}','${area}')`
            connectMySQL.query(sql,(err,result)=>{
                if (err){
                    reject(err);
                }
                resolve(result);
            })
        })
    }

    static deleteCity(req,res){
        const id=req.params.id
        return new Promise(function(resolve, reject){
            let sql=`delete from City where idCity ='${id}'`
            connectMySQL.query(sql,(err,result)=>{
                if (err){
                    reject(err);
                }
                resolve('delete success');
            })
        })
    }



}