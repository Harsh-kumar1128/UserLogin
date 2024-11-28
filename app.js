const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
const bodyparser = require('body-parser')
const dbconnect = require('./config/db')
const userroute = require('./Routes/Userloginroutes')


dbconnect()
app.use(bodyparser.json())
app.use('/api',userroute)

app.listen(port,()=>{
    console.log(`server is running on port no ${port}`)
})