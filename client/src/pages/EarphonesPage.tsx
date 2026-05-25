import React from "react";
import Headphone from "../assets/Headphones.png";
import Speakers from "../assets/speakers.png";
import Earphone from "../assets/Earphones.png";
import { Link } from "react-router-dom";

const Earphones: React.FC = () => {
  return (
    <div>
      <div className="bg-[#FAFAFA] px-6 mt-20 py-20 md:px-20 lg:px-40">
        {/* ================= FIRST PRODUCT ================= */}

        {/* MOBILE */}
        <div className="flex flex-col gap-10 mb-32 max-w-93.75 md:hidden">
          <div className="bg-[#F1F1F1] rounded-lg flex justify-center items-center p-10">
            <img
              src={Earphone}
              alt=""
              className="drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
            />
          </div>

          <div className="text-center ">
            <p className="text-[#D87D4A] text-[14px] tracking-[10px] mb-5">
              NEW PRODUCT
            </p>

            <h1 className="text-[40px] leading-11 tracking-[1.43px] font-bold mb-8">
              YX1 WIRELESS EARPHONES
            </h1>

            <p className="text-[#000000]/40 text-[15px] leading-6 w-81.75 mb-10">
              Tailor your listening experience with bespoke dynamic drivers from
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity{" "}
              <br /> sound even in noisy environments with its active noise
              cancellation feature.
            </p>

            <Link
              to=""
              className="bg-[#D87D4A] text-white px-8 py-4 inline-block"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex flex-col gap-10 mb-40 text-start">
          <div className="flex items-center gap-20">
            <div className="bg-[#F1F1F1] rounded-lg flex justify-center items-center p-20 w-full">
              <img
                src={Earphone}
                alt=""
                className="w-105.25 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
              />
            </div>

            <div className="w-full">
              <p className="text-[#D87D4A] text-[14px] tracking-[10px] mb-5">
                NEW PRODUCT
              </p>

              <h1 className="text-[40px] leading-11 tracking-[1.43px] font-bold mb-8">
                YX1 WIRELESS <br /> EARPHONES
              </h1>

              <p className="text-[#000000]/40 text-[15px] leading-6 mb-10 w-111.25">
                Tailor your listening experience with bespoke dynamic drivers
                from the new YX1 Wireless Earphones. Enjoy incredible <br />
                high-fidelity sound even in noisy environments with its active
                noise cancellation feature.
              </p>

              <Link
                to=""
                className="bg-[#D87D4A] text-white px-8 py-4 inline-block"
              >
                SEE PRODUCT
              </Link>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM CARDS MOBILE ================= */}

        <div className="flex flex-col gap-20 mt-50 md:hidden">
          {/* HEADPHONES */}
          <div className="bg-[#F1F1F1] rounded-lg flex flex-col items-center pt-8 pb-5 relative">
            <div className="-mt-25 mb-6">
              <img
                src={Headphone}
                alt="headphones"
                className="w-25.5 transition-transform duration-300 hover:scale-120 drop-shadow-[0_50px_20px_rgba(0,0,0,0.35)]"
              />
            </div>

            <h2 className="font-bold tracking-[1px] my-4">HEADPHONES</h2>

            <Link
              to=""
              className="text-[#000000]/60 tracking-[1px] font-bold text-[13px]"
            >
              SHOP <span className="text-[#D87D4A]">{">"}</span>
            </Link>
          </div>

          {/* SPEAKERS */}
          <div className="bg-[#F1F1F1] rounded-lg flex flex-col items-center pt-8 pb-5 relative">
            <div className="-mt-25 mb-6">
              <img
                src={Speakers}
                alt="speakers"
                className="w-25.5 transition-transform duration-300 hover:scale-120 drop-shadow-[0_50px_20px_rgba(0,0,0,0.35)]"
              />
            </div>

            <h2 className="font-bold tracking-[1px] my-4">SPEAKERS</h2>

            <Link
              to=""
              className="text-[#000000]/60 tracking-[1px] font-bold text-[13px]"
            >
              SHOP <span className="text-[#D87D4A]">{">"}</span>
            </Link>
          </div>

          {/* EARPHONES */}
          <div className="bg-[#F1F1F1] rounded-lg flex flex-col items-center pt-8 pb-5 relative">
            <div className="-mt-22 mb-6">
              <img
                src={Earphone}
                alt="earphones"
                className="w-27.5 transition-transform duration-300 hover:scale-120 drop-shadow-[0_50px_20px_rgba(0,0,0,0.35)]"
              />
            </div>

            <h2 className="font-bold tracking-[1px] my-4">EARPHONES</h2>

            <Link
              to=""
              className="text-[#000000]/60 tracking-[1px] font-bold text-[13px]"
            >
              SHOP <span className="text-[#D87D4A]">{">"}</span>
            </Link>
          </div>
        </div>

        {/* ================= BOTTOM CARDS DESKTOP ================= */}

        <div className="hidden md:flex gap-9 mt-40">
          {/* HEADPHONES */}
          <div className="bg-[#F1F1F1] rounded-lg flex flex-col items-center w-full pt-10 pb-8 relative ">
            <div className="-mt-33 mb-6">
              <img
                src={Headphone}
                alt="headphones"
                className="w-37.5 transition-transform duration-300 hover:scale-120 drop-shadow-[0_50px_20px_rgba(0,0,0,0.35)]"
              />
            </div>

            <h2 className="font-bold text-[18px] tracking-[1.29px] my-4">
              HEADPHONES
            </h2>

            <Link
              to=""
              className="text-[#000000]/60 tracking-[1px] font-bold text-[13px] hover:text-[#D87D4A]/50"
            >
              SHOP <span className="text-[#D87D4A]">{">"}</span>
            </Link>
          </div>

          {/* SPEAKERS */}
          <div className="bg-[#F1F1F1] rounded-lg flex flex-col items-center w-full pt-10 pb-8 relative">
            <div className="-mt-30 mb-6">
              <img
                src={Speakers}
                alt="speakers"
                className="w-37.5 transition-transform duration-300 hover:scale-120 drop-shadow-[0_50px_20px_rgba(0,0,0,0.35)]"
              />
            </div>

            <h2 className="font-bold text-[18px] tracking-[1.29px] my-4">
              SPEAKERS
            </h2>

            <Link
              to=""
              className="text-[#000000]/60 tracking-[1px] font-bold text-[13px] hover:text-[#D87D4A]/50"
            >
              SHOP <span className="text-[#D87D4A]">{">"}</span>
            </Link>
          </div>

          {/* EARPHONES */}
          <div className="bg-[#F1F1F1] rounded-lg flex flex-col items-center w-full pt-10 pb-8 relative">
            <div className="-mt-26 mb-6">
              <img
                src={Earphone}
                alt="earphones"
                className="w-37.5 transition-transform duration-300 hover:scale-120 drop-shadow-[0_50px_20px_rgba(0,0,0,0.35)]"
              />
            </div>

            <h2 className="font-bold text-[18px] tracking-[1.29px] my-4">
              EARPHONES
            </h2>

            <Link
              to=""
              className="text-[#000000]/60 tracking-[1px] font-bold text-[13px] hover:text-[#D87D4A]/50"
            >
              SHOP <span className="text-[#D87D4A]">{">"}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earphones;
