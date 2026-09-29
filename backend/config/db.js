const mongoose=require("mongoose")
const connectdb=async()=>{
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("mongo connected")

    } catch (error) {
        console.log("error")
    }
}
module.exports=connectdb