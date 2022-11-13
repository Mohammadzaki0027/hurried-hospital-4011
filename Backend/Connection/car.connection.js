const { CarfilterModel } = require("../Model/Car.model");
const { CarCartModel } = require("../Model/Carcart.model");

const getcar = async (req, res) => {
  const data = await CarCartModel.find();
  res.send({ msg: "data", data });
};
const filterdata = async (req, res) => {
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
};

const postfiltercar = async (req, res) => {
  const { seat, image, vehtype, price } = req.body;
  console.log(req.body, "data");
  try {
    await CarCartModel.insertMany([{ seat, image, vehtype, price }]);
    res.send("data aded");
  } catch (error) {
    console.log(error);
    res.status(401).send("eror");
  }
};
const getfilter = async (req, res) => {
  const data = await CarfilterModel.find();
  res.send({ msg: "data", data });
};
const filterdatapost = async (req, res) => {
  const { seat, image, vehtype, price } = req.body;
  try {
    await CarfilterModel.insertMany([{ seat, image, vehtype, price }]);
  } catch (error) {
    console.log(error);
  }
  res.send("data aded");
};

const paymentcar = async (req, res) => {
  const { name, cvv, cardno } = req.body;
 console.log(name, cvv, cardno, "payment");
};
module.exports = {
  getcar,
  filterdata,
  postfiltercar,
  getfilter,
  filterdatapost,
  paymentcar,
};
