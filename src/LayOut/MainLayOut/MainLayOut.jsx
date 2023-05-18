import React from "react";

import { Outlet } from "react-router-dom";
import NavigationBar from "../../Shared-componets/Header/NavigationBar";
import Footer from "../../Shared-componets/Footer/Footer";

const MainLayOut = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="min-vh-100 mt-5">
        <Outlet></Outlet>{" "}
      </div>
      <Footer></Footer>
   
    </>
  );
};

export default MainLayOut;
