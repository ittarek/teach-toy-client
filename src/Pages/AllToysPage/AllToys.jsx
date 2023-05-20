import React, { useEffect, useState } from "react";
import "./AllToys.css";
import { Button, Form, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ToyDetails from "./ToyDetailsPage/ToyDetails";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [change, setChange] = useState("");
  const [modalShow, setModalShow] = React.useState(false);
  // console.log("all toy", allToys);
  useEffect(() => {
    fetch("http://localhost:5000/allToy")
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  }, []);

  // search function
  const handleSearchByPrice = () => {
    fetch(`http://localhost:5000/searchToy/${change}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  };

  return (
    <div>
      <div className="">
        <h1 className="text-center p-4 ">ALL Toys</h1>
        <div className=" p-2 text-center">
          <Form className="d-flex w-25 mx-auto">
            <Form.Control
              type="search"
              placeholder="Search Toy By Name"
              className="me-2"
              aria-label="Search"
              onChange={(event) => setChange(event.target.value)}
            />
            <Button onClick={handleSearchByPrice} variant="outline-success">
              Search
            </Button>
          </Form>
        </div>
        <Table striped bordered hover className="container">
          <thead>
            <tr>
              <th>No</th>
              <th>Seller</th>
              <th>Toy-Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((toy, index) => (
              <tr key={toy._id}>
                {" "}
                <td>{index + 1}</td>
                <td>{toy.SellerName}</td>
                <td>{toy.ToyName}</td>
                <td>{toy.toy?.value}</td>
                <td>{toy.price}</td>
                <td>{toy.quantity}</td>
                <td>
               
                    {" "}
                    <Link to={`/toyDetails/${toy._id}`}><Button
                      variant="primary"
               
                    >
                      details</Button>
                   </Link>
              
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AllToys;
