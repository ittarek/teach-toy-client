import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./FeatureToy.css";
const FeatureToy = () => {
  const [future, setFuture] = useState([]);
  // console.log(future);
  const [show, setShow] = useState(false);
  useEffect(() => {
    fetch("https://b7-a11-toy-marketplace-server-side.vercel.app/futureToys")
      .then((res) => res.json())
      .then((data) => {
        setFuture(data);
      });
  }, []);
  return (
    <div className="row  my-5 gap-2 gradient-color">
      {future.slice(0, show ? 15 : 3).map((toy) => (
        <Card
          key={toy._id}
          className="col-lg-3 my-5  bg-transparent  mx-auto"
          style={{}}
        >
          <Card.Img
            className="image rounded-lg img-rounded"
            variant="top"
            src={toy.image}
          />
          <Card.Body>
            <Card.Title>{toy.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <p className="text-white">Features</p>
            <ListGroup.Item>{toy.features[0]}</ListGroup.Item>
            <ListGroup.Item>{toy.features[1]}</ListGroup.Item>
            <ListGroup.Item>{toy.features[2]}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="/">Go to Details</Card.Link>
          </Card.Body>
        </Card>
      ))}
      <Button onClick={() => setShow(true)}>More</Button>
    </div>
  );
};

export default FeatureToy;
