import React from "react";
import bitmap from "../assets/Bitmap.png";
import { Link } from "react-router-dom";
import bitmapdesktop from "../assets/Bitmap.desktop.png";

const Herosection: React.FC = () => {
  return (
    <div>
      {/* Mobile */}
      <div
        className="md:hidden min-h-screen bg-cover m:auto bg-center pt-22.5 max-w-full"
        style={{ backgroundImage: `url(${bitmap})` }}
      >
        <div className="flex flex-col gap-5 items-center absolute max-w-93.75 top-70 left-0 right-0 z-4 md:hidden">
          <p className="text-[#FFFFFF]/40 tracking-[10px] font-normal">
            NEW PRODUCT
          </p>
          <h1 className="text-[#FFFFFF] font-bold text-[36px] tracking-[1.29px]">
            XX99 MARK II HEADPHONES
          </h1>
          <p className="text-[15px] text-[#FFFFFF] font-normal leading-6.25 px-10">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link
            to=""
            className="text-[#FFFFFF] text-[13px] border border-[#D87D4A] bg-[#D87D4A] py-3 px-6 tracking-[1px] font-bold active:bg-[#D87D4A]/20 hover:bg-[#D87D4A]/50"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
      {/* Desktop */}
      <div className="md:flex gap-5 bg-[#0E0E0E] hidden">
        <div className="flex flex-col justify-center items-center gap-4 px-45">
          <p className="text-[#FFFFFF]/40 tracking-[10px] font-normal">
            NEW PRODUCT
          </p>
          <h1 className="text-[#FFFFFF] font-bold text-[36px] tracking-[1.29px]">
            XX99 MARK II HEADPHONES
          </h1>
          <p className="text-[15px] text-[#FFFFFF] font-normal leading-6.25 ">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <div className="flex gap-4 m:auto">
            <Link
              to=""
              className="text-[#FFFFFF] text-[13px] border border-[#D87D4A] bg-[#D87D4A] py-3 px-6 tracking-[1px] font-bold active:bg-[#D87D4A]/20 hover:bg-[#D87D4A]/50"
            >
              SEE PRODUCT
            </Link>
            <Link
              to=""
              className="text-[#FFFFFF] text-[13px] border border-[#FFFFFF] py-3 px-6 tracking-[1px] font-bold active:bg-[#FFFFFF]/20 hover:bg-[#FFFFFF]/50"
            >
              SIGN UP
            </Link>
          </div>
        </div>
        <div>
          <img src={bitmapdesktop} alt="" className="w-400" />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
