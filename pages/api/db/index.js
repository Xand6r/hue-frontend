const mongoose = require("mongoose");
const mongoDBconnectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.oocwe.mongodb.net/${process.env.MONGODB_DATABASE}`;
export const connectToDB = () =>
  mongoose.connect(mongoDBconnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

