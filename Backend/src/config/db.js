const mongoose=require('mongoose')


async function connectToDb() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected To DB")
    } catch (error) {
        console.log("eroor while connecting to DB:",error)
    }
}

module.exports=connectToDb