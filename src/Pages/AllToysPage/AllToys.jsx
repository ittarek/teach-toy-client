import React from "react";
import "./AllToys.css";
import { Table } from "react-bootstrap";

const AllToys = () => {
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
            <tr>
              {/* <td>{index + 1}</td> */}
                  <td>tarek</td>
                  <td>robotic</td>
                  <td>electronics</td>
                  <td>1000</td>
                  <td>10</td>
                  <td className="btn btn-primary">view details</td>
           
             
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AllToys;
