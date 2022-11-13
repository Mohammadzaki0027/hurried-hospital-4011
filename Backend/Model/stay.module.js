const mongoose = require("mongoose");

const StaySchema = mongoose.Schema({
  id: String,
  name: String,
  country: String,
  city: String,
  price: Number,
  images: [{ type: String }],
  date_start: String,
  date_end: String,
  stars: Number,
  rating: Number,
  description: String,
});
const StayModule = mongoose.model("stays", StaySchema);
module.exports = { StayModule };
