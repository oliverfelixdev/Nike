import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { motion, useScroll } from "framer-motion";
import Sidebar from "./Sidebar";
import nikeImage from "../assets/images/nike.svg";
import jordanImage from "../assets/images/jordan.svg";
import { ProductContext } from "../utils/Context";

const Navigation = () => {
  const location = useLocation();
  const [products] = useContext(ProductContext);
  const isShopPage = location.pathname.includes("shopall");

  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(scrollY.get() <= lastScrollY);
      setLastScrollY(scrollY.get());
    };
    const unsubscribe = scrollY.on("change", handleScroll);
    return () => unsubscribe();
  }, [scrollY, lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
  }, [isSidebarOpen]);

  let filterCatgs = products?.reduce((acc, cv) => [...acc, cv.category], []);
  filterCatgs = [...new Set(filterCatgs)];

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : "-100%" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="navigation"
        style={{
          backgroundColor: isShopPage ? "#fcfcfc" : "#151516",
          color: isShopPage ? "#151516" : "#fcfcfc",
        }}
      >
        <div className="navigation-top">
          <Link to="/jordan">
            <img
              src={jordanImage}
              alt="Jordan Logo"
              style={{ filter: isShopPage ? "invert(1)" : "invert(0)" }}
            />
          </Link>
          <div className="link-container">
            {["Find a Store", "Help", "Join Us", "Sign In"].map(
              (item, index) => (
                <a key={index} className="subtitle-sm" href="#">
                  {item}
                </a>
              )
            )}
          </div>
        </div>
        <div className="navigation-primary">
          <Link to="/">
            <img
              src={nikeImage}
              alt="Nike Logo"
              style={{ filter: isShopPage ? "invert(1)" : "invert(0)" }}
            />
          </Link>
          <div className="link-container">
            <NavLink to="/underwork" className="subtitle-lg capitalize">
              <span>New</span>
            </NavLink>
            {filterCatgs.map((category, index) => (
              <NavLink
                key={index}
                className="subtitle-lg capitalize"
                to={`/shopall?category=${category}`}
              >
                <span>{category}</span>
              </NavLink>
            ))}
            <NavLink to="/jordan" className="subtitle-lg capitalize">
              <span>Jordan</span>
            </NavLink>
          </div>
          <div className="navigation-functional flex items-center justify-start gap-[1.6rem]">
            <div className="navigation-functional-visible-link flex items-center justify-start gap-[1.6rem]">
              <Link
                to="/search"
                className="flex items-center justify-start subtitle-lg gap-1"
              >
                <span>
                  <IoSearchOutline />
                </span>
                <span>Search</span>
              </Link>
              <Link to="/cart" className="subtitle-lg">
                <span>Sign In</span>
              </Link>
            </div>
            <span className="md:block hidden">
              <IoCartOutline />
            </span>
            <span className="md:block hidden">
              <MdFavoriteBorder />
            </span>
            <button
              className="md:hidden block text-sm py-1.5 px-4 rounded-[0.25rem]"
              style={{
                backgroundColor: isShopPage ? "#151516" : "#fcfcfc",
                color: isShopPage ? "#fcfcfc" : "#151516",
              }}
              onClick={() => setIsSidebarOpen(true)}
            >
              Menu
            </button>
          </div>
        </div>
      </motion.nav>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </>
  );
};

export default Navigation;
