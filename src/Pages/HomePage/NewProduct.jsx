import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./NewProduct.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
const newProducts = [
  {
    title: "Jens",
    img: "https://plus.unsplash.com/premium_photo-1687900531763-f4c9c7b99dca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1563&q=80",
    price: 300,
    onSell: "On Sell",
    discount: "-40%",
  },
  {
    title: "Lined Jogging Trousers",
    price: 400,
    img: "https://images.unsplash.com/photo-1650359901126-941f0bdca7ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1644&q=80",
 
  
  },
  {
    title: "Lined Jogging Trousers",
    price: 800,
    img: "https://images.unsplash.com/photo-1657901945977-e41b4091586b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    onSell: "On Sell",
    discount: "-50%",
  },
  {
    title: "Lined Jogging Trousers",
    price: 600,
    img: "https://images.unsplash.com/photo-1657901945977-e41b4091586b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    onSell: "On Sell",
    discount: "-30%",
  },
  {
    title: "Knit Cardigan With Pockets",
    price: 250,
    img: "https://plus.unsplash.com/premium_photo-1661698763470-55da05629e50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",

  
  },
];
const NewProduct = () => {


     

 
  return (
    <div className="container my-5">
      <h1 className="text-center fw-bold text-info mb-5">New In</h1>
      <>
        <Swiper
          slidesPerView={4}
          pa
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {" "}
          {newProducts.map((product, index) => (
            <SwiperSlide key={index}>
              {" "}
              <div
                className="card p-2 mx-3"
                style={{ backgroundColor: "#FAFAFA", height: "26rem" }}
              >
                <img
                  className="card-image-top toy-image"
                  src={product.img}
                  alt=""
                />
                <div className="w-100 d-flex justify-content-between align-content-between flex-column">
                  <div className="d-flex flex-column  align-items-center discount-content">
                    <p
                      className={`${
                        product.onSell
                          ? "p-1 border fw-bold border-1 border-danger text-danger d-inline w-25 text-center"
                          : ""
                      }`}
                    >
                      {product.onSell ? product.onSell : ""}
                    </p>

                    <p className="bg-secondary fw-bold w-25 p-1 text-center text-white">
                      New
                    </p>
                    <p
                      className={`${
                        product.discount
                          ? "p-1 border fw-bold border-1 border-danger text-danger d-inline w-25 text-center"
                          : ""
                      }`}
                    >
                      {product.discount ? product.discount : ""}
                    </p>
                  </div>
                  <div className="title_price">
                    <h5>{product.title}</h5>
                    <p>${product.price}</p>
                  </div>
                </div>
              </div>{" "}
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default NewProduct;
