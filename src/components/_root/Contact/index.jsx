import React from "react";
import ContactHero from "../../shared/hero/hero";
import Navbar from "../../shared/Navbar";
import Address from "./address";
import MessageBox from "./messageBox";
import Footer from "../../shared/Footer";

export default function ContactPage() {
  return (
    <div className="">
      <Navbar />
      <ContactHero title={"Contact Us"}/>
      <Address />
      <MessageBox />
      <Footer />
    </div>
  );
}
