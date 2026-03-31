const userModel = require("../models/auth.model")
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const blackListModel=require('../models/blackList.model')
const blacklistModel = require("../models/blackList.model")
const redis=require('../config/cache')


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
    }).select('+password')

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

async function getMe(req,res){

    const user=await userModel.findById(req.user.id)

    // if(!user){
    //     return res.status(404).json({
    //         message:"User Not found"
    //     })
    // }

    res.status(200).json({
        message:"User fetched Successfully",
        user
    })
    
}

async function logoutUser(req,res){

    const token=req.cookies.token

    if(!token){
        return res.status(401).json({
            message:"Invalid Token"
        })
    }

    const isTokenBlacklisted=await blackListModel.findOne({token})

    if(isTokenBlacklisted){
        return res.status(401).json({
            message:"Token Is Blacklisted"
        })
    }

    res.clearCookie('token')

    await redis.set(token,Date.now().toString(),"EX",60*60)

    res.status(201).json({
        message:"LogOut Successfully"
    })
}

module.exports={
    registerUser,
    loginuser,
    getMe,
    logoutUser
}