import React from "react";
import NavBar from "components/navbar";
import Landing from "./components/landing";
import SubLanding from "./components/sublanding";
import Events from "./components/events";
import Private from "./components/private";
import Footer from "components/footer";
import Gallery from "./components/gallery";

function HomePage() {
  return (
    <div>
      <NavBar />
      <Landing />
      <SubLanding />
      <Events />
      <Private />
      <Gallery />
      <Footer />
    </div>
  );
}

export default HomePage;
