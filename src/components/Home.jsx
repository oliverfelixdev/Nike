import React, { lazy, Suspense, useState, useEffect } from "react";
import Button from "./Button";
const Shoemodel = lazy(() => import("../utils/Shoemodel"));
import { motion } from "framer-motion";

const Home = () => {
  const [showModel, setShowModel] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModel(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home">
      <div className="home-container">
        <div className="home-content">
          <div className="home-content-wrap">
            <h1 className="home-title">
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0", opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                NIKE, JUST DO IT!
              </motion.span>
            </h1>
            <motion.p
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
              className="home-description subtitle-lg"
            >
              They'll talk whether you win or lose. So leave 'em speechless.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 2, ease: [0.16, 1, 0.3, 1] }}
              className="home-description subtitle-lg mb-2 sm:block hidden"
            >
              They'll talk whether you rise or fall. So leave 'em breathless.
            </motion.p>
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 2,
                delay: 2,
                ease: [0.87, 0, 0.13, 1],
              }}
              className="block w-fit"
            >
              <Button text="Shop Products" linkroute={"/shopall"} />
            </motion.span>
          </div>
        </div>
      </div>
      {showModel && (
        <Suspense fallback={<div className="loading">Loading Model...</div>}>
          <Shoemodel />
        </Suspense>
      )}
    </div>
  );
};

export default Home;
