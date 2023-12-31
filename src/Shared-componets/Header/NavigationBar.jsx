import React, { useContext } from "react";
import "./NavigationBar.css";

import { Container, Form, Nav, Navbar } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

const NavigationBar = () => {
  const { user, loggedOut } = useContext(AuthContext);

  // LogOut function
  const handleLogOut = () => {
    loggedOut()
      .then()
      .catch((error) => {
        console.log(error.message);
      });
  };

  // user photo hover
  const handleToltip = () => {
    tippy("#MyTool", {
      content: user?.displayName || "NoName",
    });
  };
  return (
    <div className="navbar-margin">
      {["lg"].map((expand) => (
        <Navbar key={expand} bg="dark" expand={expand}>
          <Container>
            <Navbar.Brand href="/">
              <img
                className="img-fluid brand-image rounded-5 "
                src="https://i.ibb.co/9WHsz7N/ai-robot-2540154-2124943.png"
                alt=""
              />{" "}
              <span className="text-success fw-bolder fs-1 fst-italic">
                Tech Toys
              </span>{" "}
            </Navbar.Brand>

            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="   btn  btn-outline-info"
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="w-50 bg-transparent h-75"
            >
              <Offcanvas.Body>
                <Nav className="d-flex justify-content-end align-items-center flex-grow-1 pe-3 text-white">
                  <NavLink
                    to="/"
                    className=" text-white my-auto text-decoration-none mx-3"
                  >
                    {" "}
                    Home
                  </NavLink>

                  <NavLink
                    to="/allToys"
                    className="text-white mx-3 my-auto text-decoration-none"
                  >
                    All Toys
                  </NavLink>

                  {user?.email ? (
                    <>
                      {" "}
                      <NavLink
                        to="/myToys"
                        className="text-white mx-3 my-auto text-decoration-none"
                      >
                        My Toys
                      </NavLink>
                      <NavLink
                        to="/addToy"
                        className="text-white mx-3 my-auto text-decoration-none"
                      >
                        ADD A Toys
                      </NavLink>
                    </>
                  ) : (
                    ""
                  )}

                  <NavLink
                    to="/blog"
                    className="text-white mx-3 my-auto text-decoration-none"
                  >
                    {" "}
                    Blogs
                  </NavLink>

                  {user?.email ? (
                    <NavLink onClick={handleLogOut}>
                      <button className=" mx-3 btn my-auto  text-white btn-outline-info text-decoration-none">
                        {" "}
                        LogOut
                      </button>
                    </NavLink>
                  ) : (
                    <NavLink
                      to="/login"
        
                    >
                      {" "}
                      <button className=" mx-3 btn my-auto  text-white btn-outline-info text-decoration-none"> Login</button>
                    </NavLink>
                  )}

                  {user?.email && (
                    <li
                      id="MyTool"
                      onMouseOver={handleToltip}
                      className=" ms-3  "
                    >
                      {" "}
                      {
                        <img className="photourl ms-1 my-auto" src={user.photoURL} alt="" />
                      }{" "}
                    </li>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default NavigationBar;
