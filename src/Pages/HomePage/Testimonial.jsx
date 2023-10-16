import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Testimolals.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Testimonials = [
  {
    name: "Tarek",
    position: "web Developer",
    img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto veniam repellendus quos hic beatae quibusdam voluptas reiciendis, eveniet impedit itaque nemo et ex voluptates ipsum, ab tempore consectetur voluptatem.",
  },
  {
    name: "Tarek",
    position: "web Developer",
    img: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto veniam repellendus quos hic beatae quibusdam voluptas reiciendis, eveniet impedit itaque nemo et ex voluptates ipsum, ab tempore consectetur voluptatem.",
  },
  {
    name: "Sifath",
    position: "Ui Ux Developer",
    img: "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto veniam repellendus quos hic beatae quibusdam voluptas reiciendis, eveniet impedit itaque nemo et ex voluptates ipsum, ab tempore consectetur voluptatem.",
  },
  {
    name: "Rafatha",
    position: "Back-end Developer",
    img: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto veniam repellendus quos hic beatae quibusdam voluptas reiciendis, eveniet impedit itaque nemo et ex voluptates ipsum, ab tempore consectetur voluptatem.",
  },
];
const Testimonial = () => {
     const progressCircle = useRef(null);
     const progressContent = useRef(null);
     const onAutoplayTimeLeft = (s, time, progress) => {
       progressCircle.current.style.setProperty("--progress", 5 - progress);
       progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
     };
  return (
    <div className="container my-5">
      <h1 className="text-center fw-bold text-info ">Out Testimonials</h1>
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper my-5"
        >
          {Testimonials.map((test, index) => (
            <SwiperSlide key={index}>
              <div>
                <img
                  className="w-25 rounded-circle mx-auto slider-image-height"
                  src={test.img}
                  alt="Testi"
                />
                <div>
                  <p className="text-secondary">{test.position}</p>
                  <h3>{test.name}</h3>
                  <p
                    className="text-center w-50 mx-auto text-secondary mb-5"
              
                  >
                    {test.summary}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </>
    </div>
  );
};

export default Testimonial;
