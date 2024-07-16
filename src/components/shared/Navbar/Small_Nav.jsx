import React, { useState } from "react";
import { Link } from "react-router-dom";

function SecondNavbar() {
  return (
    <header className="flex pt-4 pb-4 px-2 sm:px-6 lg:px-8 items-center justify-center">
      <nav className="flex items-center">
        <ul className="flex flex-1 items-center justify-end space-x-6">
          <Link
            to={"/home"}
            className="text-base font-medium text-gray-900 hover:text-gray-700"
          >
            Home
          </Link>
          <Link
            to={"/shop"}
            className="text-base font-medium text-gray-900 hover:text-gray-700"
          >
            Shop
          </Link>
          <Link
            to={"/contact-us"}
            className="text-base font-medium text-gray-900 hover:text-gray-700"
          >
            Contact us
          </Link>
        </ul>
      </nav>

      <select className="ml-auto flex border-l pl-3 text-[20px] outline-none items-center justify-center">
        <option>Recently Viewed</option>
      </select>
    </header>
  );
}

export default SecondNavbar;
