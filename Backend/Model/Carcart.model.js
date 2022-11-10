const mongoose=require("mongoose")
const CarSchema=mongoose.Schema({

seat:{type:Number,required:true},
image:{type:String,required:true},
vehtype:{type:String,required:true},
price:{type:Number,required:true},
fuel:{type:String}

})
const CarCartModel=mongoose.model("carscartdata",CarSchema)

module.exports={CarCartModel}