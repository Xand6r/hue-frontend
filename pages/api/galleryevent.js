// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectToDB } from "./db";
import eventModel from "./models/events";
const ARB_HIGH_NUMBER = 10000000000000000000;
export default async function handler(req, res) {
  await connectToDB();
  const {
    query: { limit = ARB_HIGH_NUMBER },
  } = req;
  const allEvents = await eventModel.find({}).limit(limit).sort("-day");
  res.status(200).json(allEvents);
}
