import React from "react";
import {Provider} from "react-redux";
import {Outlet} from "react-router-dom";
import Nagivationbar from "./Nagivationbar";
import store from "../Store/store";

const RootLayout = () => {
  return (
    < Provider store={store}>
     <Nagivationbar />
      <main>
        <Outlet />
      </main>
    </Provider>
  );
};

export default RootLayout;
