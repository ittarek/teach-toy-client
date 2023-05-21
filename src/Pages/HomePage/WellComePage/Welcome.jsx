import React from "react";
import { Container } from "react-bootstrap";

const Welcome = () => {
  return (
    <Container className="my-5">
      <div className="header text-center">
        <h1 className="mb-6">
          Welcome TO Our <span className="fw-bolder"> Tech Toys</span>{" "}
        </h1>{" "}
        <p className="w-75 mx-auto mb-10 text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe beatae
          consectetur est minima vitae nihil assumenda molestiae neque repellat
          exercitationem pariatur voluptatum optio, magnam doloremque?
        </p>
      </div>

      <div className="details" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
        <div
          className="d-lg-flex gap-3"
         
        >
          <div className="first-image">
            <img 
              className="w-100"
              src="https://htmldemo.net/elomus/elomus/img/banner/b10.jpg"
              alt=""
            />
          </div>
          <div className="summary text-left">
            <h1>
              Speedster Electronics <span className="text-danger">Scooter</span> - only
              available at select Tech Toys.
            </h1>{" "}
            <p className="text-secondary my-5">
              Blow a whistle to start the race! Your child will love riding this
              speedster scooter featuring easy grip foam handles.
            </p>
            <div className="d-flex gap-5">
              <ul>
                <li className="text-secondary my-2">Suitable for 2+ years</li>
                <li className="text-secondary my-2">
                  Designed for little riders
                </li>
                <li className="text-secondary my-2">
                  Max. load capacity of 20kg
                </li>
              </ul>
              <ul>
                {" "}
                <li className="text-secondary my-2">Easy grip foam handles</li>
                <li className="text-secondary my-2">Instructions included</li>
                <li className="text-secondary my-2">Colour: Red and black</li>
              </ul>
            </div>
            <h1 className="text-danger fw-bolder">Price $150</h1>
          </div>
        </div>
      </div>
      <div className="details my-5" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
        <div className="first-product d-lg-flex gap-5">
          <div className="summary text-left">
            <h1>
              Speedster  Electronics <span className="text-danger">Scooter</span> - only
              available at select Tech Toys.
            </h1>{" "}
            <p className="text-secondary my-5">
              Your child will have a great time zipping around on this cool
              commuter scooter.
            </p>
            <ul>
              {" "}
              <li className="text-secondary my-2"> Suitable for 5+ years</li>
              <li className="text-secondary my-2">
                180mm PU wheels for a smooth ride
              </li>
              <li className="text-secondary my-2">100kg weight capacity</li>
            </ul>
            <h1 className="text-danger fw-bolder">Price $210</h1>
          </div>

          <div className="second-image">
            <img
              className="w-100"
              src="https://htmldemo.net/elomus/elomus/img/banner/b11.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Welcome;
