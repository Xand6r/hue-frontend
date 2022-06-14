import React from "react";
import NavBar from "components/navbar";
import Landing from "./components/landing";
import SubLanding from "./components/sublanding";
import Events from "./components/events";

function HomePage() {
  return (
    <div>
      <NavBar />
      <Landing />
      <SubLanding />
      <Events />
    </div>
  );
}

export default HomePage;
