const { Router } = require("express");
const {
  getcar,
  filterdata,
  postfiltercar,
  paymentcar,
} = require("../Connection/car.connection");
const { CarCartModel } = require("../Model/Carcart.model");
const CarCartRoute = Router();

CarCartRoute.get("/getcar", getcar);

CarCartRoute.get("/filterdata/:param", filterdata);
CarCartRoute.post("/postcar", postfiltercar);

CarCartRoute.post("/carpayment", paymentcar);
module.exports = { CarCartRoute };
