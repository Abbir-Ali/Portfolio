import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import usericon from "../../img/usericon.png";

import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

const Testimonials = () => {
  const clients = [
    {
      img: usericon,
      review:
        "Working with Abbir Ali was a breeze! Their attention to detail and quick turnaround time made my project a success. Highly recommend!",
    },
    {
      img: usericon,
      review:
        "Impressed by Abbir ALi's professionalism and expertise in web development. They listened to my needs and delivered beyond expectations. Great job!",
    },
    {
      img: usericon,
      review:
        "Couldn't be happier with the results! Abbir Ali not only fixed all the bugs in my website but also added valuable enhancements. Thanks for a job well done!",
    },
    {
      img: usericon,
      review:
        "Hiring Abbir Ali was the best decision I made for my business. Their creative solutions and dedication to excellence made the entire process smooth and enjoyable. 5 stars!",
    },
  ];
  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Clients Always Get </span>
        <span>Exceptional Work</span>

        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>

      {/* Slider  */}

      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((clients, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonials">
                <img src={clients.img} alt="" />
                <span>{clients.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
