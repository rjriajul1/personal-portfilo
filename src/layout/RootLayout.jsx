import React from "react";
import { Outlet } from "react-router";
import Navbar from "../pages/shared/navbar/Navbar";
import Footer from "../pages/home/footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <header className="sticky top-0 z-50">
        <Navbar></Navbar>
      </header>
      <div className="max-w[1600px] mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
