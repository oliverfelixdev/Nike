import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Newsslider from "./components/Newsslider";
import Blcollection from "./components/Blcollection";
import Trending from "./components/Trending";
import Uitexteffect from "./components/Uitexteffect";
import Footer from "./components/Footer";
import { Outlet, Route, Routes } from "react-router-dom";
import Shopall from "./components/Shopall";
import Productdetails from "./components/Productdetails";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="bg-[var(--color-dark)] text-[var(--color-light)] min-h-screen w-full">
      <Navigation />
      {/* <Sidebar /> */}
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
