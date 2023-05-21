import React, { useEffect, useState } from "react";
import { Button, Card, Col, ListGroup, Modal } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";
// import Details from "../Details";

const ToyDetails = () => {
  const data = useLoaderData();
  const {
    _id,
    photo,
    ToyName,
    SellerName,
    sellerMail,
    description,
    rating,
    quantity,category,
    price,
  } = data || {};

  console.log(data);

  return (
    <div className="d-flex justify-content-center">
      <Card className="shadow-lg w-75 "  style={{ width: "rem" }}>
        <Card.Img variant="top" className="img-fluid h-50 w-50 mx-auto" src={photo} />
        <Card.Body>
          <Card.Title className="">
            {" "}
            <span className="text-info fw-bold">Toy Name </span>: {ToyName}
          </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            {" "}
            <span className="text-info fw-bold">Seller Name</span> {SellerName}
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <span className="text-info fw-bold">Mail</span> {sellerMail}
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <span className="text-info fw-bold">Ratings</span> : {rating}
          </ListGroup.Item>{" "}
          <ListGroup.Item>
            {" "}
            <span className="text-info fw-bold">Price</span> : {price}
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <span className="text-info fw-bold">Available Quantity</span> :{" "}
            {quantity}
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          {" "}
          <Card.Text className="">
            {" "}
            <span className="text-info fw-bold">Description</span> :{" "}
            {description}
          </Card.Text>
          {/* <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ToyDetails;
