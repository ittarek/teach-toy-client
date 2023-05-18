import React, { useContext } from "react";
import "./NavigationBar.css";

import { Button, Container, Form, Nav, NavLink, Navbar } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
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
  const handleToltip = () => {
    tippy("#MyTool", {
      content: user?.displayName || "hello",
    });
  };
  return (
    <div className="navbar-margin">
      {["lg"].map((expand) => (
        <Navbar key={expand} bg="dark" expand={expand} className="mb-3">
          <Container>
            <Navbar.Brand href="#">
              <img
                className="img-fluid brand-image rounded-5 "
                src="https://i.ibb.co/9WHsz7N/ai-robot-2540154-2124943.png"
                alt=""
              />{" "}
              <span className="text-success fw-bolder fs-1 fst-italic">
                Tech Toys
              </span>{" "}
            </Navbar.Brand>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="w-50 bg-transparent h-75"
            >
              <Offcanvas.Body>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
                <Nav className="justify-content-end flex-grow-1 pe-3 text-white">
                  <Nav.Link className="text-white">
                    <Link to="/"> Home</Link>
                  </Nav.Link>
                  <Nav.Link className="text-white">
                    <Link to="toy"> All Toys</Link>
                  </Nav.Link>
                  {user?.email ? (
                    <>
                      {" "}
                      <Nav.Link className="text-white">
                        <Link to="/myToys">My Toys</Link>
                      </Nav.Link>
                      <Nav.Link className="text-white">
                        <Link to="/addToy">ADD A Toys</Link>
                      </Nav.Link>
                    </>
                  ) : (
                    ""
                  )}
                  <Nav.Link className="text-white">
                    <Link to="/blog"> Blogs</Link>
                  </Nav.Link>
                  <Nav.Link className="text-white">
                    {user?.email ? (
                      <NavLink
                        onClick={handleLogOut}
                        className="btn btn-outline-info  btn-success  nav-link"
                      >
                        LogOut
                      </NavLink>
                    ) : (
                      <Link
                        to="/login"
                        className="btn btn-outline-info btn-success nav-link "
                      >
                        {" "}
                        Login
                      </Link>
                    )}
                  </Nav.Link>
                  <Nav.Link className="text-white">
                    {/* {user?.email && (
                      <span className="text-secondary ms-3 border-danger border-4 rounded-2">
                        {user.displayName}{" "}
                      </span>
                    )} */}

                    {user?.email && (
                      <li
                        id="MyTool"
                        onMouseOver={handleToltip}
                        className=" ms-3  "
                      >
                        {" "}
                        {
                          <img
                            className="photourl"
                            src={user.photoURL}
                            alt=""
                          />
                        }{" "}
                      </li>
                    )}
                  </Nav.Link>
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
