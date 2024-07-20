import React from "react";
import Cart_Hero from "../../../assets/heros_bg/contact.png";
import { Link } from "react-router-dom";
// import backy from '../../../assets/images/Signature_Tile_Desktop.jpg'

const Hero = ({title}) => {
  return (
    <div className="flex flex-row h-[20vh] md:h-[40vh] items-center justify-center sm:shopheroMobile shop-herodesktop">
      <section className="flex flex-col w-full px-3 md:px-7 py-5 items-start justify-start">
        <div className="text-black text-[34px] md:text-[64px] font-bold font-['Cormorant Garamond']">
          {title}
        </div>
        <div className="flex font-bold text-black items-center justify-start">
          <Link to={"/"}>Home</Link>{" "}
          <ion-icon name="caret-forward-outline"></ion-icon>{" "}
          <Link to={"/"}>{title}</Link>
        </div>
      </section>
      {/* <img className="w-[40vw] h-[230px] object-cover" alt="/" src={Cart_Hero} /> */}
    </div>
  );
};

export default Hero;
