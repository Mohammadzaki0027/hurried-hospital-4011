const { CarfilterModel } = require("../Model/Car.model");

const { Router } = require("express");
const carRouter = Router();
carRouter.get("/", async (req, res) => {
  const data = await CarfilterModel.find();
console.log(data);
  res.send("get req");
});

carRouter.post("/filterdata", async (req, res) => {
  const {seat,image,vehtype,price} = req.body;

  try {
    await CarfilterModel.insertMany([{ seat,image,vehtype,price }]);

  } catch (error) {
    console.log(error);
  }

  res.send("data aded");
});

module.exports = { carRouter };
