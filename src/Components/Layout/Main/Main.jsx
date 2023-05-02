import React from "react";
import Navbar from "../../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../Footer/Footer";

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <Navbar></Navbar>
        <Outlet></Outlet>{" "}
      </div>
      <div className="mt-auto">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
