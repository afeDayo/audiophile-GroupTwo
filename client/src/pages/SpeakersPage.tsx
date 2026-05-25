import React from "react";
import Man from "../components/Man";
import speaker1 from "../assets/ZX9 SPEAKER.png";
import speaker2 from "../assets/ZX7 SPEAKER.png";
import headphones from "../assets/headphones.png";
import speaker3 from "../assets/speaker another.png";
import airpods from "../assets/airpods.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const SpeakersPage: React.FC = () => {
  return (
    <div className="font-[Manrope]">
      <h3 className="bg-[#000000] text-[#ffffff] px-3 py-15 text-[28px] font-bold">
        SPEAKERS
      </h3>
      <div className="mt-20 px-6 md:flex md:flex-row md:items-center md:px-50 md:gap-40 md:w-360 md:mx-auto">
        <div className="bg-[#F1F1F1] shadow-md px-15 py-18 mx-auto md:flex justify-center md:px-7 md:py-9 hover:scale-105">
          <img src={speaker1} alt="" className="w-77 md:w-100" />
        </div>
        <div className="mt-10 flex flex-col gap-7 items-center md:items-start md:text-left md:w-1/2 md:mt-0">
          <h4 className="text-[14px tracking-[10px] text-[#D87D4A] font-normal">
            NEW PRODUCT
          </h4>
          <h2 className="font-bold text-[28px] text-[#000000] tracking-[1px] md:w-111.25 md:text-[40px]">
            ZX9 <br /> SPEAKER
          </h2>
          <p className="font-normal text-[15px] text-[#000000] opacity-50 md:max-w-108.75">
            Upgrade your sound system with the all new ZX9 active speaker. It’s
            a bookshelf speaker system that offers truly wireless connectivity
            -- creating new possibilities for more pleasing and practical audio
            setups.
          </p>
          <button className="bg-[#D87D4A] px-8 py-3 font-bold text-[13px] text-[#FFFFFF]  hover:bg-orange-700 hover:scale-105">
            See Product
          </button>
        </div>
      </div>

      <div className="mt-13 px-6 md:flex md:flex-row-reverse md:items-center md:px-50 md:gap-40 md:w-360 md:mx-auto md:mt-20">
        <div className="bg-[#F1F1F1] shadow-md px-15 py-18 mx-auto md:flex justify-center md:px-7 md:py-9 hover:scale-105">
          <img src={speaker2} alt="" className="w-77 md:w-100" />
        </div>
        <div className="mt-10 flex flex-col gap-7 items-center md:items-start md:text-left md:w-1/2 md:mt-0">
          <h4 className="text-[14px tracking-[10px] text-[#D87D4A] font-normal">
            NEW PRODUCT
          </h4>
          <h2 className="font-bold text-[28px] text-[#000000] tracking-[1px] md:w-111.25 md:text-[40px]">
            ZX7 <br /> SPEAKER
          </h2>
          <p className="font-normal text-[15px] text-[#000000] opacity-50 md:max-w-108.75">
            Stream high quality sound wirelessly with minimal loss. The ZX7
            bookshelf speaker uses high-end audiophile components that
            represents the top of the line powered speakers for home or studio
            use.
          </p>
          <button className="bg-[#D87D4A] px-8 py-3 font-bold text-[13px] text-[#FFFFFF]  hover:bg-orange-700 hover:scale-105">
            See Product
          </button>
        </div>
      </div>

      <div className="w-full max-w-sm flex flex-col gap-25 mt-40 mb-10 md:flex-row mx-auto md:max-w-277.5 md:gap-5 md:px-0 md:mt-50 md:mb-30">
        <div className="relative bg-[#f1f1f1] rounded-lg w-81.75 h-35 pt-16 pb-1 px-4 text-center flex flex-col items-center mx-auto md:rounded-none md:w-70">
          <div className="absolute -top-19 w-28 h-28 flex items-center justify-center transition-transform duration-300 hover:scale-105 drop-shadow-[0_25px_15px_rgba(0,0,0,0.35)]">
            <img src={headphones} className="object-contain h-full" />
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

        <div className="relative bg-[#f1f1f1] rounded-lg w-81.75 h-35 pt-16 pb-6 px-4 text-center flex flex-col items-center mx-auto md: md:rounded-none md:w-70">
          <div className="absolute -top-19 w-28 h-28 flex items-center justify-center drop-shadow-[0_25px_15px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-105">
            <img
              src={speaker3}
              alt="Speakers"
              className="object-contain h-full"
            />
          </div>
          <h2 className="text-black font-bold tracking-widest text-sm uppercase mb-4">
            Speakers
          </h2>
          <a
            href="#"
            className="inline-flex items-center text-xs font-bold text-gray-500 uppercase traccking-wider hover:text-orange-500 transition-colors group"
          >
            Shop
            <MdOutlineKeyboardArrowRight className="text-[#D87D4A] text-xl transform transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="relative bg-[#f1f1f1] rounded-lg w-81.75 h-35 pt-16 pb-6 px-4 text-center flex flex-col items-center mx-auto md:rounded-none md:w-70">
          <div className="absolute -top-19 w-28 h-28 flex items-center justify-center drop-shadow-[0_25px_15px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-105">
            <img src={airpods} className="object-contain h-full" />
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
      <Man />
    </div>
  );
};

export default SpeakersPage;
