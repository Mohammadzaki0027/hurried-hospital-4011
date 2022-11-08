const express=require("express")
const { connection } = require("./Config/db")
const app=express()
require("dotenv").config()
const PORT=process.env.PORT||8000
app.use(express.json())

app.listen(PORT,async()=>{
    try {
        console.log(`connected ${PORT}`);
        await connection
      
    } catch (error) {
        console.log(error);
    }
})