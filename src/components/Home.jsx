import React, { useMemo } from "react";
import Button from "./Button";
import Shoemodel from "../utils/Shoemodel";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-content">
          <div className="home-content-wrap">
            <h1 className="home-title">NIKE, JUST DO IT!</h1>
            <p className="home-description subtitle-lg">
              They'll talk whether you win or lose. So leave 'em speechless.
            </p>
            <p className="home-description subtitle-lg mb-2 sm:block hidden">
              They'll talk whether you rise or fall. So leave 'em breathless.
            </p>
            <Button text="Shop Products" linkroute={"/shopall"} />
          </div>
        </div>
      </div>
      {/* <Shoemodel /> */}
    </div>
  );
};

export default Home;
