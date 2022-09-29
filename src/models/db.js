const mysql = require("mysql2");

const pool = mysql.createPool({
    connectionLimit: 10,
    host     : process.env.HOSR,
    user     : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE,
})

module.exports =pool;