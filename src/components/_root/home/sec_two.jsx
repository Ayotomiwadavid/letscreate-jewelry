import React from "react";

function Section_Two() {
  return (
    <section className="flex py-[5em] md:py-[2em] mx-5 md:mx-24 md:flex-row flex-col gap-8 items-start justify-between">
      <div className="flex flex-row w-full bg-[#eeb88184] rounded-md items-start justify-center">
        <span className="w-full font-bold p-5">Ring in Yellow Goldwith Diamonds</span>
        <img
          className="w-[255px] h-[180px] relative"
          src="/assets/imgs/ring-1.png"
        />
      </div>

      <div className="flex flex-row w-full bg-[#eeb88184] rounded-md items-start justify-end">
        <span className="w-full font-bold p-5">Edition FORGED Carbon</span>
        <img
          className="w-[255px] h-[180px] relative"
          src="/assets/imgs/ring-1.png"
        />
      </div>
    </section>
  );
}

export default Section_Two;
