"use client"

import React, { useState } from "react";
import { Link } from "react-router-dom";
import SecondNavbar from "./Small_Nav";

function Navbar() {
  return (
    <>
      <div className="bg-white sticky top-0 z-50">
        <header className="relative bg-white">
          <nav
            aria-label="Top"
            className="bg-gray-100 px-2 sm:px-6 lg:px-8 shadow-xl"
          >
            <div className="flex flex-row h-20 justify-between items-center">
              {/* Logo */}
              <div className="flex lg:ml-0">
                <Link to={"/"} className="flex">
                  <img src="/assets/logo.svg" className="flex " />
                </Link>
              </div>

              <div className="ml-auto flex bg-gray-200 px-4 pt-3 pb-2 text-[20px] items-center justify-center gap-4 rounded-md">
               <Link to={"/sign-up"} className="">
                  <ion-icon name="person-outline"></ion-icon>
                </Link>
                <Link to={"/cart"}>
                  <ion-icon name="cart-outline"></ion-icon>
                </Link>
              </div>
            </div>
          </nav>
        </header>
        <SecondNavbar />
      </div>
    </>
  );
}

export default Navbar;
