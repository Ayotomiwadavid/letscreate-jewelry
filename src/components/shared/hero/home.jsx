import React from "react";
import hero from "../../../assets/heros_bg/home_bg.png";

function HeroSection() {
  return (
    <div>
      <img className="w-full h-[30rem] -z-20 top-0 bottom-0" src={hero} />
      <section className="flex absolute top-[14rem] bottom-0 mx-5 md:mx-12 md:flex-row flex-col items-center justify-center">
        <div className="mx-auto md:text-left text-center">
          <h1 className="md:text-5xl text-4xl text-black font-bold">
            Diamond Jewelry <br />
            <span className=""> Collection </span>
            <br />
          </h1>
          <div className="lg:text-lg text-md leading-normal md:w-[70%] mt-4 font-normal text-black">
            Give me a contemporary spin of classic pearls this holiday. What
            dreams are made of.
          </div>
          <button className="font-bold bg-primary text-white hover:bg-white hover:text-primary py-3 mt-8 rounded-lg text-center w-full md:w-[15em]">
            LEARN MORE
          </button>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
