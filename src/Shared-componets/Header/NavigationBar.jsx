import React from "react";
import "./NavigationBar.css";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  NavLink,
  Navbar,
} from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";

const NavigationBar = () => {
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
              <img
                className="img-fluid brand-image rounded-5 "
                src="https://i.ibb.co/9WHsz7N/ai-robot-2540154-2124943.png"
                alt=""
              />{" "}
             <span className="text-success fw-bolder fs-1 fst-italic">Tech Toys</span>{" "}
            </Navbar.Brand>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">All Toys</Nav.Link>
                  <Nav.Link href="#action3">My Toys</Nav.Link>
                  <Nav.Link href="#action4">ADD A Toys</Nav.Link>
                  <Nav.Link href="#action5">Blogs</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavigationBar;
