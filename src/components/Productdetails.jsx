import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import axios from "../utils/axios";
import Loader from "./Loader";

const Productdetails = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const getSingleProduct = async () => {
    try {
      const response = await axios.get("/data/nikedata.json");
      const singleProduct = response.data.find(
        (item) => item.id === Number(id)
      );
      if (singleProduct) {
        setProduct(singleProduct);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  if (!product) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-4">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 relative mt-20">
        <div className="w-full overflow-hidden rounded-lg shadow-md inverted-radius">
          <img
            src={`/data/${product.image}`}
            alt={product.title}
            className="w-full h-auto object-cover object-center transition-transform duration-300 "
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            {product.title}
          </h1>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            {product.description}
          </p>

          {/* Display Category */}
          <p className="text-gray-600 mt-2 text-sm md:text-base capitalize">
            <span className="font-semibold">Category:</span> {product.category}
          </p>

          {/* Display Rating */}
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            <span className="font-semibold">Rating:</span> {product.rating}
          </p>

          {/* Display Price */}
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            <span className="font-semibold">Price:</span> ${product.price}
          </p>

          {/* Display Colors */}
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            <span className="font-semibold">Colors:</span>{" "}
            {product.colors.join(", ")}
          </p>

          {/* Display Stock Status */}
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            <span className="font-semibold">Stock Status:</span>{" "}
            {product.stockStatus === "In Stock" ? (
              <span className="text-green-600">In Stock</span>
            ) : (
              <span className="text-red-600">Out of Stock</span>
            )}
          </p>

          {/* Add to Cart Button */}
          <button
            className={`buttonMain mt-6 w-fit ${
              product.stockStatus === "out of stock" &&
              "pointer-events-none opacity-50"
            }`}
            style={{
              backgroundColor: "#151516",
              color: "#fcfcfc",
            }}
            disabled={product.stockStatus !== "In Stock"}
          >
            <div className="buttonMain-span buttonMain-span-1">
              <span>
                {product.stockStatus === "In Stock"
                  ? "Add to Cart"
                  : "Out Of Stock"}
              </span>
            </div>
            <div className="buttonMain-span buttonMain-span-2">
              <span>
                {product.stockStatus === "In Stock"
                  ? "Add to Cart"
                  : "Out Of Stock"}
              </span>
            </div>
          </button>
        </div>
        <button
          onClick={() => navigate(-1)}
          style={{
            transition: "0.6s cubic-bezier(0.83, 0, 0.17, 1)",
          }}
          className="text-[var(--color-light)] bg-[var(--color-dark)] p-1.5 md:rounded-[0.25rem] rounded-[0.25rem] rounded-bl-lg text-sm md:text-base absolute top-0 right-0 hover:scale-90 icon-close-container "
        >
          <span className="close-icon">
            <CgClose />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Productdetails;
