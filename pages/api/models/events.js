import mongoose from "mongoose";

// define the mongoose schema for menu items
const dataSchema = new mongoose.Schema(
  {
    day: { type: Date, default: Date.now },
    name: String,
    description: String,
    details: String,
    image: String,
  },
  { timestamps: true }
);

// define the model
let model;
try {
  model = mongoose.model("event");
} catch (error) {
  model = mongoose.model("event", dataSchema);
}

export default model;
