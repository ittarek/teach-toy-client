import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const MotionToyDetails = () => {
          const data = useLoaderData();

  const { _id, price, rating, picture, toy_name } = data || {};
  return (
    <Card className="w-75 mx-auto my-5" style={{ width: "18rem" }}>
      <Card.Img variant="top" className="img-fluid " src={picture} />
      <Card.Body>
        <Card.Title className="fw-bold text-info">{toy_name}</Card.Title>
        <Card.Text>
          {/* Some quick example text to build on the card title and make up the
                        bulk of the card's content. */}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className="fw-bold"> Price : {price}</ListGroup.Item>
        <ListGroup.Item>Ratings : {rating}</ListGroup.Item>
        {/* <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
      </ListGroup>
      <Card.Body>
        {/* <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
  );
};

export default MotionToyDetails;