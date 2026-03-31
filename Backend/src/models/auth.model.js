const mongoose=require('mongoose')


const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username is Required"],
        unique:[true,"Username must be Unique"]
    },
    email:{
        type:String,
        required:[true,"Email is Required"],
        unique:[true,"Email Must Be Unique"]
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        select:false
    }
})

const userModel=mongoose.model("user",userSchema)

module.exports=userModel








