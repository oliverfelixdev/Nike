import { Link, useNavigate } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { motion } from "framer-motion";
import { IoSearchOutline } from "react-icons/io5";
import Button from "./Button";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [products] = useContext(ProductContext);
  let categories = products
    ? [...new Set(products.map((product) => product.category))]
    : [];

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isSidebarOpen ? "0%" : "100%" }}
      transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
      className="fixed top-0 right-0 z-[100] w-full sm:w-[400px] h-full bg-[var(--color-dark)] text-[var(--color-light)] overflow-auto shadow-lg p-6 flex flex-col"
    >
      <div className="flex items-center justify-between w-full pt-6 pb-4 relative">
        <Link
          onClick={() => setIsSidebarOpen(false)}
          to="/search"
          className="flex items-center justify-start subtitle-lg gap-1 py-1.5 pl-4 pr-32 rounded-full text-gray-400"
          style={{
            boxShadow: "#00000005 0px 1px 3px 0px, #80808030 0px 0px 0px 1px",
          }}
        >
          <span>
            <IoSearchOutline />
          </span>
          <span>Search</span>
        </Link>
        <button onClick={() => setIsSidebarOpen(false)}>
          <span>
            <CgClose />
          </span>
        </button>
      </div>

      {/* Main Links */}
      <nav className="mt-4 space-y-3 text-4xl leading-normal w-fit capitalize mb-5">
        <ul>
          <li>
            <Link
              to="/underwork"
              className="block"
              onClick={() => setIsSidebarOpen(false)}
            >
              New
            </Link>
          </li>
          {categories.map((category, index) => (
            <li key={index} onClick={() => setIsSidebarOpen(false)}>
              <Link to={`/shopall?category=${category}`} className="block">
                {category}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/signin"
              className="block"
              onClick={() => setIsSidebarOpen(false)}
            >
              Sign In
            </Link>
          </li>
        </ul>
      </nav>

      {/* Sections */}
      <div className="mt-auto pb-8">
        <div className="border-t border-[#ffffff35] pt-6 flex flex-col sm:flex-row gap-12">
          <div>
            <p className="text-xs uppercase text-gray-400 opacity-40">Stay</p>
            <ul className="mt-2 text-sm font-normal text-gray-400">
              {["Customer Service", "Order Status", "Return", "Shipping"].map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase text-gray-400 opacity-40">
              Discover
            </p>
            <ul className="mt-2 text-sm font-normal text-gray-400">
              {["About Nike", "Careers", "Sustainability"].map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#ffffff35] mt-6 pt-4 flex items-center justify-between text-sm text-gray-700">
          <div className="flex items-center gap-1 text-yellow-500">
            <span>⭐</span>
            <span className="text-gray-500">/ 20,230 reviews</span>
          </div>
          <a
            href="https://www.instagram.com/oliverfelix.dev/"
            target="_blank"
            className="text-gray-500"
          >
            Instagram
          </a>
        </div>
        <div className="border-t border-[#ffffff35] mt-6 pt-8 w-full">
          <Link
            to="/jordan"
            className="buttonMain"
            style={{
              width: "100%",
            }}
          >
            <div className="buttonMain-span buttonMain-span-1">
              <span>Ignite the flames</span>
            </div>
            <div className="buttonMain-span buttonMain-span-2">
              <span>Ignite the flames</span>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
export default Sidebar;
