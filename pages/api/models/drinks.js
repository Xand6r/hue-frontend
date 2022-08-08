const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    title: String,
    extraTitle: String,
    subtitle: String,
    price: { type: String, default: "175.99" },
    currency: { type: String, default: "$" },
  },
  { timestamps: true }
);


// define the model
let model;
try {
  model = mongoose.model("drink");
} catch (error) {
  model = mongoose.model("drink", dataSchema);
}

export default model;
