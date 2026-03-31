const Redis=require('ioredis').default


const redis=new Redis({
    port:process.env.REDIS_PORT,
    host:process.env.REDIS_HOST,
    password:process.env.REDIS_PASS
})

redis.on('connect',()=>{
    console.log("REdis Connected")
})
redis.on('error',(err)=>{
    console.log("error in Redis:",err)
})

module.exports=redis

