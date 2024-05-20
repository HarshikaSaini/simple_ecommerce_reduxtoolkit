import React from "react";
import Navigationbar from "./Navigationbar.jsx";
import {Outlet} from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Navigationbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
