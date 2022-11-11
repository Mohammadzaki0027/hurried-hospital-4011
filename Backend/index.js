const express=require("express")
const { connection } = require("./Config/db")

const { FlightModule } = require("./Model/flight.module")

const { carRouter } = require("./Routes/Carfilter.route")

const app=express()

require("dotenv").config()
const PORT=process.env.PORT||8000
app.use(express.json())

const cors=require("cors")
app.use(cors())


app.get("/flight",async (req,res)=>{
    const result= await FlightModule.find()
    res.send(result)
})

app.use("/",carRouter)

app.listen(PORT,async()=>{
    try {
        console.log(`connected ${PORT}`);
        await connection
      
    } catch (error) {
        console.log(error);
    }
})