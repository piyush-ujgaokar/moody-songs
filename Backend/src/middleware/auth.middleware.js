const jwt=require('jsonwebtoken')
const redis=require('../config/cache')


async function authuser(req,res,next){

    const token=req.cookies.token

    if(!token){
        return res.status(401).json({
            message:"Invalid token"
        })
    }
    
    const isTokenBlacklisted=await redis.get(token)
     
    if(isTokenBlacklisted){
        return res.status(401).json({
            message:"Invalid token"
        })
    }
    
  try {
         const decoded= jwt.verify(token,process.env.JWT_SECRET)
         req.user=decoded
  } catch (error) {
        return res.status(401).json({
            message:"Invalid token"
        })
  }

  next()

}

module.exports={authuser}