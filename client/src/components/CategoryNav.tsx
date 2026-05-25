import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import headphone from "../assets/Headphone mobile.png";
import earphone from "../assets/earphone mobile.png";
import speaker from "../assets/speaker mobile.png";

const CategoryNav: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col gap-25 bg-white w-93.75 h-187.5 items-center mx-auto rounded-b-lg my-20">
        <div className="relative bg-[#f1f1f1] rounded-lg w-81.75 h-54.25 pt-22 pb-1 text-center flex flex-col items-center hover:shadow-lg">
          <div className="absolute -top-19 w-28 h-28 flex items-center justify-center transition-transform duration-300 hover:scale-105 drop-shadow-[0_25px_15px_rgba(0,0,0,0.35)]">
            <img src={headphone} className="object-contain h-full" />
          </div>
          <h2 className="text-black font-bold tracking-widest text-sm uppercase mb-4">
            Headphones
          </h2>
          <a
            href="#"
            className="inline-flex items-center text-xs font-bold text-gray-500 uppercase tracking-wider hover:text-orange-500 transition-colors group"
          >
            Shop
            <MdOutlineKeyboardArrowRight className="text-[#D87D4A] text-xl transform transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="relative bg-[#f1f1f1] rounded-lg w-81.75 h-54.25 pt-22 pb-6 text-center flex flex-col items-center hover:shadow-lg">
          <div className="absolute -top-19 w-28 h-28 flex items-center justify-center drop-shadow-[0_25px_15px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-105">
            <img
              src={speaker}
              alt="Speakers"
              className="object-contain h-full"
            />
          </div>
          <h2 className="text-black font-bold tracking-widest text-sm uppercase mb-4">
            Speakers
          </h2>
          <a
            href="#"
            className="inline-flex items-center text-xs font-bold text-gray-500 uppercase tracking-wider hover:text-orange-500 transition-colors group"
          >
            Shop
            <MdOutlineKeyboardArrowRight className="text-[#D87D4A] text-xl transform transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="relative bg-[#f1f1f1] rounded-lg w-81.75 h-54.25 pt-22 pb-6 text-center flex flex-col items-center mx-auto hover:shadow-lg">
          <div className="absolute -top-19 w-28 h-28 flex items-center justify-center drop-shadow-[0_25px_15px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-105">
            <img src={earphone} className="object-contain h-full" />
          </div>
          <h2 className="text-black font-bold tracking-widest text-sm uppercase mb-4">
            Earphones
          </h2>
          <a
            href="#"
            className="inline-flex items-center text-xs font-bold text-gray-500 uppercase tracking-wider hover:text-orange-500 transition-colors group"
          >
            Shop
            <MdOutlineKeyboardArrowRight className="text-[#D87D4A] text-xl transform transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
