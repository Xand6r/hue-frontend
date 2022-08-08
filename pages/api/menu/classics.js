// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectToDB } from "../db";
import classicModel from "../models/classics";

export default async function handler(req, res) {
  await connectToDB();
  const allEvents = await classicModel.find({}).sort("-day");
  res.status(200).json(allEvents);
}
