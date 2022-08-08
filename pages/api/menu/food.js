// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectToDB } from "../db";
import foodModel from "../models/food";

export default async function handler(req, res) {
  await connectToDB();
  const allEvents = await foodModel.find({}).sort("-day");
  res.status(200).json(allEvents);
}
