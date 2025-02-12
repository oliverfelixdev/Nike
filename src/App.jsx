import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="bg-[var(--color-dark)] text-[var(--color-light)] min-h-screen w-full">
      <Navigation />
      <Home />
    </div>
  );
};

export default App;
