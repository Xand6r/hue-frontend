import React, { useRef } from "react";
import { gsap } from "gsap";

import NavBar from "components/navbar";
import Landing from "./components/landing";
import SubLanding from "./components/sublanding";
import Events from "./components/events";
import Private from "./components/private";
import Footer from "components/footer";
import Gallery from "./components/gallery";

function HomePage({ events }) {
  // define the selectors
  const homeComponentRef = useRef();
  let q = gsap.utils.selector(homeComponentRef);
  return (
    <div ref={homeComponentRef}>
      <NavBar selector={q} useFadeDownAnimation />
      <Landing selector={q} />
      <SubLanding />
      <Events events={events} />
      <Private />
      <Gallery />
      <Footer />
    </div>
  );
}

export default HomePage;
