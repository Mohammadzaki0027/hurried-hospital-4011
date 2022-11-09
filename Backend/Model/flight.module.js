const mongoose=require("mongoose")

const FlightSchema=mongoose.Schema({

    "time":{type:String,require:true},
    "location": {type:String,require:true},
    "stoptime":{type:String,require:true},
    "flight_logo":{type:String,require:true},
    "flight_company": {type:String,require:true},
    "price":{type:String,require:true},
    "return": {type:String,require:true},    
})
const FlightModule=mongoose.model("flight",FlightSchema)
module.exports={FlightModule}