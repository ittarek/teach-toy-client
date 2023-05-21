import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./Gallery.css";
const Gallery = () => {
  return (
    <Container className="my-5 mx-auto">
      <h1 className="text-info my-5 shadow-lg  gallery mx-auto w-100 d-flex justify-content-center align-items-center">
        Gallery{" "}
      </h1>
      <div className="image-div  mx-auto">
        <div className="main-image w-50 mx-auto d-lg-flex justify-content-center  " >
          <img data-aos="fade-down"
            className="img-fluid w-50 mx-auto rounded roundel-lg"
            src="https://images.unsplash.com/photo-1577638104555-83af2d50b5e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80"
            alt=""
          />
          <img
            className="img-fluid rounded  roundel-lg" data-aos="fade-up"
            src="https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            alt=""
          />{" "}
        </div> 

         <div className="second-div w-50 mx-auto ">
          <img data-aos="fade-right" className="img-fluid" src="https://images.unsplash.com/photo-1545165393-011d14b0dcf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="" />
        </div>
      </div>



      {/* Carousel */}
      <div className="my-5 "  data-aos="fade-up"
     data-aos-duration="3000">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 mx-auto"
              src="https://plus.unsplash.com/premium_photo-1663040347163-8dccf545b0ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 mx-auto"
              src="https://images.unsplash.com/photo-1670745303357-28daa1ea9e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              alt="Second slide"
            />

            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 mx-auto"
              src="https://plus.unsplash.com/premium_photo-1661590817216-b07e76427726?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="Third slide"
            />

            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  );
};

export default Gallery;
