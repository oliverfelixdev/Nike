import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";
import Button from "./Button";

const Trending = () => {
  const images = [
    {
      image: "./src/assets/images/trending01.jpg",
      title: "You can't ban greatness",
      subtitle: "Jordan brand",
    },
    {
      image: "./src/assets/images/trending02.jpg",
      title: "Tailored for all-day comfort",
      subtitle: "Nike 24.7 collection",
    },
    {
      image: "./src/assets/images/trending03.jpg",
      title: "Jersey culture",
      subtitle: "Bring your game",
    },
    {
      image: "./src/assets/images/trending04.jpg",
      title: "GT cut 3 turbo LX black",
      subtitle: "A legacy in making",
    },
    {
      image: "./src/assets/images/trending05.jpg",
      title: "Fit check",
      subtitle: "Culture of the game",
    },
    {
      image: "./src/assets/images/trending06.jpg",
      title: "Court-Ready Styles",
      subtitle: "Culture of the game",
    },
  ];

  const [shuffledImages, setShuffledImages] = useState([]);
  const shuffleArray = (arr) => {
    let newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };
  useEffect(() => {
    setShuffledImages(shuffleArray(images));
  }, []);

  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    768: 1,
  };

  return (
    <div className="trending">
      <div className="trending-wrapper">
        <div className="trending-content">
          <h4 className="text-2xl font-medium mt-10 md:mt-32 mb-6">Trending Now</h4>
        </div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {shuffledImages.map((img, index) => (
            <div key={index} className="relative rounded-sm overflow-hidden">
              <img
                src={img.image}
                alt={img.title}
                className="w-full h-auto object-cover"
              />
              <Link to="/shopall">
                <div className="shopall-masonry-child h-full w-full absolute top-0 left-0 z-20 flex items-start justify-end flex-col p-6 ">
                  <p className="subtitle-sm">{img.subtitle}</p>
                  <h3 className="subtitle-xl">{img.title}</h3>
                </div>
              </Link>
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default Trending;
