import React, { useEffect, useState } from "react";
import "./ShopCategory.css";
import { Tab, Tabs, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import RoboticToy from "./RoboticToyPage/RoboticToy";
const ShopCategory = () => {
  const [toggleState, setToggleState] = useState(1);
  const [roboticToy, setRoboticToy] = useState([]);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    fetch("../../../public/robotic-toy.json")
      .then((res) => res.json())
      .then((data) => {
        setRoboticToy(data);

        console.log(data);
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
          <Link
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            <Link className=" hover-tab">
              {" "}
              Robotic Toy{" "}
              <ul className="subCategory">
                {roboticToy.map((robot) => ( <li key={robot.id}>
                      <Link to={`/roboticToy/${robot.id}`}  >{robot.name} </Link>
                    </li>
              
                ))}
              </ul>
            </Link>
          </Link>

          {/* category 2 */}
          <Link
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            <Link className=" hover-tab">
              {" "}
              Amplifier Toy{" "}
              <ul className="subCategory">
                <li>
                  <Link>Rockin' Sound</Link>{" "}
                </li>{" "}
                <li>
                  <Link>SonicBoom </Link>
                </li>
                <li>
                  <Link>MegaTone </Link>
                </li>
                <li>
                  <Link>PowerBlast</Link>
                </li>
                <li>
                  <Link>TurboSound </Link>
                </li>
              </ul>{" "}
            </Link>
          </Link>

          {/* category 3 */}
          <Link
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            <Link className=" hover-tab">
              {" "}
              Motion Sensor{" "}
              <ul className="subCategory">
                <li>
                  <Link> DetectaBot Motion</Link>
                </li>{" "}
                <li>
                  <Link>SpeedSense Motion </Link>
                </li>
                <li>
                  <Link>TurboTrack Motion</Link>
                </li>
                <li>
                  <Link>SensorSquad Motion </Link>
                </li>
                <li>
                  <Link>MoveMatic Motion</Link>
                </li>
              </ul>{" "}
            </Link>
          </Link>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <div className="d-lg-flex gap-3">
              <img
                className="img-fluid w-75 h-25"
                src="https://plus.unsplash.com/premium_photo-1663089920014-4ff29cd209f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=888&q=80"
                alt=""
              />
              <p>
                Robotic toys are interactive playthings that mimic the movements
                and behaviors of robots. They often feature advanced technology
                and sensors to provide engaging and educational experiences for
                children. Robotic toys come in various forms, such as humanoid
                robots, animal robots, and even programmable robots. These toys
                can perform a wide range of actions, including walking, talking,
                dancing, and responding to voice commands.
              </p>
            </div>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <div className="d-lg-flex gap-3">
              <img
                className="img-fluid w-75 h-25"
                src="https://images.unsplash.com/photo-1558060370-d644479cb6f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente voluptatum qui adipisci.
              </p>
            </div>
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <div className="d-lg-flex gap-3">
              <img
                className="img-fluid w-75 h-25 "
                src="https://images.unsplash.com/photo-1625442772842-329d4f08ea14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                sed nostrum rerum laudantium totam unde adipisci incidunt modi
                alias! Accusamus in quia odit aspernatur provident et ad vel
                distinctio recusandae totam quidem repudiandae omnis veritatis
                nostrum laboriosam architecto optio rem, dignissimos voluptatum
                beatae aperiam voluptatem atque. Beatae rerum dolores sunt.
              </p>
            </div>
          </div>
        </div>
      </Tabs>
    </Container>
  );
};

export default ShopCategory;
