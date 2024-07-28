import React from "react";
import { useNavigate } from "react-router-dom";

export default function productCard({ product, sold }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white text-left rounded-lg p-3 justify-center items-center cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
      onClick={() => navigate(`/products/${product.id}`)}
    >
      <div className="relative overflow-hidden w-full h-48 mx-auto mb-4">
        <img
          className="absolute object-contain w-full sm:w-64 md:w-full h-full"
          src={product.image[0]}
          alt=""
        />
      </div>
      <div className="text-left">
        <p className="text-gray-300 text-lg"><span className="text-primary">${Number(product.price)}</span></p>
        <h1 className="text-sm truncate font-semibold text-gray-800">
          {product.title}
        </h1>
        <p className="text-sm text-gray-500 truncate">{product.description}</p>
        <p className="text-gray-700 text-base font-light">{product.Tags}</p>
      </div>
    </div>
  );
}
