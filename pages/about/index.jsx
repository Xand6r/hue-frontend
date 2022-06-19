import React, { useRef } from "react";
import NavBar from "components/navbar";
import Landing from "./components/landing";
import About from "./components/about";
import Mission from "./components/mission";
import Footer from "components/footer";

function AboutPage() {
  return (
    <div>
      <NavBar />
      <Landing />
      <About />
      <Mission />
      <Footer />
    </div>
  );
}

export default AboutPage;
