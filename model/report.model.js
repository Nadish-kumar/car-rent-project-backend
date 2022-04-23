const mongoose = require("mongoose")
const Sechma = mongoose.Schema

const reportSechma = new Sechma({
    liscence: {
        type: String,
   
    },
    aadhar: {
        type: String,

    },
    pic: {
        type: String,
      
    },
    userid: {
        type: Number,
     
    }

})

const report = mongoose.model("report", reportSechma)
module.exports = report

