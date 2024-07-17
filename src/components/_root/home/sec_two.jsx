import React from "react";

function Section_Two() {
  return (
    <section className="flex w-full py-[1em] md:py-[2em] gap-5 md:px-[10vw] md:flex-row flex-col items-center justify-center">
      <div className="flex w-[350px] h-[140px] diamond rounded-md items-start py-3 px-6 md:mr-9 justify-start">
        <p className="text-md w-3/4 font-bold text-left">Ring in Yellow Goldwith Diamonds</p>
      </div>

      <div className="flex w-[350px] h-[140px] carbon rounded-md items-start py-3 px-6 md:ml-9 justify-start">
        <p className="text-md w-3/4 font-bold text-left">Edition FORGED Carbon</p>
      </div>
    </section>
  );
}

export default Section_Two;
