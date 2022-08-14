import React from "react";

import NavBar from "components/navbar";
import Images from "./components/images";
import Footer from "components/footer";
import { getRequest } from "api";

export default function Gallery({ events }) {
  return (
    <div>
      <NavBar theme="dark" />
      <Images events={events} overlay />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const { data: eventResponse } = await getRequest("/galleryevent?limit=15");
  return { props: { events: eventResponse } };
}
