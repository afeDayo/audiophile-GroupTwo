import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import headphone from "../assets/Headphone mobile.png";
import earphone from "../assets/earphone mobile.png";
import speaker from "../assets/speaker mobile.png";
import bigspeaker from "../assets/bigspeaker mobile.png";
import bgspeaker from "../assets/zx7 speaker background mobile.png";
import yx1 from "../assets/yx1 earphone mobile.png";
import carhead from "../assets/carousel headphone mobile.png";
import bigspeakerdesk from "../assets/bigspeaker desktop.png";
import zx7bgdesk from "../assets/zx7 desktop.png";

const HomePage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen w-full max-w-6xl md:w-277.5 mx-auto py-16 px-6 lg:px-0 flex flex-col gap-12 md:gap-20 mt-10 md:items-center md:justify-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-25 md:gap-15 mb-10 md:mb-1">
        <div className="relative bg-[#f1f1f1] rounded-lg w-81.75 h-45 pt-22 pb-1 text-center flex flex-col items-center mx-auto  hover:shadow-lg">
          <div className="absolute -top-19 w-28 h-28 flex items-center justify-center transition-transform duration-300 hover:scale-105 drop-shadow-[0_25px_15px_rgba(0,0,0,0.35)]">
            <img src={headphone} className="object-contain h-full" />
          </div>
          <h2 className="text-black font-bold tracking-widest text-[15px] md:text-[18px] uppercase mb-4">
            Headphones
          </h2>
          <a
            href="#"
            className="inline-flex items-center text-[13px] font-bold text-gray-500 uppercase tracking-wider hover:text-orange-500 transition-colors group"
          >
            Shop
            <MdOutlineKeyboardArrowRight className="text-[#D87D4A] text-xl transform transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="relative bg-[#f1f1f1] rounded-lg w-81.75  h-45 pt-22 pb-6 text-center flex flex-col items-center mx-auto hover:shadow-lg">
          <div className="absolute -top-19 w-28 h-28 flex items-center justify-center drop-shadow-[0_25px_15px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-105">
            <img
              src={speaker}
              alt="Speakers"
              className="object-contain h-full"
            />
          </div>
          <h2 className="text-black font-bold tracking-widest text-[15px] md:text-[18px] uppercase mb-4">
            Speakers
          </h2>
          <a
            href="#"
            className="inline-flex items-center text-[13px] font-bold text-gray-500 uppercase tracking-wider hover:text-orange-500 transition-colors group"
          >
            Shop
            <MdOutlineKeyboardArrowRight className="text-[#D87D4A] text-xl transform transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="relative bg-[#f1f1f1] rounded-lg w-81.75  h-45 pt-22 pb-6 text-center flex flex-col items-center mx-auto hover:shadow-lg">
          <div className="absolute -top-19 w-28 h-28 flex items-center justify-center drop-shadow-[0_25px_15px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-105">
            <img src={earphone} className="object-contain h-full" />
          </div>
          <h2 className="text-black font-bold tracking-widest text-[15px] md:text-[18px] uppercase mb-4">
            Earphones
          </h2>
          <a
            href="#"
            className="inline-flex items-center text-[13px] font-bold text-gray-500 uppercase tracking-wider hover:text-orange-500 transition-colors group"
          >
            Shop
            <MdOutlineKeyboardArrowRight className="text-[#D87D4A] text-xl transform transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      <div className="mx-auto md:mx-auto">
        <div className="relative w-81.75 bg-[#d87d4a] rounded-lg pb-18 md:pb-0 text-center md:text-start overflow-hidden flex flex-col items-center md:items-center md:flex-row md:w-277.5 md:h[560px] md:justify-center md:gap-34.5">
          <div className="absolute -inset-60 md:-inset-60 flex items-center md:items-end justify-center pointer-events-none -top-136 md:justify-start md:-top-30 md:-left-29">
            <div>
              <div className="w-137 h-137 md:w-220 md:h-210 rounded-full border border-white/20 flex items-center justify-center">
                <div className="w-80 h-80 md:w-130 md:h-130 rounded-full border border-white/20">
                  <div className="w-70 h-70 ml-5 mt-5 rounded-full border border-white/20 md:ml-7 md:mt-7 md:w-115 md:h-115"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-8 mb-15 flex items-center justify-center drop-shadow-[0_35px_20px_rgba(0,0,0,0.45)]">
            <img src={bigspeaker} className="h-full block md:hidden" />
            <img
              src={bigspeakerdesk}
              className="md:h-110 md:w-95 hidden md:block"
            />
          </div>

          <div className="relative z-10 max-w-70">
            <h2 className="text-white font-bold text-[36px] md:text-[56px] uppercase md:tracker-[2px] md:leading-14.5 tracking-wider leading-tight mb-6">
              ZX9
              <br />
              Speaker
            </h2>

            <p className="text-white/75 text-[15px] font-normal leading-relaxed md:leading-6.25 mb-10">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>

            <button className="w-40 rounded-md bg-black hover:bg-white hover:text-black cursor-pointer text-white text-xs font-bold uppercase tracking-widest py-4 transition-colors duration-400">
              See Product
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white md:py-10 md:px-10 flex items-center justify-center">
        <div
          className="relative w-81.75 h-80 rounded-lg bg-cover bg-right bg-no-repeat flex items-center px-8 overflow-hidden md:hidden"
          style={{
            backgroundImage: `url(${bgspeaker})`,
            backgroundColor: "#f1f1f1",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
          }}
        >
          <div className="relative z-10 max-w-62.5 sm:max-w-xs">
            <h2 className="text-black font-bold text-2xl uppercase tracking-widest mb-8">
              ZX7 Speaker
            </h2>

            <button className="border border-black bg-transparent hover:bg-black text-black hover:text-white text-xs font-bold uppercase tracking-widest px-8 py-3.5 transition-colors duration-400 cursor-pointer">
              See Product
            </button>
          </div>
        </div>

        <div
          className="relative w-277.5 h-80 rounded-md md:bg-cover md:bg-right bg-no-repeat md:flex items-center overflow-hidden md:w-277.5 md:h-80 md:px-24 hidden"
          style={{
            backgroundImage: `url(${zx7bgdesk})`,
            // backgroundColor: "#f1f1f1",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left",
          }}
        >
          <div className="relative z-10 max-w-62.5 sm:max-w-xs">
            <h2 className="text-black font-bold text-2xl uppercase tracking-widest mb-8">
              ZX7 Speaker
            </h2>

            <button className="border border-black rounded-md bg-transparent hover:bg-black text-black hover:text-white text-xs font-bold uppercase tracking-widest px-8 py-3.5 transition-colors duration-400 cursor-pointer">
              See Product
            </button>
          </div>
        </div>
      </div>

      <section className="max-w-sm mx-auto overflow-hidden flex flex-col gap-6 md:max-w-277.5 md:h-80 md:flex-row md:items-center md:mx-auto">
        <div className="">
          <img
            src={yx1}
            alt="YX1 Earphones in charging case"
            className="w-full md:h-80 md:w-135 block rounded-lg"
          />
        </div>

        <div className="px-6 py-10 flex flex-col items-start gap-6 bg-[#F1F1F1] rounded-lg md:h-80 md:w-135 md:py-25.25 md:justify-center md:pr-39 md:pl-23.75 md:rounded-lg">
          <h2 className="text-3xl font-bold tracking-wider text-black uppercase">
            YX1 Earphones
          </h2>

          <a
            href="#"
            className="border border-black px-6 py-3 text-xs font-bold tracking-widest text-black uppercase transition-colors duration-300 hover:bg-black hover:text-white rounded-lg"
          >
            See Product
          </a>
        </div>
      </section>

      {/* [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-none] */}

      <div className="overflow-x-auto scroll-smooth scrollbar-none mt-20 md:hidden">
        <div className="flex gap-5 items-center h-81 w-207.5">
          <div className="relative bg-[#f1f1f1] rounded-lg w-81.75 h-45 pt-16 px-4 text-center flex flex-col gap-4 items-center justify-end pb-5 hover:shadow-lg">
            <div className="absolute -top-15 w-28 h-28 flex items-center justify-center transition-transform duration-300 hover:scale-105 drop-shadow-[0_25px_15px_rgba(0,0,0,0.35)]">
              <img src={carhead} className="object-contain h-full" />
            </div>
            <h2 className="text-black font-bold tracking-widest text-sm uppercase">
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

          <div className="relative bg-[#f1f1f1] rounded-lg w-81.75 h-45 pt-16 text-center flex flex-col items-center hover:shadow-lg gap-4 justify-end pb-5">
            <div className="absolute -top-15 w-28 h-28 flex items-center justify-center drop-shadow-[0_25px_15px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-105">
              <img
                src={speaker}
                alt="Speakers"
                className="object-contain h-full"
              />
            </div>
            <h2 className="text-black font-bold tracking-widest text-sm uppercase">
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

          <div className="relative bg-[#f1f1f1] rounded-md w-81.75 h-45 pt-22 text-center flex flex-col items-center hover:shadow-lg gap-4 justify-end pb-5">
            <div className="absolute -top-15 w-28 h-28 flex items-center justify-center drop-shadow-[0_25px_15px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-105">
              <img src={earphone} className="object-contain h-full" />
            </div>
            <h2 className="text-black font-bold tracking-widest text-sm uppercase">
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
    </div>
  );
};

export default HomePage;
