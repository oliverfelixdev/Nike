import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";

const phrases = [
  "Under Construction",
  "Code Solutions",
  "By O. Felix",
  "Dev in Progress",
];

const specialChars = "$3●#&*@◼!?";

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

const Underwork = () => {
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
    <div className="h-screen w-full">
      <div className="flex items-center justify-center h-full w-full">
        <div className="text-content flex items-center justify-center flex-col">
          <h1
            className="underwork-title"
            style={{
              fontFamily: "Ht",
              fontWeight: "300",
              fontSize: "5vw",
              transition: "all 2s cubic-bezier(0.87, 0, 0.13, 1)",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            {displayText}
          </h1>
          <div className="mt-5 w-full flex items-center justify-center">
            <Button
              text="Learn More"
              linkroute="https://github.com/oliverfelixdev/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Underwork;
