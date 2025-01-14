import { React, useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { gsap } from "gsap";
// Button
import useHover from "../utils/useHover";
import Button from "../components/Button";
// swiper
import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";

const splitText = (text, additionalClass = "") => {
  return text.split("").map((char, index) => {
    return (
      <span
        key={index}
        className={`spltTxtSpan inline-block ${additionalClass}`}
      >
        {char}
      </span>
    );
  });
};

const Home = () => {
  const [hoverRef, isHovered] = useHover();
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = 5;
  const headingRefs = useRef([]);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  useEffect(() => {
    headingRefs.current.forEach((headingRef) => {
      const letters = headingRef.querySelectorAll(".spltTxtSpan");
      gsap.fromTo(
        letters,
        {
          y: 70,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.05,
          ease: "power2.inOut",
        }
      );
    });
  }, [activeIndex]);

  return (
    <div className="w-full h-screen relative bg-[var(--color-dark)] text-[var(--color-light)] ">
      <div className="wrap h-full w-full relative">
        <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-30 z-20">
          <div className="content h-2/3 w-[84%] absolute right-0 bottom-0 flex items-start justify-between flex-col ">
            <div className="w-full flex items-center justify-between pr-8">
              <div className="relative flex items-start justify-center flex-col">
                <div>
                  <h1
                    ref={(el) => (headingRefs.current[0] = el)}
                    className="text-8xl font-[Pln-R] overflow-hidden"
                  >
                    <span>{splitText("SHOES")}</span>
                  </h1>
                  <div className="flex items-center justify-center gap-4">
                    <h1
                      ref={(el) => (headingRefs.current[1] = el)}
                      className="text-8xl font-[Pln-R] overflow-hidden"
                    >
                      <span>{splitText("THAT")}</span>
                    </h1>
                    <h1
                      ref={(el) => (headingRefs.current[2] = el)}
                      className="text-8xl font-[S-Dsp] overflow-hidden"
                    >
                      <span>{splitText("INSPIRE", "font-[S-Dsp]")}</span>
                    </h1>
                  </div>
                </div>
                <div className="absolute top-52 -left-4 ">
                  <Button ref={hoverRef}>SHOP RUNNING</Button>
                </div>
              </div>
              <div className="flex items-center justify-between gap-3">
                <div
                  className={`el-prev p-5 rounded-full border cursor-pointer ${
                    activeIndex === 0 ? "opacity-30" : "opacity-100"
                  }`}
                  onClick={handlePrev}
                >
                  <FaLongArrowAltLeft />
                </div>
                <div
                  className={`el-next p-5 rounded-full border cursor-pointer ${
                    activeIndex === 4 ? "opacity-30" : "opacity-100"
                  }`}
                  onClick={handleNext}
                >
                  <FaLongArrowAltRight />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between w-full pr-8 pb-5">
              <div className="flex items-center justify-center gap-4">
                <Link to="/jordan" className="text-sm">
                  JORDAN
                </Link>
                <Link to="/join" className="text-sm">
                  JOIN US
                </Link>
              </div>
              <div className="block">
                <span className="text-7xl font-[S-Dsp]">
                  {activeIndex + 1} -
                </span>
                <span className="text-7xl font-[Pln-R]">{totalSlides}</span>
              </div>
            </div>
          </div>
        </div>

        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade]}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="./src/assets/images/swiperslide0.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1733690577845-4f4641a456b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
