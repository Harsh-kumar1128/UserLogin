const express = require('express')
const route = express.Router()
const Usercontroller = require('../Controller/Usercontroller')

route.post('/register',Usercontroller.Userregister)
route.post('/login',Usercontroller.Userlogin)

module.exports = route