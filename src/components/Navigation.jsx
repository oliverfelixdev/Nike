import React, { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import nikeImage from "../assets/images/nike.svg";
import jordanImage from "../assets/images/jordan.svg";
import { ProductContext } from "../utils/Context";

const Navigation = () => {
  const [products] = useContext(ProductContext);
  const location  = useLocation();
  let filterCatgs =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  filterCatgs = [...new Set(filterCatgs)];

  console.log(filterCatgs);

  return (
    <nav className="navigation">
      <div className="navigation-top">
        <Link to="/jordan">
          <img src={jordanImage} alt="Not Found" />
        </Link>
        <div className="link-container">
          {["Find a Store", "Help", "Join Us", "Sign In"].map((item, index) => (
            <a key={index} className="subtitle-sm" href="#">
              {item}
            </a>
          ))}
        </div>
      </div>
      <div className="navigation-primary">
        <Link to="/">
          <img src={nikeImage} alt="not found" />
        </Link>
        <div className="link-container">
          {filterCatgs.map((category, index) => (
            <NavLink
              key={index}
              className="subtitle-lg capitalize"
              to={`/shopall?category=${category}`}
              style={() => ({
                textDecoration:
                  location.search === `?category=${category}`
                    ? "underline"
                    : "initial",
              })}
            >
              <span>{category}</span>
            </NavLink>
          ))}
        </div>
        <div className="navigation-functional flex items-center justify-center gap-4">
          <div className="search-wrap flex items-center justify-center gap-1 bg-zinc-900 pl-3 py-px rounded-full overflow-hidden">
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
          <Link
            to="/sidebar"
            className="md:hidden block text-sm py-1.5 px-4 bg-[var(--color-light)] text-[var(--color-dark)] rounded-full"
          >
            Menu
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
