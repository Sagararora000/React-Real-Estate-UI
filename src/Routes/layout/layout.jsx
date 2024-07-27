import React from "react";
import NavBar from "../../components/navbar/NavBar";
import HomePage from "../homepage/HomePage";
import { Outlet } from "react-router-dom";
import "./layout.scss";
const Layout = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="content">
        {/* <HomePage /> */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
