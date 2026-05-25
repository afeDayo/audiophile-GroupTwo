import React from "react";
import mobileman from "../assets/mobile man img.png";
import desktopman from "../assets/desktop man img.png";
const Man: React.FC = () => {
  return (
    <section className="bg-[#ffffff]  py-24 font-[Manrope] ">
      <div className="flex flex-col w-93.75 mx-auto items-center gap-10 md:flex-row-reverse md:gap-20 md:justify-between md:w-360 md:px-50">
        <img src={mobileman} alt="" className="w-85 md:hidden" />
        <img src={desktopman} alt="" className="hidden md:flex " />

        <div className="flex flex-col font-[Manrope] gap-5 md:text-left">
          <h3 className="font-bold text-[28px] text-center text-[#000000] uppercase px-9 md:text-start md:px-0 md:text-[40px] md:w-111.75">
            Bringing you the <span className="text-[#D87D4A]"> best</span> audio
            gear
          </h3>

          <p className="mx-auto max-w-142.5 text-[15px] font-medium leading-6.25 text-[#000000] w-81.75 opacity-50 md:w-111.75">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Man;
