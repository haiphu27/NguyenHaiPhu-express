const express=require('express')
const app = express()

const cors=require('cors')
require('dotenv').config()
const session=require('express-session')

const cityRoutes=require('./routes/city.router')

const connectDB=require('./models/db')

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}));
app.use(cors())


connectDB.connect()
    .then(() => {
      console.log("database connected")
    })
    .catch(err => {
      console.log(err.message)
    })

app.get('api/test',(req,res)=>{
    res.send('api test fix lan 1')
})

app.use('/api/city',cityRoutes)

const port = process.env.PORT
app.listen(port, () => {
  console.log("You are listening on https://localhost:"+port);
});