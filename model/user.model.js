const mongoose = require("mongoose")
const Sechma = mongoose.Schema

const userSechma = new Sechma({
    name: {
        type: String,
   
    },
    email: {
        type: String,

    },
    country: {
        type: String,
      
    },
    phone: {
        type: Number,
     
    },
    license : {
        type:String
    }

})

const user = mongoose.model("user", userSechma)
module.exports = user

