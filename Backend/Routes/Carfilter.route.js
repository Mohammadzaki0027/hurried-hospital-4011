const { CarfilterModel } = require("../Model/Car.model");

const { Router } = require("express");
const { getfilter, filterdatapost } = require("../Connection/car.connection");
const carRouter = Router();
carRouter.get("/getfilter", getfilter)

carRouter.post("/filterdata", filterdatapost);

module.exports = { carRouter };
