import React, { useEffect, useState } from "react";
const Loader = () => {
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
    <div className="loader h-full w-full">
      <div className="loader-wrap h-screen w-full flex items-center justify-center flex-col">
        <h1
          className="text-xl loading-text"
          style={{
            // color: "#D1D5DB",
            fontFamily: "Ht",
            fontWeight: weight,
            transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          Loading Please Wait...
        </h1>
      </div>
    </div>
  );
};

export default Loader;
