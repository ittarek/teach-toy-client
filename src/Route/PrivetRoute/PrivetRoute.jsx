import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const PrivetRoute = ({ children }) => {
  const { user,spinner } = useContext(AuthContext);

  const location = useLocation();

  if(spinner){
          return <Spinner animation="grow" variant="primary" className="w-25 m-auto  d-flex justify-content-center align-items-center "></Spinner>
    }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} replace to="/login"></Navigate>;
};

export default PrivetRoute;
