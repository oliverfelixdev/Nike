import React, { useEffect, useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Routing from "./utils/Routing";
const App = () => {
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNavVisible(true);
    }, 2500);

    return () => clearTimeout(timer);
  });

  return (
    <div
      onContextMenu={(e) => e.preventDefault()}
      style={{
        backgroundColor: "var(--color-dark)",
        color: "var(--color-light)",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <div
        className={`nav-father transition-opacity duration-1000 ease-in-out ${
          navVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navigation />
      </div>
      <Routing />
    </div>
  );
};

export default App;
