const { Router } = require("express");
const { CarCartModel } = require("../Model/Carcart.model");
const CarCartRoute = Router();

CarCartRoute.get("/getcar", async (req, res) => {
   const data = await CarCartModel.find();
  res.send({ msg: "data" ,data});
});

CarCartRoute.post("/postcar", async (req, res) => {
  const { seat, image, vehtype, price } = req.body;
console.log(req.body,"data");
  try {
    await CarCartModel.insertMany([{ seat, image, vehtype, price }]);
    
  res.send("data aded");
  } catch (error) {
    console.log(error);
    res.status(401).send("eror")
  }

});

module.exports={CarCartRoute}
