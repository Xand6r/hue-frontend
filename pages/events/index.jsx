import React from "react";
import { getRequest } from "api";

import NavBar from "components/navbar";
import Landing from "./components/landing";
import UpcomingEvents, { itemsPerPage } from "./components/upcoming";
import Footer from "components/footer";

export default function Events(props) {
  return (
    <div>
      <NavBar />
      <Landing />
      <UpcomingEvents {...props} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const { data: response } = await getRequest("/events");
  const allEvents = response;
  const totalPages = Math.ceil(response.length / itemsPerPage);
  return { props: { totalPages, allEvents }, revalidate: 3600 };
}
