import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Routing from "./utils/Routing";
const App = () => {
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
      <Navigation />
      <Routing />
    </div>
  );
};

export default App;
