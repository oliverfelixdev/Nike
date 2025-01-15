import React, { useState } from 'react';

const ButtonRipple = ({ text }) => {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Create ripple element
    const newRipple = {
      x,
      y,
      id: Date.now(), // Use timestamp as a unique ID
    };
    setRipples((prevRipples) => [...prevRipples, newRipple]);

    // Remove the ripple after animation ends
    setTimeout(() => {
      setRipples((prevRipples) => prevRipples.filter(ripple => ripple.id !== newRipple.id));
    }, 2200);
  };

  return (
    <button className="ripple-button" onClick={handleClick}>
      {text}
      {ripples.map((ripple) => (
        <span
        //   key={ripple.id}
        //   className="ripple-span"
        //   style={{
        //     top: `${ripple.y}px`,
        //     left: `${ripple.x}px`,
        //   }}
        >Hello</span>
      ))}
    </button>
  );
};

export default ButtonRipple;
