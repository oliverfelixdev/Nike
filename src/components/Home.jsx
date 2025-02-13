import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Shoemodel from "./Shoemodel";

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
            <Link to="/newarrivals">
              <Button />
            </Link>
          </div>
        </div>
      </div>
      {/*       <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/c2430c200355795.6660da54a5778.jpg"
        alt="Not Found"
      /> */}
      <Shoemodel />
    </div>
  );
};

export default Home;
