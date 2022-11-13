const {Router}= require("express")
const {UserModel}=require("../Model/user.model")

const bcrypt=require("bcrypt")

const jwt= require("jsonwebtoken")

require("dotenv").config();

const userController=Router();

userController.post("/signup",(req,res)=>{
    const {email,password,name}=req.body;
    if(email!==""&&password!==""&&name!=="")
    {
      bcrypt.hash(password,6,async(err,hash)=>{
        if(err)
        {
            res.status(400).send("Something went wrong")
        }
        const newUser=new UserModel({email,password:hash,name})
        await newUser.save();
        res.status(200).json({msg:"Signup Successfull"})
    });
    }else{
      res.send({msg:"something went wrong"})
    }
   
});


userController.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    const hash = user.password;
    bcrypt.compare(password, hash, (err, result) => {
      if (err) {
        res.status(400).send("Something Went Wrong");
      }
      if (result) {
        const token = jwt.sign({ userId: user._id }, process.env.SECRET);
        res.status(200).json({ message: "Login Success", token });
      } else {
        res.status(400).send("Invalid credentials");
      }
    });
  });

module.exports={
    userController
}