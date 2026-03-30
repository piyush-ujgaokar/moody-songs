const express=require('express')
const authController=require('../controllers/auth.controller')

const authRouter=express.Router()

authRouter.post('/register',authController.registerUser)
authRouter.post('/login',authController.loginuser)

module.exports=authRouter