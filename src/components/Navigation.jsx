import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="w-[78%] absolute z-30 top-0 text-[var(--color-light)] bg-zinc-500">
      <div className="w-full flex items-center justify-between px-8 py-8">
        <div className="w-72 flex items-center justify-between">
          <NavLink to="/" className="text-sm font-medium">
            <img src="./src/assets/images/nike.svg" alt="Nike Logo" />
          </NavLink>
          <div className="search_main">
            <div className="flex items-center justify-center gap-2 cursor-pointer">
              <img src="./src/assets/images/search.svg" alt="searc icon" />
              <span className="text-sm uppercase font-normal">Search</span>
            </div>
            <div className="searchQuery"></div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-10">
          <NavLink
            to="/shop"
            className={(e) =>
              [
                "text-sm font-normal",
                e.isActive ? "animate-pulse" : "text-sm font-medium uppercase",
              ].join(" ")
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/login"
            className={(e) =>
              [
                "text-sm font-normal",
                e.isActive ? "animate-pulse" : "text-sm font-medium uppercase",
              ].join(" ")
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/cart"
            className={(e) =>
              [
                "text-sm font-normal",
                e.isActive ? "animate-pulse" : "text-sm font-medium uppercase",
              ].join(" ")
            }
          >
            Cart/0
          </NavLink>
          <NavLink to="/sidebar" className="text-sm font-normal uppercase ml-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
