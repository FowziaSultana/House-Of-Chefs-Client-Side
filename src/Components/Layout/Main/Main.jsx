import React, { useContext } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import { AuthContext } from "../../../Providers/AuthProvider";

const Main = () => {
  const { loading } = useContext(AuthContext);

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
