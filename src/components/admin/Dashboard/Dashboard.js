import IptvContext from "../../context/Iptv";
import EditAbonnement from "../EditAbonnement/EditAbonnement";
import Header from "../Header/Header";
import SideBar from "../Header/Header";
import React, { useContext, useEffect } from "react";
import Statistique from "../Statistique/Statistique";
import { Routes, Route, Outlet } from "react-router-dom";

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