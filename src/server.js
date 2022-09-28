const express=require('express')
const cors=require('cors')
require('dotenv').config()
const cityDB=require('./models/db')
const fs = require('fs')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}));
app.use(cors())

cityDB.connect()
    .then(() => {
      console.log("database connected")
    })
    .catch(err => {
      console.log(err.message)
    })

const routePath = path.join(__dirname, 'routes');
fs.readdirSync(routePath).forEach(async (filename) => {
    // let route = path.join(routePath, filename);
   //  let a=('./routes/'+filename)
    try {
        let name= filename.split('.')[0]
        app.use(`/api/${name}`,require(`./routes/city.router`));
    } catch (error) {
        console.log(error.message);
    }
});



const PORT = process.env.PORT||3000
app.listen(PORT, () => {
  console.log("You are listening on http://localhost:"+PORT)
})




