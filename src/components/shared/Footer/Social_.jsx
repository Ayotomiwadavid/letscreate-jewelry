import React from "react";
// import { Link } from "react-router-dom";

function Social() {
  return (
    <div className="flex bg-[#303741] items-center justify-center">
      <div className="flex flex-col gap-3 ml-12 py-4 items-start justify-center">
        <div className="text-primary text-[15px] font-bold font-['Cormorant']">
          $20 discount for your first order
        </div>
        <div className="text-white text-3xl font-bold font-['Cormorant']">
          Join our newsletter and get...
        </div>
        <div className="text-white text-2xl font-['Cormorant']">
          We'll email you a voucher worth $10 off your first order over $50.
          <br />
        </div>

        <div className="flex items-center rounded-md">
          <input
            className="text-black w-full p-3 border lg:w-[15em] outline-primary rounded-l-md"
            placeholder="Email address"
          />
          <button className="font-bold bg-primary text-white hover:bg-white hover:text-primary py-3 text-center w-full lg:w-[10em] rounded-r-md">
          SUBSCRIBE
        </button>
        </div>
      </div>
      <img className="w-[80vw] h-[70vh]" src="/assets/imgs/newletters.png" />
    </div>
  );
}

export default Social;
