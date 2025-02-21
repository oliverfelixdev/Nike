import React, { useEffect, useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
const Newsslider = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return (
    <div className="newsslider relative w-full flex items-start justify-between px-4 sm:px-8 py-10 sm:pt-20 overflow-hidden">
      <div className="text-5xl font-semibold hidden sm:inline-block">02</div>
      <div className="w-[80%] flex items-center sm:items-start justify-between">
        <h2 className="text-9xl sm:text-[11rem] font-[FG] leading-[.55]">01</h2>
        <p className="hidden sm:flex text-[0.60rem] items-start justify-start flex-col">
          <span>
            NIKE BLACK <br /> PEGASUS 40
          </span>
          <span>ON APRIL 2023</span>
          <span>
            DETAILS <br /> RUNNING HALF WAY <br />3 COLORS ⇾
          </span>
          <span>NIKE PEGASUS</span>
        </p>
        <p className="flex text-[0.60rem] items-start justify-start flex-col">
          <span>ROAD RUNNING</span>
          <span>ZOOM AIR UNITS REACT</span>
          <span>FOAM ⁕ NIKE</span>
          <span>{formattedTime}</span>
        </p>
        <span className="hidden md:block">
          <Button text="Jordan" linkroute="/jordan" />
        </span>
      </div>
    </div>
  );
};

export default Newsslider;
