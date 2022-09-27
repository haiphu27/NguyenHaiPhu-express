const express=require('express')
const app = express()
const redis=require('redis')
const redisClient=redis.createClient()
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
// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         secure: false,
//         httpOnly: true,
//         maxAge:5*60*1000
//     }
// }))

connectDB.connect()
    .then(() => {
      console.log("database connected")
    })
    .catch(err => {
      console.log(err.message)
    })

// app.get('/get-sess',(req,res)=>{
//     res.send(req.session)
// })
// app.get('/set-sess',(req,res)=>{
//     req.session.user={
//         username:"phu",
//         age:25,
//         email:"phu@example.com",
//     }
//     res.send('OK')
// })

app.use('/api/city',cityRoutes)


const port = process.env.PORT
app.listen(port, () => {
  console.log("You are listening on https://localhost:"+port);
});