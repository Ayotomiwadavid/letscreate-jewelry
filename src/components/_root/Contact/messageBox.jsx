import React from "react";

export default function MessageBox() {
  return (
    <div className="flex flex-col text-center relative mx-12 mb-16 justify-center items-center">
      <div className="relative mb-8 justify-center items-center">
        <div className="text-black text-3xl font-normal font-['Cormorant']">
          Contact us
        </div>
        <div className="text-black text-[50px] font-bold font-['Cormorant']">
          Send A Message
        </div>

        <div className="flex flex-col mt-6 gap-10">
          <div className="flex gap-4">
            <input
              className="text-black/opacity-40 bg-stone-50 p-3 rounded-md font-normal font-['Lato']"
              placeholder="Your Name"
            />
            <input
              className="text-black/opacity-40 bg-stone-50 p-3 rounded-md font-normal font-['Lato']"
              placeholder="Phone"
            />
          </div>
          <input
            className="text-black/opacity-40 bg-stone-50 p-3 rounded-md font-normal font-['Lato']"
            placeholder="Subject"
          />
          <textarea
            className="text-black/opacity-40 bg-stone-50 p-3 rounded-md font-normal font-['Lato']"
            placeholder="Message"
          />
        </div>
      </div>

      <button className="font-bold bg-primary text-white hover:bg-white hover:text-primary py-3 text-center w-full lg:w-[15em] rounded-md">
        SEND MESSAGE
      </button>
    </div>
  );
}
