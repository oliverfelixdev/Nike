import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, linkroute }) => {
  return (
    <Link to={linkroute} className="buttonMain">
      <div className="buttonMain-span buttonMain-span-1">
        <span>{text}</span>
      </div>
      <div className="buttonMain-span buttonMain-span-2">
        <span>{text}</span>
      </div>
    </Link>
  );
};

export default Button;
