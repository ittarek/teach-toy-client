import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./NewProduct.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const NewProduct = () => {
const [newProducts , setNewProducts] = useState([]);
useEffect(()=>{
  fetch(`${import.meta.env.VITE_API_URL}/newProduct`)
  .then(res=>res.json())
  .then(data=>{
    setNewProducts(data)
  })
},[])

     

 
  return (
    <div className="container my-5">
      <h1 className="text-center fw-bold text-info mb-5">New In</h1>
      <>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {" "}
          {newProducts?.map(product => (
            <SwiperSlide key={product._id}>
              {" "}
              <div
                className="card p-2 "
                style={{
                  backgroundColor: "#FAFAFA",
                  height: "26rem",
                  width: "40rem",
                }}
              >
                <img className="toy-image" src={product.img} alt="image" />
                <div className="w-100 d-flex justify-content-between align-content-between flex-column">
                  <div className="d-flex flex-column  align-items-center discount-content">
                    <p
                      className={`${
                        product.onSell
                          ? "p-1 border fw-bold bg-danger text-white d-inline w-25 text-center"
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
                          ? "p-1 bg-danger text-white d-inline w-25 text-center"
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
