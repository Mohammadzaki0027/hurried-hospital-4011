const mongoose=require("mongoose")
require("dotenv").config()
const url=process.env.URL
const connection=mongoose.connect(url)



SERVER_ROOT_URL="http://localhost:8080"
GOOGLE_CLIENT_ID=process.env.GOOGLE_CLIENT_ID 
GOOGLE_CLIENT_SECRET=process.env.GOOGLE_CLIENT_SECRET 

module.exports={
    connection,
    SERVER_ROOT_URL,
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET
}













