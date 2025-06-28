import React from "react";
import { Outlet } from "react-router";
import Navbar from "../pages/shared/navbar/Navbar";

const RootLayout = () => {
  return (
    <div>
      <header className="sticky top-0 z-50">
        <Navbar></Navbar>
      </header>
      <div className="">
        <Outlet></Outlet>
      </div>
      <h1>Footer</h1>
    </div>
  );
};

export default RootLayout;
