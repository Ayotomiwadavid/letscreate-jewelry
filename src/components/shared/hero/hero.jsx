import React from "react";
import Cart_Hero from "../../../assets/heros_bg/contact.png";
import { Link } from "react-router-dom";

const Hero = ({title}) => {
  return (
    <div className="bg-gray-100 flex flex-row h-auto items-center justify-center">
      <section className="flex flex-col mx-auto ml-5 md:ml-12 items-start justify-start">
        <div className="text-black text-[34px] md:text-[64px] font-bold font-['Cormorant Garamond']">
          {title}
        </div>
        <div className="flex font-bold text-black items-center justify-start">
          <Link to={"/"}>Home</Link>{" "}
          <ion-icon name="caret-forward-outline"></ion-icon>{" "}
          <Link to={"/"}>{title}</Link>
        </div>
      </section>
      <img className="w-[40vw] h-[230px] object-cover" alt="/" src={Cart_Hero} />
    </div>
  );
};

export default Hero;
