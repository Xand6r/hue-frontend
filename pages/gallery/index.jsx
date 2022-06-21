import React from "react";

import NavBar from "components/navbar";
import Images from "./components/images";
import Footer from "components/footer";

export default function Gallery() {
  return (
    <div>
      <NavBar theme="dark" />
      <Images />
      <Footer />
    </div>
  );
}
