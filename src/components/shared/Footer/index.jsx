import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Social from "./newsletter";

function Footer() {
  return (
    <>
      {/* <Social /> */}
      <div className="bg-gray-100">
        <div className="flex flex-col md:flex-row px-3 md:px-12 py-4 border-b border-primary items-start justify-between">
          <div>
            <span className="text-black text-xl font-bold font-['Lato']">
              Hours
            </span>
            <span className="text-black text-xl font-normal font-['Lato']">
              : 9.30am-6.30pm Monday to Friday
            </span>
          </div>
          <img
            className="w-[300px] h-[30px]"
            src="/assets/imgs/payment-1.png"
          />
        </div>

        <footer className="text-gray-600 body-font">
          <div className="px-3 md:px-12 py-12 gap-5 mx-auto">
            <div className="flex flex-row mb-6 justify-between items-center">
              <div className="flex flex-col lg:ml-0">
                <span className="text-black text-[15px] font-normal font-['Lato']">
                  Do You Need Help ?<br />
                </span>
                <span className="text-black text-2xl font-normal font-['Lato']">
                  +1 (587) 227-2013
                </span>
              </div>

              {/* Logo */}
              <div className="md:flex hidden ml-auto">
                <Link to={"/home"} className="flex">
                  <img src="/assets/logo.svg" className="flex " />
                </Link>
              </div>

              <div className="ml-auto flex px-4 pt-3 pb-2 text-[20px] items-center justify-center gap-4 rounded-md">
                <a href="https://www.facebook.com/profile.php?id=61564128695078" target="_blank" className="">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
                <a href="https://www.instagram.com/letscreatejewelers/" target="_blank" className="">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center md:justify-between">
              <div className="flex flex-col gap-2 w-[300px]">
                <span className="text-black text-xl font-bold font-['Cormorant']">
                  Contact Us
                </span>
                <span className="text-black text-[15px] font-bold font-['Cormorant']">
                  Head Office:{" "}
                  <span className="font-normal">
                  3 Hampshire Close NW, Calgary, Alberta, T2A, 3X9
                  </span>
                </span>
                <span className="text-black text-[15px] font-bold font-['Cormorant']">
                  E-mail:{" "}
                  <span className="font-normal">letscreate.marketing@gmail.com</span>
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-black text-xl font-bold font-['Cormorant']">
                  Our Company
                </span>
                <span className="text-black text-[15px] font-normal font-['Cormorant']">
                  About Us
                </span>
                <span className="text-black text-[15px] font-normal font-['Cormorant']">
                  FAQs
                </span>
                <span className="text-black text-[15px] font-normal font-['Cormorant']">
                  Our Producers
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-black text-xl font-bold font-['Cormorant']">
                  Customer Services
                </span>
                <span className="text-black text-[15px] font-normal font-['Cormorant']">
                  Track Your Order
                </span>
                <span className="text-black text-[15px] font-normal font-['Cormorant']">
                  Contact Us
                </span>
                <span className="text-black text-[15px] font-normal font-['Cormorant']">
                  Term Of Use
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-black text-xl font-bold font-['Cormorant']">
                  Our Category
                </span>
                <span className="text-black text-[15px] font-normal font-['Cormorant']">
                  Necklaces & Pendants
                </span>
                <span className="text-black text-[15px] font-normal font-['Cormorant']">
                  Statement Rings
                </span>
                <span className="text-black text-[15px] font-normal font-['Cormorant']">
                  Earrings Favorites
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-200">
            <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
              <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
                Copyright 2024 © Theme. All rights reserved.
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                Our Team | Terms and Conditions | Blog
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
