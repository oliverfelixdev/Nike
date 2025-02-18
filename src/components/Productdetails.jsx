import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../utils/axios";
import Loader from "./Loader";

const Productdetails = () => {
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

  useEffect(() => {
    console.log(product);
  }, [product]);

  if (!product) {
    return <Loader />;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 md:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="w-full overflow-hidden rounded-lg shadow-md">
          <img
            src={`/data/${product.image}`}
            alt={product.title}
            className="w-full h-auto object-cover object-center transition-transform duration-300 hover:scale-105"
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
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            <span className="font-semibold">Category:</span> {product.category}
          </p>

          {/* Display Rating */}
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            <span className="font-semibold">Rating:</span> {product.rating}/5
          </p>

          {/* Display Colors */}
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            <span className="font-semibold">Colors:</span>{" "}
            {product.colors.join(", ")}
          </p>

          {/* Display Price */}
          <p className="text-xl font-semibold text-gray-800 mt-4">
            ${product.price}
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
            className="mt-6 bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300"
            disabled={product.stockStatus !== "inStock"}
          >
            {product.stockStatus === "inStock" ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;
