const express=require('express')
const authController=require('../controllers/auth.controller')
const authMiddleware = require('../middleware/auth.middleware')

const authRouter=express.Router()

authRouter.post('/register',authController.registerUser)
authRouter.post('/login',authController.loginuser)

authRouter.get('/get-me',authMiddleware.authuser,authController.getMe)
authRouter.get('/logout',authMiddleware.authuser,authController.logoutUser)


module.exports=authRouter