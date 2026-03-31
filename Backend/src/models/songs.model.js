const mongoose=require('mongoose');

const songSchema=new mongoose.Schema({
    url:{
        type:String,
        required:true
    },
    posterUrl:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    mood:{
        type:String,
        enum:{
            values:['happy','sad','neutral','surprised'],
            message:'mood must be happy,sad,neutral or surprised'
        },
        required:true
    }
},{
    timestamps:true
})

const songModel=mongoose.model('song',songSchema);

module.exports=songModel;