import React, { useEffect } from "react";

import { Outlet, useLocation } from "react-router-dom";
import NavigationBar from "../../Shared-componets/Header/NavigationBar";
import Footer from "../../Shared-componets/Footer/Footer";

const MainLayOut = () => {
  const location = useLocation();
  // path name change  by dynamic
  useEffect(() => {
    document.title = `Tech Toys ${location.pathname.replace('/', '- ' )}`
  }, [location.pathname]);
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
