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
import Loader from "./components/Loader";

const App = () => {
  return (
    <div className="bg-[var(--color-dark)] text-[var(--color-light)] min-h-screen w-full">
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopall" element={<Shopall />} />
        <Route path="/productdetails/:id" element={<Productdetails />} />
      </Routes>

      {/* <Newsslider />
      <Blcollection />
      <Trending />
      <Uitexteffect />
      <Footer /> */}
    </div>
  );
};

export default App;
