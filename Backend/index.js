const express = require("express");
const { connection } = require("./Config/db");

const { FlightModule } = require("./Model/flight.module");

const { carRouter } = require("./Routes/Carfilter.route");
const { userController } = require("./Routes/user.routes");
const app = express();

let cors = require("cors");
const { CarCartRoute } = require("./Routes/CarCart.route");
const { StayModule } = require("./Model/stay.module");
app.use(cors());

require("dotenv").config();
const PORT = process.env.PORT || 8000;
app.use(express.json());

app.use("/", CarCartRoute);

app.use("/user", userController);

app.get("/flight", async (req, res) => {
  if (req.query.sort == "asc") {
    const result = await FlightModule.find().sort({ price: 1 });
    res.send(result);
  } else if (req.query.sort == "desc") {
    const result = await FlightModule.find().sort({ price: -1 });
    res.send(result);
  } else if (req.query.sort == "min") {
    const result = await FlightModule.find().sort({ stoptime: 1 });
    res.send(result);
  } else if (req.query.sort == "max") {
    const result = await FlightModule.find().sort({ stoptime: -1 });
    res.send(result);
  } else {
    const result = await FlightModule.find();
    res.send(result);
  }
});
app.get("/stay", async (req, res) => {
  const result = await StayModule.find();
  res.send(result);
});
app.use("/", carRouter);

app.listen(PORT, async () => {
  try {
    console.log(`connected ${PORT}`);
    await connection;
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
});
