import Header from "../Header/Header";
import React from "react";
import { Outlet } from "react-router-dom";

let Dashboard = () => {
    return (
        <React.Fragment>
            <Header />

            <Outlet />
            {/* <Statistique /> */}
        </React.Fragment>
    )
}

export default Dashboard;