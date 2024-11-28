const Users = require('../Models/Userloginmodel')

const Userregister = async (req,res)=>{
    try {
        const {name,email,password} = req.body
        const useremail = await Users.findOne({email})
        if(useremail){
            res.status(400).json("User Already exits")
        }
       const usercreate = new Users(req.body)
       await usercreate.save()
       res.status(201).json("User register Sucessfully")
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const Userlogin = async (req,res)=>{
    try {
        const {email,password} = req.body
        const useremail = await Users.findOne({email})
        if(!useremail){
            res.status(400).json("Please Registerd")
        }
        if(useremail.password!== password){
            res.status(400).json("Invalid email or password")
        }
        res.status(201).json("Successfully Login")
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports = {Userregister,Userlogin}