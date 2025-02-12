import React from "react";

const Button = () => {
  const buttonStyle = {
    borderRadius: "0.25rem",
    padding: "0.75rem 1.5rem",
    backgroundColor: "aliceblue",
    color: "black",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    transform: "scale(1)",
    transition: "transform 0.6s cubic-bezier(0.83, 0, 0.17, 1)",
  };

  const handleHover = (e) => {
    e.target.style.transform = "scale(0.95)";
  };

  const handleLeave = (e) => {
    e.target.style.transform = "scale(1)";
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <span className="animation-span">Shop Products</span>
    </button>
  );
};

export default Button;
