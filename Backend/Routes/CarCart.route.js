const { Router } = require("express");
const { CarCartModel } = require("../Model/Carcart.model");
const CarCartRoute = Router();

CarCartRoute.get("/getcar", async (req, res) => {
  const data = await CarCartModel.find();
  res.send({ msg: "data", data });
});
// id  
CarCartRoute.get("/filterdata/:param", async (req, res) => {
  const { param } = req.params;
  if (param === "price") {
    let data = await CarCartModel.find().sort({ price: 1 });
    res.send({ msg: "data is sorted formed", data });
    console.log(data);
  } else if (param === "rating") {
    let data = await CarCartModel.find().sort({ rating: -1 });
    res.send({ msg: "data is sorted formed", data });
  } else {
    let data = await CarCartModel.find({ vehtype: param });
    res.send({ msg: "data is sorted formed", data });
  }
});
CarCartRoute.post("/postcar", async (req, res) => {
  const { seat, image, vehtype, price } = req.body;
  console.log(req.body, "data");
  try {
    await CarCartModel.insertMany([{ seat, image, vehtype, price }]);

    res.send("data aded");
  } catch (error) {
    console.log(error);
    res.status(401).send("eror");
  }
});

module.exports = { CarCartRoute };
