import React from "react";
import { Container } from "react-bootstrap";
import "./Banner.css";
const Banner = () => {
  return (
    <Container className="d-lg-flex align-items-center" data-aos="zoom-in-down">
      <div className="heading">
        <h1 className="text-secondary fs-2"> <span className="text-info fs-1">Tech Toys</span> Galore: Unleash Your Inner Geek and Explore the Latest Gadgets! </h1>
        <p >
        Welcome to <span className="text-info fs-3 fw-bold">Tech Toys</span> Galore, the ultimate destination for all tech enthusiasts and geeks! We're here to bring you an exciting world of cutting-edge gadgets and innovative toys that will ignite your imagination and keep you entertained for hours on end.
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
