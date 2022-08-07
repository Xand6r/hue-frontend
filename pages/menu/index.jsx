import React from 'react';
import NavBar from "components/navbar";
import Landing from "./components/landing";
import Menu from "./components/menu";
import Footer from "components/footer";


export default function index() {
  return (
    <div>
        <NavBar />
        <Landing />
        <Menu />
        <Footer />
    </div>
  )
}
