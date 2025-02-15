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
    <div className="text-center flex items-center justify-center cursor-grab h-[18rem]">
      <h1
        style={{
          fontFamily: "Ht",
          fontWeight: weight,
          fontSize: "6.5rem",
          transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        There is no finish line!
      </h1>
    </div>
  );
};

export default Uitexteffect;
