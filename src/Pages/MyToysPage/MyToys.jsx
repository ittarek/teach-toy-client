import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MyToys.css";
import UpdateToy from "../UpdateToy/UpdateToy";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [controlLoad, setControlLoad] = useState(false);
  //   console.log("my toy page", myToys);
  useEffect(() => {
    fetch(`http://localhost:5000/myToy/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [user, controlLoad]);

  const handleJobUpdate = (data) => {
    console.log("update", data);
    fetch(`http://localhost:5000/updateToy/${data._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          setControlLoad(!control);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.displayName}Update SuccessFul`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
        console.log(result);
      });
  };

  return (
    <div>
      <div className="d-lg-flex w-100">
        {myToys.map((myToy) => (
          <Card className=" my-4 mx-auto" style={{ width: "25rem" }}>
            <Card.Img
              variant="top"
              src={myToy.photo}
              className="img-fluid my-toy-image"
            />
            <Card.Body>
              <Card.Title>{myToy.ToyName}</Card.Title>
              <p>Price : {myToy.price} $</p>
              <p>Rating : {myToy.rating}</p>
              <p>Quantity : {myToy.quantity}</p>
              <p>Category : {myToy.toy?.value}</p>
              <Card.Text>{myToy.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              {/* <Link to="/addToy">
                {" "}
                <Button>Update My Toy</Button>
              </Link> */}{" "}
              <td>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                  Update Toy
                </Button>
                <UpdateToy
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  myToy={myToy}
                  handleJobUpdate={handleJobUpdate}
                />
              </td>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyToys;
