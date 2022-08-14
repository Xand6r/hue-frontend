// 62f0370a8148dc45f6ec6ac4

import { connectToDB } from "./db";
import galleryModel from "./models/gallery";
import eventModel from "./models/events";

export default async function handler(req, res) {
  await connectToDB();
  const { eventid } = req.query;
  if (!eventid) {
    return res.status(404).send("No event with the id exists");
  }
  // get the particular event with this id
  const thisEvent = await eventModel.findById(eventid);
  // get all gallery which belongs this query
  //   const images = await galleryModel.create({
  //     event: eventid,
  //     url: thisEvent.image,
  //   });
  const images = await galleryModel.find({
    event: eventid,
  });
  console.log({
    images, eventid
  })

  return res.send({ event: thisEvent, images: images });
}
