import React from "react";
import { motion } from "framer-motion";

const Button = ({ text }) => {
  return (
    <button className="buttonMain">
      <div className="buttonMain-span buttonMain-span-1">
        <span>{text}</span>
      </div>
      <div className="buttonMain-span buttonMain-span-2">
        <span>{text}</span>
      </div>
    </button>
  );
};

export default Button;
