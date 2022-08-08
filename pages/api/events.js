// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectToDB } from "./db";
import eventModel from "./models/events";

export default async function handler(req, res) {
  await connectToDB();
  const allEvents = await eventModel.find({}).sort("-day");
  res.status(200).json(allEvents);
}
