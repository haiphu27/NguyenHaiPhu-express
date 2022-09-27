const express=require('express')
const cors=require('cors')

const app = express()
require('dotenv').config()

const cityRoutes=require('./routes/city.router')

const cityDB=require('./models/db')
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

app.get('/api/test',(req,res)=>{
    res.send('api test fix lan 1')
})

app.use('/api/city',cityRoutes)

const PORT = process.env.PORT||3000
app.listen(PORT, () => {
  console.log("You are listening on http://localhost:"+PORT)
})