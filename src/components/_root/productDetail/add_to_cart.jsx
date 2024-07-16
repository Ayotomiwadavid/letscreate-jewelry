import React from "react";
import addToCart from "../../../utils/Products/AddToCart";
export default function CartPage({ product, quantity }) {
  const handleClick = () => {
    // Create an object containing both product data and quantity
    const productWithQuantity = {
      ...product,
      quantity: quantity,
    };
    addToCart(productWithQuantity);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="px-5 py-2.5 bg-white rounded-[5px] border border-primary justify-start items-start gap-2.5 flex hover:bg-primary transition-all duration-300 group"
      >
        <div className="text-black text-xs font-bold font-['Raleway'] capitalize group-hover:text-white">
          Add to cart
        </div>
      </button>
    </div>
  );
}
