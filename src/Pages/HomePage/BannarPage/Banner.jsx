import React from "react";
import { Container } from "react-bootstrap";
import "./Banner.css";
const Banner = () => {
  return (
    <Container className="d-lg-flex align-items-center">
      <div className="heading">
        <h1>Lorem ipsum dolor, sit amet </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
          voluptas consectetur tempora minima quia voluptatum veritatis libero,
          neque excepturi iure quisquam sequi laboriosam accusantium porro nulla
          assumenda omnis impedit dignissimos.
        </p>
      </div>

      <div>
        <img
          className="banner-image"
          src="  https://htmldemo.net/kidol/kidol/assets/img/blog/details/8.jpg"
          alt=""
        />
      </div>
    </Container>
  );
};

export default Banner;
