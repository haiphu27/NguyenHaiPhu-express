module.exports=class DBConnect{
    static connectMySQL(){
        {
            return require('mysql2').createConnection({
                host     : process.env.HOST,
                user     : process.env.USER,
                password : process.env.PASSWORD,
                database : process.env.DATABASE
            })
        }
    }
}
