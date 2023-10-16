import React, { useEffect, useState } from "react";
import "./ShopCategory.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Button, Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShopCategory = () => {
  const [toggleState, setToggleState] = useState(1);
  const [roboticToy, setRoboticToy] = useState([]);
  const [amplifier, setAmplifier] = useState([]);
  const [motion, setMotion] = useState([]);
  const [allToy, setAllToys] = useState([])
  console.log("shop",allToy.object);
  // console.log(roboticToy);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  useEffect(() => {
    fetch("https://b7-a11-toy-marketplace-server-side.vercel.app/allToy")
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  }, []);
  // const motionToy = allToy.filter(mt => mt.category.label === "Kid-Safe Headphones")
  // // Sub-Category
  // console.log("filterid",motionToy);



  useEffect(() => {
    fetch("https://b7-a11-toy-marketplace-server-side.vercel.app/roboticToy")
      .then((res) => res.json())
      .then((data) => {
        setRoboticToy(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://b7-a11-toy-marketplace-server-side.vercel.app/amplifierToy")
      .then((res) => res.json())
      .then((data) => setAmplifier(data));
  }, []);

  useEffect(() => {
    fetch("https://b7-a11-toy-marketplace-server-side.vercel.app/motionToy")
      .then((res) => res.json())
      .then((data) => {
        setMotion(data);
      });
  }, []);
  return (
    <Container>
      <h3 className="mx-auto text-canter w-25 sm-fs-small">
        Our Shop Category
      </h3>
      <Tabs className=" my-5">
        <div className="bloc-tabs">
          {/* Category-1 */}
          <TabList
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            <button className="btn btn-outline-info fw-bold">
              {" "}
              Robotic Toy{" "}
            </button>
          </TabList>

          {/* category 2 */}
          <TabList
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            <button className=" btn btn-outline-info fw-bold">
              {" "}
              Amplifier Toy{" "}
            </button>
          </TabList>

          {/* category 3 */}
          <TabList
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            <button className="btn btn-outline-info">Motion Sensor </button>
          </TabList>
        </div>

        {/*  -------------------tab content --------------------------------- */}
        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            {/*------------------------ tab content 1 --------------------------*/}
            <div className="row  my-5 mx-auto gap-5 ">
              {roboticToy.map((robot) => (
                <Card className="col-lg-4 h-100 mx-auto shadow">
                  <Card.Img
                    variant="top"
                    className="robot-image img-fluid"
                    src={robot.picture}
                  />
                  <Card.Body>
                    <Card.Text>
                      <p className="fw-bold fs-3">{robot.name}</p>
                      <Link to={`/detailsToy/${robot._id}`} >
                        {" "}
                        <button className="btn btn-outline-info">
                          View details
                        </button>
                      </Link>
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            {/*    ------------------------  tab content 2  ------------------ */}
            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <div className="row  my-5 mx-auto gap-5 ">
                {amplifier.map((amp) => (
                  <Card className="col-lg-4 shadow  h-100 mx-auto">
                    <Card.Img
                      variant="top"
                      className="robot-image img-fluid"
                      src={amp.picture}
                    />
                    <Card.Body>
                      <Card.Text>
                        <p className="fw-bold fs-3">{amp.toy_name}</p>
                        <Link to={`/amplifierToy/${amp._id}`}>
                          {" "}
                          <button className="btn btn-outline-info">
                            View details
                          </button>
                        </Link>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <div className="row  my-5 mx-auto gap-5 ">
              {motion.map((mot) => (
                <Card className="col-lg-4 mx-auto shadow  h-100">
                  <Card.Img
                    variant="top"
                    className="robot-image img-fluid"
                    src={mot.picture}
                  />
                  <Card.Body>
                    <Card.Text>
                      <p className="fw-bold fs-3"> {mot.toy_name}</p>
                    </Card.Text>
                    <Card.Text>
                      {" "}
                      <Link to={`/motionToy/${mot._id}`}>
                        {" "}
                        <button className="btn btn-outline-info">
                          View details
                        </button>
                      </Link>
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Tabs>
    </Container>
  );
};

export default ShopCategory;
