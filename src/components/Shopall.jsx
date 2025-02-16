import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loader from "./Loader";

const Shopall = () => {
  const [products] = useContext(ProductContext);
  console.log(products)
  return products ? (
    <div className="shopall h-screen bg-zinc-400 w-full flex items-start justify-start flex-wrap overflow-y-auto overflow-x-hidden">
      <div className="shopall-wrap w-full bg-zinc-700">
        <div className="shopall-cards mt-32 flex items-center justify-center gap-2 flex-wrap overflow-y-auto overflow-x-hidden">
          {products.map((prdcts, index) => (
            <Link
              key={index}
              to="/productdetails/1"
              className="shopall-card h-80 w-60 rounded-md overflow-hidden p-2 bg-zinc-300"
            >
              <div className="h-56 w-full rounded bg-slate-400 overflow-hidden">
                <img
                  src={`/data/${prdcts.image}`}
                  className="h-full w-full object-cover"
                  alt=""
                />
              </div>
              <div className="pt-3 text-sm text-gray-700">
                Product Name
                <span className="float-right text-xs text-gray-400">Price</span>
                <span className="float-right text-xs text-gray-400">
                  Rating
                </span>
              </div>
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
