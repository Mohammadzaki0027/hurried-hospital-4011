const express=require("express")
const { connection } = require("./Config/db")

const { FlightModule } = require("./Model/flight.module")

const { carRouter } = require("./Routes/Carfilter.route")
const {userController}=require("./Routes/user.routes")
const app=express()

let cors = require('cors')
const { CarCartRoute } = require("./Routes/CarCart.route")
app.use(cors())



require("dotenv").config()
const PORT=process.env.PORT||8000
app.use(express.json())


app.use("/",CarCartRoute)


app.use("/user",userController)

app.get("/flight",async (req,res)=>{
    const result= await FlightModule.find()
    res.send(result)
})

app.use("/",carRouter)

app.listen(PORT,async()=>{
    try {
        console.log(`connected ${PORT}`);
        await connection
        console.log("connected")
      
    } catch (error) {
        console.log(error);
    }
})