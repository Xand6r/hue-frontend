import mongoose from 'mongoose';
// define the mongoose schema for menu items
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
  model = mongoose.model("food");
} catch (error) {
  model = mongoose.model("food", dataSchema);
}

export default model;
