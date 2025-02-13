import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const Newsslider = () => {
  const imageSlides = [
    {
      title: "JA 2 Scratch Black Label",
      image: "./src/assets/images/newssliderimage01.png",
      description:
        "Let your game—and your bling—do the talking in this bold JA 2.",
    },
    {
      title: "Nike 24.7 ImpossiblySoft",
      image: "./src/assets/images/newssliderimage02.png",
      description:
        "Extraordinarily soft and smooth, our ImpossiblySoft fabric feels made for all-day.",
    },

    {
      title: "Nike Sportswear Tech Fleece",
      image: "./src/assets/images/newssliderimage03.png",
      description:
        "After setting the bar for premium warmth, comfort and style.",
    },
    {
      title: "Nike 24.7 ImpossiblySoft",
      image: "./src/assets/images/newssliderimage04.png",
      description:
        "Extraordinarily soft and smooth, our ImpossiblySoft fabric feels made for all-day motion.",
    },
    {
      title: "Nike Air",
      image: "./src/assets/images/newssliderimage05.png",
      description: "Warmth is just a quick zip away with this roomy hoodie.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="news-slider">
        <div className="first-approach">
          <motion.div
            className="slider-card"
            key={currentIndex}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.5 }}
            transition={{ duration: 1, ease: [0.85, 0, 0.15, 1] }}
          >
            <div className="image-container">
              <img src={imageSlides[currentIndex].image} alt="Not Found" />
            </div>
            <div className="text-container">
              <h3>{imageSlides[currentIndex].title}</h3>
              <p className="subtitle-sm">
                {imageSlides[currentIndex].description}
              </p>
            </div>
          </motion.div>
        </div>
        <div className="restof"></div>
      </div>
    </div>
  );
};

export default Newsslider;
