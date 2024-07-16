import React from "react";
import Addr from "../../../assets/images/addr.png";
import Map from "../../../assets/images/map.png";

export default function Address() {
  return (
    <>
      <div className="relative mx-12">
        <div className="text-center mt-12">
          <div className="text-black text-[30px] font-bold font-['Cormorant Garamond']">
            We are always eager to hear from you!
          </div>
          <div className="text-black text-xl font-normal font-['Lato']">
            You can call us in working time or visit our office. All mails will
            <br />
            get the response within 24 hours. Love to hear from you!
          </div>
        </div>

        <div className="flex flex-row relative mx-auto gap-12 mt-12 justify-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-row gap-3">
              <img
                className="w-[30px] h-[30px] rounded-full"
                src="/assets/icons/address.svg"
                alt="Location Icon"
              />
              <div className="flex flex-col gap-3">
                <span className="text-black text-[13px] font-bold font-['Lato']">
                  Address
                </span>
                <span className="text-black/opacity-70 text-[13px] font-normal font-['Lato']">
                  Head Office: 102 Princes Street, Toronto, Venice, Ca 124
                </span>
              </div>
            </div>

            <div className="flex flex-row gap-3">
              <img
                className="w-[30px] h-[30px] rounded-full"
                src="/assets/icons/call.svg"
                alt="Phone Icon"
              />
              <div className="flex flex-col gap-3">
                <span className="text-black text-[13px] font-bold font-['Lato']">
                  Contact
                </span>
                <span className="text-black/opacity-70 text-[13px] font-normal font-['Lato']">
                  Mobile: +(084) 1200-567-990 <br /> Hotline: 1800 – 1102
                  <br />
                  E-mail: contact@example.com
                </span>
              </div>
            </div>

            <div className="flex flex-row gap-3">
              <img
                className="w-[30px] h-[30px] rounded-full"
                src="/assets/icons/operation.svg"
                alt="Clock Icon"
              />
              <div className="flex flex-col gap-3">
                <span className="text-black text-[13px] font-bold font-['Lato']">
                  Hour of Operation
                </span>
                <span className="text-black/opacity-70 text-[13px] font-normal font-['Lato']">
                  Monday-Saturday: 9:00 Am – 8:00 Pm <br />
                  Sundays: 10:00 Am – 6:00 Pm
                  Cst
                </span>
              </div>
            </div>
          </div>
          <img className="w-[400px] h-[300px] rounded-md" src={Addr} alt="Office" />
        </div>
      </div>
      <img className="w-full h-[350px] my-14 rounded-md" src={Map} alt="Office" />
    </>
  );
}
