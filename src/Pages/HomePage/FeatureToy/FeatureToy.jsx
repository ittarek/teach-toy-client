import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
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
    <div className="row  my-5 gap-2">
      {feture.slice(0, show ? 6  : 3  ).map((toy) => (
        <Card className="col-lg-3  shadow-1-primary mx-auto" style={{  }}>
          <Card.Img variant="top" src={toy.image} />
          <Card.Body>
            <Card.Title>{toy.name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <p>Features</p>
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
