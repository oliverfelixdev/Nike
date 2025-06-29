import React, { useState, useEffect, useRef } from "react";

const phrases = [
  "Push Beyond Possible!",
  "There is no finish line.",
  "Prove Them Wrong*",
  "Own Your Edge",
];

// const specialChars = "$3●#&*@■!?";
const specialChars = "A0l1cG3Ee";

const shuffleText = (newText, setDisplayText) => {
  let iterations = 0;
  const maxIterations = 12;
  const textArray = newText.split("");
  const originalLength = textArray.length;

  const interval = setInterval(() => {
    const shuffled = textArray
      .map((char, i) => {
        if (
          iterations < maxIterations &&
          Math.random() > iterations / maxIterations
        ) {
          return specialChars[Math.floor(Math.random() * specialChars.length)];
        } else {
          return char;
        }
      })
      .join("");

    // pad or slice to keep length same as original
    const padded =
      shuffled.length > originalLength
        ? shuffled.slice(0, originalLength)
        : shuffled.padEnd(originalLength, " ");

    setDisplayText(padded);
    iterations++;

    if (iterations > maxIterations) {
      clearInterval(interval);
      setDisplayText(newText);
    }
  }, 60); // slight increase in delay for visibility
};

const Uitexteffect = () => {
  const [displayText, setDisplayText] = useState(phrases[0]);
  const indexRef = useRef(0);

  // Phrase rotation + shuffle
  useEffect(() => {
    const interval = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % phrases.length;
      const nextText = phrases[indexRef.current];
      shuffleText(nextText, setDisplayText);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center flex items-center justify-center h-[10rem] md:h-[18rem]">
      <h1
        className="uitexteffect-heading"
        style={{
          fontFamily: "Ht",
          fontWeight: "300",
          fontSize: "8vw",
          transition: "all 2s cubic-bezier(0.87, 0, 0.13, 1)",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        {displayText}
      </h1>
    </div>
  );
};

export default Uitexteffect;
