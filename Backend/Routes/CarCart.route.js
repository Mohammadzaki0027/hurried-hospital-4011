const { Router } = require("express");
const { CarCartModel } = require("../Model/Carcart.model");
const CarCartRoute = Router();

CarCartRoute.get("/getcart", async (req, res) => {
  const data = await CarCartModel.find();

  res.send({ msg: "data", data });
});

CarCartRoute.post("/postcar", async (req, res) => {
  const { seat, image, vehtype, price } = req.body;

  try {
    await CarfilterModel.insertMany([{ seat, image, vehtype, price }]);
    
  res.send("data aded");
  } catch (error) {
    console.log(error);
    res.status(401).send("eror")
  }

});
