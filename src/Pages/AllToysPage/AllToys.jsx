import React, { useEffect, useState } from "react";
import "./AllToys.css";
import { Button, Table } from "react-bootstrap";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  console.log("all toy", allToys);
  useEffect(() => {
    fetch("http://localhost:5000/allToy")
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  }, []);

  return (
    <div>
      <div className="">
        <h1 className="text-center p-4 ">ALL Toys</h1>
        <div className=" p-2 text-center">
          <input type="text" className="p-1" /> <button>Search</button>
        </div>
        <Table striped bordered hover className="container">
          <thead>
            <tr>
              <th>Seller</th>
              <th>Toy-Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
           
              {/* <td>{index + 1}</td> */}

              {allToys.map((toy) => (
            <tr>
                  <td>{toy.SellerName}</td>
                  <td>{toy.ToyName}</td>
                  <td>{toy.toy?.value}</td>
                  <td>{toy.price}</td>
                  <td>{toy.quantity}</td>
                  <td><Button>view details</Button></td>
                  </tr>
              ))}
        
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AllToys;
