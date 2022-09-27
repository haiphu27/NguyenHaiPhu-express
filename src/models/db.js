
const mysql = require("mysql2");
const util = require("util");

const connection = mysql.createConnection({
    host     : process.env.HOST,
    user     : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE
})

const query = util.promisify(connection.query).bind(connection);
const connect = util.promisify(connection.connect).bind(connection);

module.exports = {query,connect}