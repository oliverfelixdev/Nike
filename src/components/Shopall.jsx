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

  const getProductsCategory = async () => {
    if (!category) return;

    try {
      const { data } = await axios.get(`/products/category/${category}`);
      if (data.length > 0) {
        setfilteredProducts(data);
      } else {
        setfilteredProducts(products);
      }
    } catch (error) {
      console.error(error);
      setfilteredProducts(products);
    }
  };

  useEffect(() => {
    if (!category) setfilteredProducts(products);
    else {
      getProductsCategory();
    }
  }, [products, category]);

  console.log(filteredProducts);

  return products ? (
    <div className="shopall h-full w-full pt-px">
      <div className="shopall-wrap w-full">
        <div className="shopall-cards mt-32 grid grid-cols-4 grid-flow-dense justify-items-center gap-2 overflow-y-auto overflow-x-hidden">
          {filteredProducts &&
            filteredProducts.map((prdcts, index) => (
              <Link
                key={index}
                to={`/productdetails/${prdcts.id}`}
                className="shopall-card"
              >
                <article className="group bg-flex flex-col sm:w-64 w-1/4 bg-white shadow-sm rounded-lg overflow-hidden hover:shadow-xl hover:shadow-gray-900 transition-all">
                  <div className="sm:w-64 w-1/4 overflow-hidden">
                    <img
                      // src={prdcts.imagePath}
                      src={`/data/images/${prdcts.imagePath}`}
                      alt="Not Found"
                      className="object-cover object-center w-full grayscale-[0.1] group-hover:grayscale-0 h-full rounded-md group-hover:scale-105 transition-all"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold truncate text-black">
                      {prdcts.name}
                    </h3>
                    <p className="text-gray-600 text-sm truncate">
                      {prdcts.description.slice(0, 100)}...
                    </p>
                    <div className="text-right mt-4">
                      <span className="font-semibold text-black">
                        ${prdcts.price}
                      </span>
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
