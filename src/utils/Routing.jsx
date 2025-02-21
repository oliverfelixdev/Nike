import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Newsslider from "../components/Newsslider";
import Blcollection from "../components/Blcollection";
import Trending from "../components/Trending";
import Uitexteffect from "../components/Uitexteffect";
import Footer from "../components/Footer";
import Shopall from "../components/Shopall";
import Productdetails from "../components/Productdetails";
import Search from "../utils/Search";
import Signin from "../components/Signin";
import Underwork from "../components/Underwork";
const Routing = () => {
  return (
    <div>
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
        <Route path="/search" element={<Search />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/underwork" element={<Underwork />} />
      </Routes>
    </div>
  );
};

export default Routing;
