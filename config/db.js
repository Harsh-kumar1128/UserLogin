const mongoose = require('mongoose')
require('dotenv').config()

const dbconnect = (req,res)=>{
    try {
         mongoose.connect(process.env.Mongo_url)
        console.log("Connection successfully")
    } catch (error) {
        console.log("Connection not connected")
    }
}

module.exports = dbconnect