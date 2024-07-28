"use client"

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SecondNavbar from "./Small_Nav";
import { AuthStatus } from "../../../Context/Usecontext";
import profileImage from '../../../assets/images/profileImgae.jpeg'
import { toast } from "react-toastify";
import { signOut } from "../../../Controller";

function Navbar() {
  const {authStatusValue, setAuthStatusValue, user} = useContext(AuthStatus);
  const [visibility, setVisibility] = useState(false)
  const [loading, setLoadiing] = useState(false);
  const [error, setError] = useState('')

  //====== HANDLE SMALL MENU VISIBILITY
  const handleSmallMenu = () => {
    setVisibility((prevValue) => {
      return !prevValue
    })
  }

  //HANDLE LOG OUT FUNCTION
  const handleLogOut = async () => {
    setLoadiing(true)
    try {
      await signOut(setLoadiing);
      toast.success('User signed out Successfully');
      setAuthStatusValue(false)
    } catch (error) {
      console.error("Error signing out: ", error.message);
      setError(
        "Failed to sign out. Something went wrong"
      );
      toast.error("Failed to sign out. " + error.message);
    }finally{
      setLoadiing(false)
    }
  }

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

              <div className="ml-auto flex bg-gray-200 px-4 pt-3 pb-2 text-[20px] items-center justify-center gap-4 rounded-md cursor-pointer">
               {/* { !authStatusValue ? <Link to={"/sign-up"} className="">
                  <ion-icon name="person-outline"></ion-icon>
                </Link> : <ion-icon name="person-outline" onClick={handleSmallMenu}></ion-icon>} */}
                <Link to={"/cart"}>
                  <ion-icon name="cart-outline"></ion-icon>
                </Link>
              </div>
            </div>
          </nav>
          <aside className={visibility ? "w-[70%] fixed right-0 py-5 px-5 h-fit flex flex-col items-center justify-center ga-5 bg-white rounded-md shadow-xl transition-all duration-500 md:w-[15%] md:mr-0" : "w-[55%] fixed right-[-100%] py-5 px-5 h-fit flex flex-col items-center justify-center ga-5 bg-white rounded-md shadow-xl transition-all duration-500 md:w-[15%]"}>
            <div className="flex flex-col items-center justify-center gap-3 py-3">
              <img src={profileImage} alt="Profile Icon" className="h-[70px] w-[70px] rounded-full my-1"/>
              <article className="w-full flex flex-col items-center justify-center">
              <h4 className="font-bold text-base text-[#94958F]">Hello, {authStatusValue && user.displayName}</h4>
              <p className="font-light text-center text-sm py-1">{authStatusValue && user.email}</p>
              </article>
            </div>
            <button onClick={handleLogOut} className="capitalize bg-[#2EFAE7] h-[45px] w-full text-center rounded-md outline-none cursor-pointer text-white font-bold">{loading ? <div className="flex gap-3 justify-center items-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-4 border-white"></div>
                Loading...
              </div> : 'Log out'}</button>
          </aside>
        </header>
        <SecondNavbar />
      </div>
    </>
  );
}

export default Navbar;
