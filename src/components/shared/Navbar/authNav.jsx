"use client";

import React from "react";
import { Link, useLocation } from "react-router-dom";

function AuthNavbar() {
  const { pathname } = useLocation();

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
                  <img src="/assets/logo.svg" className="flex" alt="Logo" />
                </Link>
              </div>

              <Link to={"/sign-up"} className={`${pathname === "/sign-up" ? "hidden" : "block"}`}>
                <button className="font-bold bg-primary text-white hover:bg-white hover:text-primary px-4 py-3 text-center w-full lg:w-[15em] rounded-md">
                  Sign Up
                </button>
              </Link>

              <Link to={"/sign-in"} className={`${pathname === "/sign-in" ? "hidden" : "block"}`}>
                <button className="font-bold bg-primary text-white hover:bg-white hover:text-primary px-4 py-3 text-center w-full lg:w-[15em] rounded-md">
                  Login
                </button>
              </Link>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}

export default AuthNavbar;
