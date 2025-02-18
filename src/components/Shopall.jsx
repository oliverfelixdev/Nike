import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "../utils/axios";
import { ProductContext } from "../utils/Context";
import Loader from "./Loader";

const Shopall = () => {
  const [products] = useContext(ProductContext);

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

  return products && filteredProducts ? (
    <div className="shopall h-full w-full pt-px">
      <div className="shopall-wrap w-full">
        <div className="shopall-cards mt-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-7 p-4">
          {filteredProducts &&
            filteredProducts.map((prdcts, index) => (
              <Link
                key={index}
                to={`/productdetails/${prdcts.id}`}
                className="shopall-card w-full sm:w-72"
              >
                <article className="group bg-white shadow-sm rounded-lg overflow-hidden">
                  <div className="w-full overflow-hidden">
                    <img
                      src={`/data/${prdcts.image}`}
                      alt="Not Found"
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
    </div>
  ) : (
    <Loader />
  );
};

export default Shopall;
