import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "../Swiper.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
const Blcollection = () => {
  const swiperRef = useRef(null);
  const images = [
    { src: "./src/assets/images/blcollection01.jpg", name: "Sabrina Ionescu" },
    { src: "./src/assets/images/blcollection02.jpg", name: "LeBron James" },
    { src: "./src/assets/images/blcollection03.jpg", name: "Ja Morant" },
    {
      src: "./src/assets/images/blcollection04.jpg",
      name: "Giannis Antetokounmpo",
    },
    { src: "./src/assets/images/blcollection05.jpg", name: "Devin Booker" },
    { src: "./src/assets/images/blcollection06.jpg", name: "Kevin Durant" },
  ];
  return (
    <div className="blcollection">
      <div className="blcollection-wrapper">
        <div className="blcollection-content">
          <span className="subtitle-sm">NIKE BASKETBALL</span>
          <div className="blcollection-title-wrapper">
            <h1 className="mb-8">BLACK LABEL –</h1>
            <div className="slider-navigation flex items-center justify-center gap-3">
              <div
                className="sliderNavigation-el-prev"
                onClick={() => swiperRef.current.slidePrev()}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                className="sliderNavigation-el-next"
                onClick={() => swiperRef.current.slideNext()}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="blcollection-slider">
          <Swiper
            slidesPerView={3}
            spaceBetween={60}
            freeMode={true}
            modules={[FreeMode]}
            navigation={false}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="mySwiper"
          >
            {images.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="slide-content">
                <Link to='/shop'>
                    <img src={item.src} alt={item.name} />
                  </Link>
                  <p className="blcollection-slider-caption">{item.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Blcollection;
