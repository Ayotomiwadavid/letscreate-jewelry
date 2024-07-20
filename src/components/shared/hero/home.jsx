import React from "react";
import hero from "../../../assets/heros_bg/home_bg.png";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="h-[90vh] w-full heroSec flex flex-col items-center justify-center md:items-center md:justify-center">
      <div className="px-[20px] w-full flex flex-col items-center gap-5 justify-start">
        <h1 className="md:text-5xl text-4xl flex flex-col items-start justify-center w-full text-black font-bold">
          Diamond Jewelry <br />
          <span className=""> Collection </span>
        </h1>
        <div className="lg:text-lg text-md leading-normal md:w-full text-left text-nowrap font-normal text-black">
          <p className="md:w-[35%] text-wrap pr-9">
            {" "}
            Give me a contemporary spin of classic pearls this holiday. What
            dreams are made of.
          </p>
        </div>
        <div className="w-full flex items-center justify-start">
          <Link to='/shop' className="font-bold capitalize text-lg bg-primary transition-all duration-500 text-white hover:bg-white hover:text-primary py-3 rounded-lg text-center w-[200px] md:w-[15em]">
            shop now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
