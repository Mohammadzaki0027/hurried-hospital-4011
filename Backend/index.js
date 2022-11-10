const express=require("express")
const { connection } = require("./Config/db")
const { carRouter } = require("./Routes/Carfilter.route")
const app=express()
let cors = require('cors')
app.use(cors())
require("dotenv").config()
const PORT=process.env.PORT||8000
app.use(express.json())
app.use("/",carRouter)
app.listen(PORT,async()=>{
    try {
        console.log(`connected ${PORT}`);
        await connection
      
    } catch (error) {
        console.log(error);
    }
})