import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Newsslider from "./components/Newsslider";
import Sowin from "./components/Sowin";

const App = () => {
  return (
    <div className="bg-[var(--color-dark)] text-[var(--color-light)] min-h-screen w-full">
      <Navigation />
      <Home />
      <Sowin />
      {/* <Newsslider /> */}
    </div>
  );
};

export default App;
