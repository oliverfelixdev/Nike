import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Newsslider from "./components/Newsslider";
import Blcollection from "./components/Blcollection";
import Trending from "./components/Trending";

const App = () => {
  return (
    <div className="bg-[var(--color-dark)] text-[var(--color-light)] min-h-screen w-full">
      <Navigation />
      <Home />
      <Newsslider />
      <Blcollection />
      <Trending />
    </div>
  );
};

export default App;
