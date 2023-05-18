import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const RoboticToy = () => {
  const { spinner } = useContext(AuthContext);
  const [robot, setRobot] = useState([]);
  console.log(robot);
  //     const { name, price,picture, id, rating } = robot;
  if (spinner) {
     (
      <Spinner
        animation="grow"
        variant="primary"
        className="w-25 m-auto  d-flex justify-content-center align-items-center "
      ></Spinner>
    );
  }
  useEffect(() => {
    fetch("../../../../public/robotic-toy.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setRobot(data);
      });
  }, []);
  return (<div>

{
          robot.map(robo =><Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={robo.picture} />
          <Card.Body>
            <Card.Title>{robo.name}</Card.Title>
            <Card.Title>{robo.price}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>  )
}

     </div>
  );
};

export default RoboticToy;
