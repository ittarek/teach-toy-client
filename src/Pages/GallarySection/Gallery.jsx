import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./Gallery.css";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
const images = [
  {
    img: "https://images.unsplash.com/photo-1656955178167-3888ac44843c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1545165393-011d14b0dcf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1663040347163-8dccf545b0ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1656955178167-3888ac44843c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1545165393-011d14b0dcf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1663040347163-8dccf545b0ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1670745303357-28daa1ea9e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661590817216-b07e76427726?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1656955178167-3888ac44843c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1545165393-011d14b0dcf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1663040347163-8dccf545b0ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1670745303357-28daa1ea9e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661590817216-b07e76427726?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
];
const Gallery = () => {
  return (
    <Container className="my-5 ">
      <h1 className="text-info my-5 shadow-lg py-3 fw-bold gallery  w-100 text-center">
        Gallery{" "}
      </h1>
      <PhotoProvider
      className=""
        speed={() => 800}
        easing={type =>
          type === 2
            ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
            : "cubic-bezier(0.34, 1.56, 0.64, 1)"
        }
      >
        <div className="">
          {images.map((item, index) => (
    
              <PhotoView key={index} className=" " src={item.img}>
                <img
                  src={item.img}
                  alt=""
                  className=" img-hover px-1  w-50 "
                  style={{maxWidth:"250px",
                    maxHeight: "150px",
                    objectFit: "cover",
                  }}
                />
              </PhotoView>
      
          ))}
        </div>
      </PhotoProvider>

      {/* <div className="row gap-1 ">
        {images?.map(image => (
          <div className="col-3 col-lg-2  mx-auto">
            <img
              data-aos="fade-up"
              className="img-hover  "
              style={{ maxWidth: "500px", height: "150px" }}
              src={image.img}
              alt=""
            />
          </div>
        ))}
      </div> */}
    </Container>
  );
};

export default Gallery;
