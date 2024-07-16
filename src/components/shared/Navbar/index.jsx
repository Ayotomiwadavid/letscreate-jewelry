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
            className="bg-gray-100 px-2 sm:px-6 lg:px-8 shadow-xl "
          >
            <div className="flex flex-row h-20 justify-between items-center">
              {/* Logo */}
              <div className="flex lg:ml-0">
                <Link to={"/home"} className="flex">
                  <img src="/assets/logo.svg" className="flex " />
                </Link>
              </div>

              <nav className="ml-auto flex gap-4 items-center justify-center">
                <button className="font-bold bg-primary text-white hover:bg-white hover:text-primary py-3 text-center w-full lg:w-[15em] rounded-md">
                  Browse Categories
                </button>

                <div className="flex bg-white border p-2.5 items-center rounded-md focus-within:ring-1 ring-primary">
                  {/* <select className="ml-auto flex border p-3 text-[15px] outline-none items-center justify-center">
                    <option>All Categories</option>
                  </select> */}
                  <input className="text-black w-full lg:w-[15em] outline-none rounded-sm" placeholder="I’am looking for..........." />
                  <div><ion-icon name="search-outline"></ion-icon></div>
                </div>
              </nav>

              <div className="ml-auto flex bg-gray-200 px-4 pt-3 pb-2 text-[20px] items-center justify-center gap-4 rounded-md">
                <Link to={"/"} className="">
                  <ion-icon name="person-outline"></ion-icon>
                </Link>
                <Link to={"/"} className="hidden">
                  <ion-icon name="search-outline"></ion-icon>
                </Link>
                <Link to={"/"}>
                  <ion-icon name="heart-outline"></ion-icon>
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
