const mongoose=require("mongoose")
const CarSchema=mongoose.Schema({

seat:{type:Number,required:true},
image:{type:String,required:true},
vehtype:{type:String,required:true},
price:{type:Number,required:true}

})
const CarCartModel=mongoose.model("carscartdata",CarfilterSchema)

module.exports={CarCartModel}