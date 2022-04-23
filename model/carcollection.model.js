const mongoose = require("mongoose")
const Sechma = mongoose.Schema

const carSechma = new Sechma({
    model: {
        type: String,
   
    },
    brand: {
        type: String,

    },
    img: {
        type: String,
      
    },
    amount: {
        type: Number,
     
    },
    postid : {
        type:String
    },
    rc : {
        type: String
    },
    adminid : {
        type : String
    },
    desc: {
        type : String
    },
    phone: {
        type : Number
    }

})

const carCollection = mongoose.model("carcollection", carSechma)
module.exports = carCollection

