const userModel = require("../models/auth.model")
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')


async function registerUser(req,res){

    const {username,email,password}=req.body

    const isUserAlreadyExists=await userModel.findOne({
        $or:[
            {username},{email}
        ]
    })

    if(isUserAlreadyExists){
        return res.status(400).json({
            message:"User Already Exists"
        })
    }

    const hashedPassword=await bcrypt.hash(password,10)

    const user=await userModel.create({
        username,   
        email,
        password:hashedPassword
    })

    const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1d"})

    res.cookie("token",token)

    res.status(201).json({
        message:"User registered Successfully !",
        user:{
            id:user._id,
            username:user.username,
            email:user.email
        }

    })

}

async function loginuser(req,res){

    const {username,email,password}=req.body

    const user=await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })

    if(!user){
        return res.status(401).json({
            message:"Invalid Credientials"
        })
    }

    const validPass=bcrypt.compare(password,user.password)

    if(!validPass){
        return res.status(401).json({
            message:"Invalid Credentials"
        })
    }

    const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1d'})

    res.cookie("token",token)

    res.status(200).json({
        message:"user logged in Successfully",
        user:{
            id:user._id,
            username:user.username,
            email:user.email
        }
    })


}



module.exports={
    registerUser,
    loginuser
}