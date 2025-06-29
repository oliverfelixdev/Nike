import React, { useState, useEffect } from "react";

const Uitexteffect = () => {
  const [weight, setWeight] = useState(400);

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
    <div className="text-center flex items-center justify-center h-[10rem] md:h-[18rem]">
      <h1
        className="uitexteffect-heading"
        style={{
          fontFamily: "Ht",
          fontWeight: weight,
          fontSize: "8vw",
          transition: "all 0.6s linear",
        }}
      >
        There is no finish line!
      </h1>
    </div>
  );
};

export default Uitexteffect;
