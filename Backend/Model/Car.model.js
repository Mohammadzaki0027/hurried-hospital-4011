const mongoose=require("mongoose")
const CarfilterSchema=mongoose.Schema({

seat:{type:Number,required:true},
image:{type:String,required:true},
vehtype:{type:String,required:true},
price:{type:Number,required:true}

})
const CarfilterModel=mongoose.model("carsfilterdatas",CarfilterSchema)

module.exports={CarfilterModel}