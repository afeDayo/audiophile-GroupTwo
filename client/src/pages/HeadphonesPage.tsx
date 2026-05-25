import React from "react";
import XX99II from "../assets/XX99 MARK II.png";
import XX99I from "../assets/XX99 MARK I.png";
import XX59 from "../assets/XX59.png";
import Headphone from "../assets/Headphones.png";
import Speakers from "../assets/speakers.png";
import Earphone from "../assets/Earphones.png";
import { Link } from "react-router-dom";

const Headphones: React.FC = () => {
  return (
    <div>
      <div className="bg-[#FAFAFA] px-6 py-20 mt-30 md:px-20 lg:px-40">
        {/* ================= FIRST PRODUCT ================= */}

        {/* MOBILE */}
        <div className="flex flex-col gap-10 mb-32 md:hidden">
          <div className="bg-[#F1F1F1] rounded-lg flex justify-center items-center p-10">
            <img src={XX99II} alt="xx99 mark 2" />
          </div>

          <div className="text-center">
            <p className="text-[#D87D4A] text-[14px] tracking-[10px] mb-5">
              NEW PRODUCT
            </p>

            <h1 className="text-[40px] leading-11 tracking-[1.43px] font-bold mb-8">
              XX99 MARK II <br /> HEADPHONES
            </h1>

            <p className="text-[#000000]/40 text-[15px] leading-6 mb-10 w-81.75">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>

            <Link
              to=""
              className="bg-[#D87D4A] text-white px-8 py-4 inline-block  active:bg-[#D87D4A]/20 hover:bg-[#D87D4A]/50"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex flex-col gap-10 mb-40">
          <div className="flex items-center gap-20">
            <div className="bg-[#F1F1F1] rounded-lg flex justify-center items-center p-10 w-full">
              <img src={XX99II} alt="xx99 mark 2" className="" />
            </div>

            <div className="w-full text-start">
              <p className="text-[#D87D4A] text-[14px] tracking-[10px] mb-5">
                NEW PRODUCT
              </p>

              <h1 className="text-[40px] leading-11 tracking-[1.43px] font-bold mb-8">
                XX99 MARK II <br /> HEADPHONES
              </h1>

              <p className="text-[#000000]/40 text-[15px] leading-6 mb-10 w-[449.5px]">
                The new XX99 Mark II headphones is the pinnacle of pristine
                audio. It redefines your premium headphone experience by
                reproducing the balanced depth and precision of studio-quality
                sound.
              </p>

              <Link
                to=""
                className="bg-[#D87D4A] text-white px-8 py-4 inline-block  active:bg-[#D87D4A]/20 hover:bg-[#D87D4A]/50"
              >
                SEE PRODUCT
              </Link>
            </div>
          </div>
        </div>

        {/* ================= SECOND PRODUCT ================= */}

        {/* MOBILE */}
        <div className="flex flex-col gap-10 mb-32 md:hidden">
          <div className="bg-[#F1F1F1] rounded-lg flex justify-center items-center p-10">
            <img src={XX99I} alt="xx99 mark 1" />
          </div>

          <div className="text-center">
            <h1 className="text-[40px] leading-11 tracking-[1.43px] font-bold mb-8">
              XX99 MARK I <br /> HEADPHONES
            </h1>

            <p className="text-[#000000]/40 text-[15px] leading-6 mb-10 w-81.75">
              As the gold standard for headphones, the classic XX99 Mark I
              offers detailed and accurate audio reproduction for audiophiles,
              mixing engineers, and music aficionados alike in studios and on
              the go.
            </p>

            <Link
              to=""
              className="bg-[#D87D4A] text-white px-8 py-4 inline-block active:bg-[#D87D4A]/20 hover:bg-[#D87D4A]/50"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex flex-col gap-10 mb-40">
          <div className="flex items-center gap-20">
            <div className="w-full text-start">
              <h1 className="text-[40px] leading-11 tracking-[1.43px] font-bold mb-8">
                XX99 MARK I <br /> HEADPHONES
              </h1>

              <p className="text-[#000000]/40 text-[15px] leading-6 mb-10 w-111.25">
                As the gold standard for headphones, the classic XX99 Mark I
                offers detailed and accurate audio reproduction for audiophiles,
                mixing engineers, and music aficionados alike in studios and on
                the go.
              </p>

              <Link
                to=""
                className="bg-[#D87D4A] text-white px-8 py-4 inline-block  active:bg-[#D87D4A]/20 hover:bg-[#D87D4A]/50"
              >
                SEE PRODUCT
              </Link>
            </div>

            <div className="bg-[#F1F1F1] rounded-lg flex justify-center items-center p-10 w-full">
              <img src={XX99I} alt="xx99 mark 1" className="" />
            </div>
          </div>
        </div>

        {/* ================= THIRD PRODUCT ================= */}

        {/* MOBILE */}
        <div className="flex flex-col gap-10 mb-32 md:hidden">
          <div className="bg-[#F1F1F1] rounded-lg flex justify-center items-center p-10">
            <img src={XX59} alt="xx59 headphones" />
          </div>

          <div className="text-center">
            <h1 className="text-[40px] leading-11 tracking-[1.43px] font-bold mb-8">
              XX59 <br /> HEADPHONES
            </h1>

            <p className="text-[#000000]/40 text-[15px] leading-6 mb-10 w-81.75">
              Enjoy your audio almost anywhere and customize it to your specific
              tastes with the XX59 headphones. The stylish yet durable versatile
              wireless headset is a brilliant companion at home or on the move.
            </p>

            <Link
              to=""
              className="bg-[#D87D4A] text-white px-8 py-4 inline-block  active:bg-[#D87D4A]/20 hover:bg-[#D87D4A]/50"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex flex-col gap-10 mb-40">
          <div className="flex items-center gap-20">
            <div className="bg-[#F1F1F1] rounded-lg flex justify-center items-center p-10 w-full">
              <img src={XX59} alt="xx59 headphones" />
            </div>

            <div className="w-full text-start">
              <h1 className="text-[40px] leading-11 tracking-[1.43px] font-bold mb-8">
                XX59 <br /> HEADPHONES
              </h1>

              <p className="text-[#000000]/40 text-[15px] leading-6 mb-10 w-111.25">
                Enjoy your audio almost anywhere and customize it to your
                specific tastes with the XX59 headphones. The stylish yet
                durable versatile wireless headset is a brilliant companion at
                home or on the move.
              </p>

              <Link
                to=""
                className="bg-[#D87D4A] text-white px-8 py-4 inline-block  active:bg-[#D87D4A]/20 hover:bg-[#D87D4A]/50"
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
              className="text-[#000000]/60 tracking-[1px] font-bold text-[13px] hover:text-[#D87D4A]/50"
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
              className="text-[#000000]/60 tracking-[1px] font-bold text-[13px] hover:text-[#D87D4A]/50"
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
              className="text-[#000000]/60 tracking-[1px] font-bold text-[13px] hover:text-[#D87D4A]/50"
            >
              SHOP <span className="text-[#D87D4A]">{">"}</span>
            </Link>
          </div>
        </div>

        {/* ================= BOTTOM CARDS DESKTOP ================= */}

        <div className="hidden md:flex gap-9 mt-40">
          {/* HEADPHONES */}
          <div className="bg-[#F1F1F1] rounded-lg flex flex-col items-center w-full pt-10 pb-8 relative">
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

export default Headphones;
