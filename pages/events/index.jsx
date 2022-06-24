import React from "react";

import NavBar from "components/navbar";
import Landing from "./components/landing";
import UpcomingEvents from "./components/upcoming";

export default function Events(){
    return (
        <div>
            <NavBar />
            <Landing />
            <UpcomingEvents />
        </div>
    )
}