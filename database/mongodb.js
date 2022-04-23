const mongoose=require("mongoose")
const DBURL= "mongodb+srv://yatvik:yatvik007@cluster0.nhp0o.mongodb.net/carrent?retryWrites=true&w=majority"

mongoose.connect(DBURL).then(() => console.log("db connected successfully"))

module.exports=mongoose
