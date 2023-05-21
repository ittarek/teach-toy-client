import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Register.css";


import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const { registration, userUpdating } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  // console.log("register page",photo);

  //   register function
  const handleRegister = (event) => {
    event.preventDefault();
    setSuccess("");
    setError("");
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    form.reset();

    registration(email, password)
      .then((result) => {
        const registerUser = result.user;
        console.log(registerUser);
        userUpdating(result.user, name, photoURL);
      })
      .catch((error) => {
        console.log(error.message);
      });
    if (password.length < 6) {
      setError("Password Al least 6 Character");
      return;
    } else if (!(email, password)) {
      setError("please give email and password");
      return;
    } else {
      return Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Registration has been successFul',
        showConfirmButton: false,
        timer: 1500
      })
      // return setSuccess("Registration has been successFul");
    }
  };
  return (
    <div className="register mx-auto my-5">
      <div className="reg-box login">
        <h2 className="text-success text-center">Register</h2>
        <form onSubmit={handleRegister} >
          <div className="input-box">
            <span className="icon">
     
            
      
            </span>
            <input
              className="border-0 outline-0 w-100 h-100  border-bottom border-info"
              type="name"
              name="name"
            
              required
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-box">
      
      
            <input
              className="border-0 outline-0 w-100 h-100  border-bottom border-info"
              type="url"
              name="photoURL"
          
         
              required
            />
            <label htmlFor="photoUrl">Photo URL</label>
          </div>
          <div className="input-box">
            <span className="icon">
            <i className="fa-solid fa-envelope"></i>
            </span>
            <input
              className="border-0 outline-0 w-100 h-100  border-bottom border-info"
              type="email"
              name="email"
          
              required
            />
            <label htmlFor="Email">Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
   <i className="fa-solid fa-lock"></i>
            </span>
            <input
              className="border-0 outline-0 w-100 h-100  border-bottom border-info"
              type="password"
              name="password"
        
              required
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="remember-forgat">
            <label htmlFor="">
              <input type="checkbox" name="remember"/>
              remember me
            </label>
            <Link to='#'>Forgat Password</Link>
          </div>
          <Button
            variant="btn-success"
            type="submit"
            className="reg-btn text-white"
          >
            Register
          </Button>
          <div className="login-register ">
            <p>
              {" "}
              Don't have an account?
              <Link to="/login">Login</Link>{" "}
            </p>
          </div>
          <span className="text-danger fw-bold fst-italic rounded p-1 mb-2">
            {error}
          </span>
          <span className="text-success fw-bold fst-italic rounded p-1 mb-2">
            {success}
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;
