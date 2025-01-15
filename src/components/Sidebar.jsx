import React, { useRef } from "react";

import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import ButtonRipple from "./ButtonRipple";

const Sidebar = () => {
  const sideData = () => [
    {
      heading: "Your Account",
      description:
        "We design and produce our footwear in-house, ensuring the highest quality and innovation in every pair.",
      buttonRegister: "register",
      buttonLogin: "Login",
    },
    {
      heading: "Store",
      description:
        "We design and curate our collection in-house, guaranteeing the highest quality and performance in every product.",
      button: "Go to Store",
    },
  ];
  return (
    <div className="sidebar">
      <div className="sdFirst">
        <div className="closeSec flex items-center justify-center">
          <Link
            className="block p-10 rounded-full border opacity-50 hover:opacity-100 transition-opacity"
            to="/"
          >
            <span className="text-3xl">
              <IoMdClose />
            </span>
          </Link>
        </div>
        <div className="flex items-start justify-center flex-col pt-10">
          <div>
            <h2 className="text-sm text-white opacity-50">Catalog</h2>
            <ul className="space-y-4 mt-4">
              <li>
                <Link to="/newfeatured" className="text-white text-4xl">
                  New & Featured
                </Link>
              </li>
              <li>
                <Link to="/shoes" className="text-white text-4xl">
                  Shoes
                </Link>
              </li>
              <li>
                <Link to="/clothing" className="text-white text-4xl">
                  Clothing
                </Link>
              </li>
              <li>
                <Link to="/running" className="text-white text-4xl">
                  Shop Running
                </Link>
              </li>
              <li>
                <Link to="/kids" className="text-white text-4xl">
                  Kids'
                </Link>
              </li>
              <li>
                <Link to="/snkrs" className="text-white text-4xl">
                  SNKRS
                </Link>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-20 mt-14">
            <div>
              <ul className="space-y-2">
                <li>
                  <Link to="/trending" className="text-white text-md">
                    Trending
                  </Link>
                </li>
                <li>
                  <Link to="/sale" className="text-white text-md">
                    Sale
                  </Link>
                </li>
                <li>
                  <Link to="/shopbysport" className="text-white text-md">
                    Shop by Sport
                  </Link>
                </li>
                <li>
                  <Link to="/jordan" className="text-white text-md">
                    Jordan
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/pageUnderProcessing"
                    className="text-white text-md"
                  >
                    Find a Store
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="text-white text-md">
                    Become a Member
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="text-white text-md">
                    Send Us Feedback
                  </Link>
                </li>
                <li>
                  <Link to="/help" className="text-white text-md">
                    Get Help
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/pageUnderProcessing"
                    className="text-white text-md"
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link to="/help" className="text-white text-md">
                    Carrers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="sdSecond bg-zinc-100">
        <div className="registerSec flex items-start justify-center flex-col bg-zinc-300 ">
          <h3 className="text-2xl">Your Account</h3>
          <p className="text-sm">
            We design and accurate our collection in-house, guaranteeing the
            highest quality and performance in every product.
          </p>
          <div className="buttondSec flex items-center justify-start  w-full">
            <ButtonRipple >Hello</ButtonRipple>
            <Link className="text-sm" to="/">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
