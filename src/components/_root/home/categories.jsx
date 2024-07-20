import React from "react";
import BraceletImage from '../../../assets/ProductImages/CrossStripes&StoneBracelet.jpg'
import BlueDiamondSwingRing from '../../../assets/ProductImages/BlueDiamondSwingRing.jpg'
import crossOfLightPendant from '../../../assets/ProductImages/crossOfLightPendant(Gold).jpg'
import EraingImage from '../../../assets/ProductImages/BE3PD15S3.jpeg'

function Categories() {
  return (
    <section className="bg-primary bg-opacity-20  text-black p-4 px-5 md:px-12">
      <div className="flex flex-col text-center mx-auto mt-8 font-bold text-[30px] items-center justify-center">
        <div>Shop by categories</div>
        <img
          className="w-[220px] h-[165px] mt-[-5rem] items-center justify-center"
          src="/assets/icons/categories_ic.svg"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 mx-3 place-items-center items-center justify-center">
        <div className="flex flex-col gap-3 items-start justify-start">
          <img
            className="w-[120px] h-[115px] p-3 bg-white rounded-full relative"
            src={BraceletImage}
          />
          <div>
            <span className="text-2xl font-bold font-['Cormorant']">
              Bracelet
              <br />
            </span>
            <span className="text-2xl font-bold font-['Cormorant']">
              1 products
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-start justify-start">
          <img
            className="w-[120px] h-[115px] p-3 bg-white rounded-full relative"
            src={BlueDiamondSwingRing}
          />
          <div>
            <span className="text-2xl font-bold font-['Cormorant']">
              Rings
              <br />
            </span>
            <span className="text-2xl font-bold font-['Cormorant']">
              1 products
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-start justify-start">
          <img
            className="w-[120px] h-[115px] p-3 bg-white rounded-full relative"
            src={crossOfLightPendant}
          />
          <div>
            <span className="text-2xl font-bold font-['Cormorant']">
              Necklace
              <br />
            </span>
            <span className="text-2xl font-bold font-['Cormorant']">
              2 products
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-start justify-start">
          <img
            className="w-[120px] h-[115px] p-3 bg-white rounded-full relative"
            src={EraingImage}
          />
          <div>
            <span className="text-2xl font-bold font-['Cormorant']">
              Earrings
              <br />
            </span>
            <span className="text-2xl font-bold font-['Cormorant']">
              1 products
            </span>
          </div>
        </div>
      </div>

      <div className="w-full text-white/opacity-60 text-[43px] md:text-[83px] font-bold font-['Cormorant']">
        WE ARE HERE, FOR{" "} YOU
      </div>
    </section>
  );
}

export default Categories;
