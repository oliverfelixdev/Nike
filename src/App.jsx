import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import ButtonRipple from "./components/ButtonRipple";

const App = () => {
  return (
    <div>
      {/* <Navigation /> */}
      {/* <Sidebar /> */}
      <Home />
      <ButtonRipple />
    </div>
  );
};

export default App;
