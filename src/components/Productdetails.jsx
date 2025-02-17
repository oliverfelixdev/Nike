import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../utils/axios";
import Loader from "./Loader";

const Productdetails = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  console.log(id);
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return product ? (
    <div className="max-w-4xl mx-auto p-6 bg-zinc-500 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src={product.image}
          alt="Nike Air Max"
          className="w-full rounded-lg shadow-lg"
        />
        <div>
          <h1 className="text-3xl font-bold">Nike Air Max</h1>
          <p className="text-gray-600 mt-2">
            Experience ultimate comfort and style with the Nike Air Max,
            featuring a sleek design and superior cushioning.
          </p>
          <p className="text-xl font-semibold mt-4">$199.99</p>
          <button className="mt-6 bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Productdetails;
