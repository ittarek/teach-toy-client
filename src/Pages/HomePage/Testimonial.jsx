import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Testimolals.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";



const Testimonial = () => {
   const [testimonials, setTestimonials] = useState([]);
     const progressCircle = useRef(null);
     const progressContent = useRef(null);
     const onAutoplayTimeLeft = (s, time, progress) => {
       progressCircle.current.style.setProperty("--progress", 5 - progress);
       progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
     };


    
     useEffect(() => {
       fetch(`${import.meta.env.VITE_API_URL}/testimonial`)
         .then(res => res.json())
         .then(data => {
      

           setTestimonials(data);
         });
     }, []);

     
  return (
    <div className="container my-5">
      <h1 className="text-center fw-bold text-info ">Our Testimonials</h1>
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
          {testimonials?.map((test) => (
            <SwiperSlide key={test._id}>
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
