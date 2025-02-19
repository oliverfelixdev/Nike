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
  const [products] = useContext(ProductContext);
  const location = useLocation();
  const isShopPage = location.pathname.includes("shopall");
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY.get() > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(scrollY.get());
    };
    const unsubscribe = scrollY.on("change", handleScroll);

    return () => unsubscribe();
  }, [scrollY, lastScrollY]);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSidebarOpen]);

  let filterCatgs =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  filterCatgs = [...new Set(filterCatgs)];
  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : "-100%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="navigation"
        style={{
          backgroundColor: isShopPage ? "#fcfcfc" : "#151516",
          color: isShopPage ? "#151516" : "#fcfcfc",
          boxShadow: isShopPage
            ? "#00000005 0px 1px 3px 0px, #00000010 0px 0px 0px 1px"
            : "#00000005 0px 1px 3px 0px, #f4f4f00 0px 0px 0px 1px",
        }}
      >
        <div className="navigation-top">
          <Link to="/jordan">
            <img
              src={jordanImage}
              alt="Not Found"
              style={{
                filter: isShopPage ? "invert(1)" : "invert(0)",
              }}
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
              alt="not found"
              style={{
                filter: isShopPage ? "invert(1)" : "invert(0)",
              }}
            />
          </Link>
          <div className="link-container">
            <NavLink
              to="/underwork"
              className="subtitle-lg capitalize"
              style={(e) => ({
                borderBottom: e.isActive ? "1.4px solid #fff" : "initial",
              })}
            >
              <span>New</span>
            </NavLink>
            {filterCatgs.map((category, index) => (
              <NavLink
                key={index}
                className="subtitle-lg capitalize"
                to={`/shopall?category=${category}`}
                style={() => ({
                  borderBottom:
                    location.search === `?category=${category}`
                      ? "1.4px solid #fff"
                      : "initial",
                })}
              >
                <span>{category}</span>
              </NavLink>
            ))}
            <NavLink
              to="/jordan"
              className="subtitle-lg capitalize"
              style={(e) => ({
                borderBottom: e.isActive ? "1.4px solid #fff" : "initial",
              })}
            >
              <span>Jordan</span>
            </NavLink>
          </div>
          <div className="navigation-functional flex items-center justify-center gap-4">
            <div
              className="search-wrap flex items-center justify-center gap-1 pl-3 py-px rounded-full overflow-hidden"
              style={{
                boxShadow: isShopPage
                  ? "#00000005 0px 1px 3px 0px, #00000035 0px 0px 0px 1px"
                  : "#00000005 0px 1px 3px 0px, #f4f4f535 0px 0px 0px 1px",
              }}
            >
              <span>
                <IoSearchOutline />
              </span>
              <input
                type="search"
                placeholder="Search"
                id="searchbar"
                className="rounded-full w-32 px-2 text-sm py-1.5 bg-transparent focus:outline-none"
              />
            </div>
            <span className="md:block hidden">
              <MdFavoriteBorder />
            </span>
            <span className="md:block hidden">
              <IoCartOutline />
            </span>
            <button
              className="md:hidden block text-sm py-1.5 px-4 bg-[var(--color-light)] text-[var(--color-dark)] rounded-[0.25rem]"
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
