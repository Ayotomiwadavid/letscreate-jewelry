import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/Auths/signin";
import SignUp from "./components/Auths/signup";
import Home from "./components/_root/home/index";
import Cart from "./components/_root/cart/index";
import CheckOut from "./components/_root/CheckOut/index";
import Contact from "./components/_root/Contact/index";
import Shop from "./components/_root/shop/index";
import ProductDetail from "./components/_root/productDetail/index";
import ScrollToTop from "./BackToTop/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
