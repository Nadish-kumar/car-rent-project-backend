const mongoose = require("mongoose")
const Sechma = mongoose.Schema

const adminSechma = new Sechma({
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
     
    }
   

})

const admin = mongoose.model("admin", adminSechma)
module.exports = admin

