import React from "react";
import { Link } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
const Navigation = () => {
  const linksFetch = [
    { link: "New", toward: "/newarrivals" },
    { link: "Men", toward: "/newarrivals" },
    { link: "Women", toward: "/newarrivals" },
    { link: "Kids", toward: "/newarrivals" },
    { link: "Jordan", toward: "/newarrivals" },
  ];

  return (
    <div className="navigation">
      <div className="navigation-top">
        <Link to="/jordan">
          <img src="./src/assets/images/jordan.svg" alt="Not Found" />
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
          <img src="./src/assets/images/nike.svg" alt="not found" />
        </Link>
        <div className="link-container">
          {linksFetch.map((item, index) => (
            <Link key={index} className="subtitle-lg" to={item.toward}>
              {item.link}
            </Link>
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
    </div>
  );
};

export default Navigation;
