import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loader from "./Loader";
import { motion } from "framer-motion";
import Lazyload from "../utils/Lazyload";

const Shopall = () => {
  const [products] = useContext(ProductContext);

  const navigate = useNavigate(-1);
  const [visible, setVisible] = useState(true);

  const { search } = useLocation();
  const category = search.includes("=")
    ? decodeURIComponent(search.split("=")[1])
    : null;

  const [filteredProducts, setfilteredProducts] = useState(products);

  useEffect(() => {
    if (!products) return;
    if (!category) {
      setfilteredProducts(products);
    } else {
      setfilteredProducts(products.filter((p) => p.category === category));
    }
  }, [products, category]);

  console.log(filteredProducts);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return products && filteredProducts ? (
    <div className="shopall h-full w-full pt-px bg-zinc-50">
      <div className="shopall-wrap w-full">
        <div className="shopall-cards mt-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-7 p-4">
          {filteredProducts &&
            filteredProducts.map((prdcts, index) => (
              <Link
                key={index}
                to={`/shopall/productdetails/${prdcts.id}`}
                className="shopall-card w-full sm:w-72"
              >
                <article className="group bg-[var(--color-light)] shadow-sm rounded-lg overflow-hidden">
                  <div className="w-full overflow-hidden">
                    <Lazyload
                      src={`/data/${prdcts.image}`}
                      type="image"
                      alt={prdcts.title}
                      className="object-cover object-center w-full grayscale-[0.1] group-hover:grayscale-0 h-full rounded-md group-hover:scale-105 transition-all"
                    />
                  </div>
                  <div className="p-6 text-[var(--color-dark)]">
                    <h3 className="font-semibold truncate">{prdcts.title}</h3>
                    <p className="text-gray-600 text-sm truncate">
                      {prdcts.description.slice(0, 100)}...
                    </p>
                    <div className="text-right mt-4">
                      <span className="font-semibold">${prdcts.price}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
        </div>
      </div>
      <motion.div
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="navigati-badge text-xs py-2 px-4 rounded-[0.25rem] bg-[var(--color-dark)] text-[var(--color-light)] cursor-pointer fixed bottom-4 right-4 hover:scale-90"
        style={{
          transition: "all 0.6s cubic-bezier(0.83, 0, 0.17, 1)",
        }}
        onClick={() => navigate(-1)}
      >
        Go Back
      </motion.div>
    </div>
  ) : (
    <Loader />
  );
};

export default Shopall;
