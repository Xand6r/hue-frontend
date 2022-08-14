import React from "react";
import NavBar from "components/navbar";
import Landing from "./components/landing";
import Menu from "./components/menu";
import Footer from "components/footer";
import {
  fetchClassics,
  fetchDrinks,
  fetchFood,
} from "./components/menu/functions";

export default function index({ menuState }) {
  return (
    <div>
      <NavBar />
      <Landing />
      <Menu state={menuState} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const [drinks, classics, food] = await Promise.all([
    fetchDrinks(),
    fetchClassics(),
    fetchFood(),
  ]);
  const state = {
    drinks,
    classics,
    food,
  };
  // Pass data to the page via props
  return { props: { menuState: state } };
}
