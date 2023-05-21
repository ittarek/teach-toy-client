import React, { useContext, useState } from "react";
import "./Login.css";

import { FaGoogle } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const {user, userLogin, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");

  //   redirect to Chef details page
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  //   login function
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();

    if ((email, password)) {
      userLogin(email, password)
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
          form.reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.displayName} your Login Successful`,
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(from, { replace: true });
         
        })
        .catch((error) => {
          setError(error.message);
          Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Something wrong",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    }
  };
  //     login with Google
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        navigate(from, { replace: true });
      
      })
      .catch((error) => {
        setError(error.message);
        
      });
  };

  return (
    <div className="login-page mx-auto my-5 bg-dark">
      <div className="form-box login">
        <h2 className="text-white text-center">Login</h2>
        <Form onSubmit={handleLogin}>
          <div className="input-box">
            <input
              className="border-0 outline-0 w-100 h-100 text-white bg-dark border-bottom border-info"
              type="email"
              name="email"
              required
            />
            <label htmlFor="Email" className="input-label text-white">
              Email
            </label>
          </div>
          <div className="input-box">
            <span className="icon"></span>
            <input
              className="border-0 outline-0 w-100 h-100 text-white bg-dark border-bottom border-info"
              type="password"
              name="password"
              required
            />
            <label htmlFor="password" className=" input-label text-white">
              Password
            </label>
          </div>

          <button
            type="submit"
            className="email-login-btn btn btn-outline-success text- w-100 fw-bold fs-4 info"
          >
            Login
          </button>

          <button
            onClick={handleGoogleLogin}
            className="btn w-100 fs-4  mt-2 mb-2 btn-outline-info "
          >
            {" "}
            <span className="me-3">
              <FaGoogle></FaGoogle>{" "}
            </span>{" "}
            Login With Google
          </button>

          <div className="login-register text-white">
            <p className="text-white">
              Don't have an account?
              <Link to="/register">Register</Link>
            </p>
          </div>
        </Form>
        <span className="text-danger fs-6 fw-bolder ">{error}</span>
      </div>{" "}
    </div>
  );
};

export default Login;
