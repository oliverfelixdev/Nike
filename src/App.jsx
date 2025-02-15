import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Newsslider from "./components/Newsslider";
import Blcollection from "./components/Blcollection";
import Trending from "./components/Trending";
import Uitexteffect from "./components/Uitexteffect";
import Footer from "./components/Footer";
import Underwork from "./components/Underwork";

const App = () => {
  return (
    <div className="bg-[var(--color-dark)] text-[var(--color-light)] min-h-screen w-full">
      <Navigation />
      <Home />
      <Newsslider />
      <Blcollection />
      <Trending />
      <Uitexteffect />
      <Footer />
    </div>
  );
};

export default App;
