import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import './FeatureToy.css'
const FeatureToy = () => {
  const [feture, setFeture] = useState([]);
const [show, setShow] =useState(false)
  useEffect(() => {
    fetch("../../../../public/featureToy.json")
      .then((res) => res.json())
      .then((data) => {
        setFeture(data);
      });
  }, []);
  return (
    <div  className="row  my-5 gap-2 gradient-color">
      {feture.slice(0, show ? 15  : 3  ).map((toy) => (
        <Card className="col-lg-3  bg-transparent  mx-auto" style={{  }}>
          <Card.Img className="image rounded-lg img-rounded" variant="top" src={toy.image} />
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
      <Button onClick={()=>setShow(true)}>More</Button>
    </div>
  );
};

export default FeatureToy;
