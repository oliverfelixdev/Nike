import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Underwork = () => {
  const [weight, setWeight] = useState(100);
  useEffect(() => {
    const handleMouseMove = (e) => {
      const screenWidth = window.innerWidth;
      const mouseX = e.clientX;
      const fontWeight = Math.min(
        900,
        Math.max(100, (mouseX / screenWidth) * 800 + 100)
      );
      setWeight(fontWeight);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <div className="h-screen w-full">
      <div className="flex items-center justify-center h-full w-full">
        <div className="text-content flex items-center justify-center flex-col">
          <h1
            className="underwork-title"
            style={{
              fontWeight: weight,
              fontSize: "5.5rem",
              transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
              textAlign: "center",
            }}
          >
            Code in Motion*
          </h1>
          <a href="https://github.com/oliverfelixdev/" target="_blank">
            @Oliver
          </a>
          <div className="border-t border-[#ffffff35] mt-6 pt-8 w-full flex items-center justify-center">
            <Button text="Ignite the flames" linkroute="/jordan" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Underwork;
