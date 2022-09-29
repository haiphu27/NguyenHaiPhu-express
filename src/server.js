const express = require('express')
const cors = require('cors')
require('dotenv').config()
const pool = require('./models/db')
const fs = require('fs')
const path = require('path')
const redisClient = require('./models/redis-config');

const app = express()

redisClient.connect().then(() => {
    console.log('connected to redis!!');
});

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));
app.use(cors())

pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err.message);
        }
        connection.release()
    }
)


const routePath = path.join(__dirname, 'routes');
fs.readdirSync(routePath).forEach(async (filename) => {
    try {
        let name = filename.split('.')[0]
        let pathFile = './routes/' + filename
        app.use(`/api/${name}`, require(pathFile));
    } catch (error) {
        console.log(error.message);
    }
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("You are listening on http://localhost:" + PORT)
})




