const express=require("express")
const { connection, SERVER_ROOT_URL, GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET } = require("./Config/db")

const { FlightModule } = require("./Model/flight.module")

const { carRouter } = require("./Routes/Carfilter.route")
const {userController}=require("./Routes/user.routes")

const passport = require("./Config/GoogleAuth")

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
  
    if (req.query.sort=="asc"){
        const result= await FlightModule.find().sort({price:1})
        res.send(result)
    }
    else if(req.query.sort=="desc"){
        const result= await FlightModule.find().sort({price:-1})
        res.send(result)
    }
    else if(req.query.sort=="min"){
        const result= await FlightModule.find().sort({stoptime:1})
        res.send(result)
    }
    else if(req.query.sort=="max"){
        const result= await FlightModule.find().sort({stoptime:-1})
        res.send(result)
    }
    else{
        const result= await FlightModule.find()
        res.send(result)

    }
   
})



app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login',session:false }),
  function(req, res) {
    // Successful authentication, redirect home.
    console.log(req)
    res.redirect('http://localhost:3000');
  });







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




