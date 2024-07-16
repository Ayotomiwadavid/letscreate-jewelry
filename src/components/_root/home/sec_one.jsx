import React from "react";

function Section_One() {
  return (
    <section className="flex py-[5em] md:py-[2em] mx-5 md:mx-12 md:flex-row flex-col gap-5 items-start justify-center">
      <div className="flex flex-row gap-3 items-center justify-center">
        <img
          className="w-[60px] h-[60px] relative"
          src="/assets/icons/car.svg"
        />
        <div className="flex flex-col md:mt-0 mt-6 justify-center items-start">
          <div className="font-bold">Free Delivery</div>
          <div>Free shipping over $100 to stores and home</div>
        </div>
      </div>

      <div className="flex flex-row gap-3 items-center justify-center">
        <img
          className="w-[60px] h-[60px] relative"
          src="/assets/icons/payment.svg"
        />
        <div className="flex flex-col md:mt-0 mt-6 justify-center items-start">
          <div className="font-bold">Flexible payment</div>
          <div>Diffirent finance opitons will be available</div>
        </div>
      </div>

      <div className="flex flex-row gap-3 items-center justify-center">
        <img
          className="w-[60px] h-[60px] relative"
          src="/assets/icons/naturally.svg"
        />
        <div className="flex flex-col md:mt-0 mt-6 justify-center items-start">
          <div className="font-bold">Naturally derived</div>
          <div>Natural & organic beauty products</div>
        </div>
      </div>
    </section>
  );
}

export default Section_One;
