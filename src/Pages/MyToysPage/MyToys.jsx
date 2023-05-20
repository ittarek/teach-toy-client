import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Button, Card, CardGroup, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MyToys.css";
import UpdateToy from "../UpdateToy/UpdateToy";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [updatePage, setUpdatePage] = useState(false);
  //   console.log("my toy page", myToys);
  useEffect(() => {
    fetch(`http://localhost:5000/myToy/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [user, updatePage]);
  // update my toy function
  const handleUpdateMyToy = (data) => {
    console.log("update", data);
    fetch(`http://localhost:5000/updateMyToy/${data._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setUpdatePage(true);
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

  // my toy delete Function

  const handleDeleteMyToy = (_id) => {
    const sure = confirm("are you sure Delete This Toy");
    if (sure) {
      fetch(`http://localhost:5000/updateMyToy/${_id}`, {
        method: "DELETE",
        headers: {},
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = myToys.filter((data) => data._id !== _id);
            setMyToys(remaining);
            setUpdatePage(true);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${user.displayName}Your Toy Delete SuccessFul`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };

  return (
    <CardGroup className="row mx-2">
      {myToys.map((myToy) => (
        <Col >
        <Card className="col-3 my-5 mx-auto" style={{ width: "25rem" }}>
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
                handleUpdateMyToy={handleUpdateMyToy}
              />
            </td>
            <td>
              <Button
                onClick={() => handleDeleteMyToy(myToy._id)}
                variant="danger"
              >
                Delete Toy
              </Button>
            </td>
          </Card.Footer>
        </Card></Col>
      ))}
    </CardGroup>
  );
};

export default MyToys;
