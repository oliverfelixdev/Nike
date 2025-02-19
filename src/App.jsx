import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Newsslider from "./components/Newsslider";
import Blcollection from "./components/Blcollection";
import Trending from "./components/Trending";
import Uitexteffect from "./components/Uitexteffect";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Shopall from "./components/Shopall";
import Productdetails from "./components/Productdetails";

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "var(--color-dark)",
        color: "var(--color-light)",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Newsslider />
              <Blcollection />
              <Trending />
              <Uitexteffect />
              <Footer />
            </>
          }
        />
        <Route path="/shopall" element={<Shopall />} />
        <Route
          path="/shopall/productdetails/:id"
          element={<Productdetails />}
        />
      </Routes>
    </div>
  );
};

export default App;
