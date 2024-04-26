import React, { useContext } from "react";
import "./Portfolio.css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import TechnologyPickup from "../../img/technologypickup1.png";
import fotfw from "../../img/fotfw.store.png";
import spotify from "../../img/Spotify.png";
import Ecommerce from "../../img/ecommerce.png";
import { DarkModeContext } from "../../DarkModeContext";

const Portfolio = () => {
  const theme =useContext(DarkModeContext);
  const darkMode= theme.state.darkMode;
  const Projects = [
    { img: TechnologyPickup },
    { img: fotfw },
    { img: spotify },
    { img: Ecommerce },
  ];

  return (
    <div className="portfolio" id="Portfolio">
      {/* Heading */}
      <span style={{color : darkMode? 'white' : 'black'}}>Recent Projects</span>
      <span >Portfolio</span>
      {/* Slider */}
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={2}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {Projects.map((Projects, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={Projects.img} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Portfolio;
