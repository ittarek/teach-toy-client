import React, { useContext, useState } from "react";
import "./Login.css";

import {
  FaCross,
  FaGithub,
  FaGithubAlt,
  FaGithubSquare,
  FaGoogle,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";


const Login = () => {
//   const { createLogin, githubLogin, googleLogin } = useContext(AuthContext);
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

    //      login with email/password
    // if ((!email, password)) {
    //   setError("email and password does not match");
    //   return;
    // }
    if ((email, password)) {
      createLogin(email, password)
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
          form.reset();
          navigate(from, { replace: true });
        })
        .catch((error) => {
          setError(error.message);
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

  // login with GitHub
  const handleGithubLogin = () => {
    githubLogin()
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
        <Form onSubmit={handleLogin} action="#">
          <div className="input-box">
            <span className="icon">
              {/* <ion-icon name="email"></ion-icon> */}
            </span>
            <input className="border-0 outline-0 w-100 h-100 text-white bg-dark border-bottom border-info" type="email" name="email" id="" required />
            <label for="Email" className="text-white">Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              {/* <ion-icon name="lock-closed"></ion-icon> */}
            </span>
            <input className="border-0 outline-0 w-100 h-100 text-white bg-dark border-bottom border-info" type="password" name="password" id="" required />
            <label for="password" className="text-white">Password</label>
          </div>
          
          <Button type="submit" className="log-btn text-white">
            LogIn
          </Button>

          <Button
            onClick={handleGoogleLogin}
            className="log-btn text-white mt-2 mb-2 btn-outline-info btn-info"
          >
            {" "}
            <span className="me-3">
              <FaGoogle></FaGoogle>{" "}
            </span>{" "}
            Login With Google
          </Button>
        
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
