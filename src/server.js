const express=require('express')
const cors=require('cors')
const app = express()
require('dotenv').config()
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

app.use(require('./routes/index.router'))

const PORT = process.env.PORT||3000
app.listen(PORT, () => {
  console.log("You are listening on http://localhost:"+PORT)
})




