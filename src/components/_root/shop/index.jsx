import React from "react";
import Navbar from "../../shared/Navbar";
import Shop_Hero from "../../shared/hero/hero";
import ProductListing from "./productListing";
import Footer from "../../shared/Footer";

export default function CartPage() {
  return (
    <div>
      <Navbar />
      <Shop_Hero title="Shop" />
      <ProductListing />
      <Footer />
    </div>
  );
}
