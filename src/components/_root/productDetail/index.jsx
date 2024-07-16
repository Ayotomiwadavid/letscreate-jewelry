import React from "react";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import ProductDisplay from "./product_display";
export default function CartPage() {
  return (
    <div>
      <Navbar />
      <ProductDisplay />
      <Footer />
    </div>
  );
}
