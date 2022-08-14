import mongoose from "mongoose";

const dataSchema = new mongoose.Schema(
  {
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "event",
    },
    url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

let model;
try {
  model = mongoose.model("gallery");
} catch (error) {
  model = mongoose.model("gallery", dataSchema);
}

export default model;
