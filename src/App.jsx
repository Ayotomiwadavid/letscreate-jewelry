import React, { useContext, useEffect } from "react";
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
import { AuthStatus } from "./Context/Usecontext";
import { getCurrentUser } from "./Controller";
import ProtectedRoute from "./Context/ProtectedRoute";
import Thankyou from "./components/_root/CheckOut/Thankyou";
import BlogPage from "./components/_root/Blog/Index";
import Blogdetails from "./components/_root/Blog/Blogdetails";
import PaymentError from "./components/_root/CheckOut/Error";

function App() {
  // const appContext = useContext(AuthStatus);
  // const { user, setUser, setAuthStatusValue } = appContext;

  // const fetchUser = async () => {
  //   try {
  //     const userData = await getCurrentUser();
  //     if (userData) {
  //       setUser(userData);
  //       setAuthStatusValue(true);
  //     } else {
  //       setAuthStatusValue(false);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching user:", error);
  //     setUser(null);
  //     setAuthStatusValue(false)
  //   }
  // };

  // useEffect(() => {
  //   fetchUser();
  // }, []);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut/>}/>
        <Route path="/thank-you" element={<Thankyou />}/>
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/payment-error" element={<PaymentError />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/blogdetails/:blogslug"  element={<Blogdetails />}/>
      </Routes>
    </>
  );
}

export default App;
