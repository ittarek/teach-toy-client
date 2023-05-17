import React from "react";

import { Outlet } from "react-router-dom";

const MainLayOut = () => {
  return (
    <>
      
      <div className="min-vh-100 mt-5">
        <Outlet></Outlet>{" "}
      </div>
   
    </>
  );
};

export default MainLayOut;
