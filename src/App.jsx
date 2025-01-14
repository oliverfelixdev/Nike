import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div>
      <Navigation />
      <Sidebar />
      {/* <Home /> */}
    </div>
  );
};

export default App;
