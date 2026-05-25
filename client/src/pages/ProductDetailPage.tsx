import React from "react";
import { HiPlusSm } from "react-icons/hi";
import { HiMiniMinusSmall } from "react-icons/hi2";
import { BiSolidChevronRight } from "react-icons/bi";
import MainHeadphone from "../assets/MainHeadphone.png";
import MainHeadphoneDesk from "../assets/MainHeadphoneDesk.png";
import BigHeadphone from "../assets/BigHeadphone.png";
import BigHeadphoneDesk from "../assets/BigHeadphoneDesk.png";
import BlackGoldHeadphone from "../assets/BlackGoldHeadphone.png";
import { MdChevronLeft } from "react-icons/md";
import Speaker from "../assets/Speaker.png";
import WhiteHeadphone from "../assets/WhiteHeadphone.png";
import Naira from "../assets/NairaSign.png";
import Swagg from "../assets/Swagg.png";
import SwaggDesk from "../assets/SwaggDesk.png";
import ManImg from "../assets/ManImg.png";
import ManImgDesk from "../assets/ManImgDesk.png";
import Earphone from "../assets/Earphone.png";
import Man from "../components/Man";
import { Link } from "react-router-dom";

const ProductDetailPage: React.FC = () => {
  return (
    <section className="w-93.75 px-6 flex flex-col gap-6 mx-auto items-center md:items-start pt-4 md:w-full md:px-41.25 md:pt-19.5 md:gap-30  ">
      <div className="flex items-start w-full cursor-pointer">
        <Link to="/">
          {" "}
          <p className="font-[Manrope] font-normal text-[15px] text-[#000000]/50 hover:text-[#D87D4A] md:hidden">
            Go Back
          </p>
        </Link>

        <div className="hidden md:flex flex-row gap-1.75 items-center cursor-pointer group ">
          <Link to="/headphones" className="flex gap-1.75 items-center ">
            {" "}
            <p className="text-[#000000]/50 font-[Manrope] font-medium text-[15px] group-hover:text-[#D87D4A]">
              Headphones
            </p>
            <MdChevronLeft className="text-[#000000]/50 font-[Manrope] font-medium text-[15px] group-hover:text-[#D87D4A] " />
          </Link>
          <p className="text-[#D87D4A] font-[Manrope] font-medium text-[15px] ">
            XX99 Mark II Headphones
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-8 ">
        <div className="bg-[#F1F1F1] flex items-center justify-center h-81.75 w-81.75 md:hidden">
          <img
            src={MainHeadphone}
            alt=""
            className="drop-shadow-[0_30px_25px_rgba(0,0,0,0.5)] hover:scale-105"
          />
        </div>

        <div className="flex flex-col items-start gap-22 md:gap-30  ">
          <div className="flex flex-col items-center md:justify-between md:flex-row md:gap-31.25 md:w-full ">
            <div className="bg-[#F1F1F1] md:items-center md:justify-center h-140 w-135 hidden md:flex ">
              {" "}
              <img src={MainHeadphoneDesk} alt="" className="hover:scale-105"/>{" "}
            </div>{" "}
            <div className="flex flex-col items-start text-start gap-6 md:gap-10 md:w-111.5 ">
              {" "}
              <div className="flex flex-col gap-6 items-start md:gap-2 ">
                {" "}
                <p className="text-[#D87D4A] text-[14px] tracking-[10px] uppercase font-normal font-[Manrope] ">
                  NEW PRODUCT
                </p>
                <h2 className="text-[28px] md:text-[40px] md:leading-11 md:tracking-[1.43px] text-[#000000] uppercase font-bold tracking-0 leading-[120%] ">
                  XX99 Mark II Headphones
                </h2>
              </div>
              <p className="text-[15px] text-[#000000]/50 leading-6.25 font-normal font-[Manrope]  ">
                The new XX99 Mark II headphones is the pinnacle of pristine
                audio. It redefines your premium headphone experience by
                reproducing the balanced depth and precision of studio-quality
                sound.
              </p>
              <p className="font-[Manrope] font-bold text-[18px] tracking-[1.29px] text-[#000000] md:hidden ">
                $ 2,999
              </p>
              <div className="md:flex hidden md:flex-row md:items-center md:gap-1 ">
                {" "}
                <img src={Naira} alt="" />{" "}
                <p className="font-[Manrope] font-bold text-[18px] text-[#000000] tracking-[1.29px] ">
                  29,999{" "}
                </p>
              </div>
              <div className="flex items-center gap-4 md:gap-3.75 ">
                <div className="flex items-center bg-[#F1F1F1] h-12 w-30 justify-between px-3 gap-5 ">
                  <HiMiniMinusSmall className="text-[#000000]/25 text-[16px] hover:text-[#D87D4A] cursor-pointer " />
                  <p className="text-[#000000] font-bold font-[Manrope] text-[13px]  ">
                    1
                  </p>
                  <HiPlusSm className="text-[#000000]/25 text-[16px] hover:text-[#D87D4A] cursor-pointer " />
                </div>

                <button className="h-12 w-40 px-8 py-4 md:w-47.5 bg-[#D87D4A] hover:bg-[#fbaf85] cursor-pointer ">
                  <p className="text-[13px] md:text-[16px] font-bold uppercase font-[Manrope] text-[#FFFFFF] leading-[100%] tracking-[1px] ">
                    {" "}
                    ADD TO CART
                  </p>{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-22 md:flex-row md:gap-31.25 md:justify-between ">
            {" "}
            <div className="flex flex-col items-start text-start gap-6 md:gap-8 ">
              <h4 className="font-[Manrope] font-bold text-[24px] md:text-[32px] md:tracking-[1.14px] uppercase tracking-[0.86px] text-[#000000] ">
                FEATURES
              </h4>

              <p className="font-[Manrope] font-normal text-[15px] md:leading-6.25 md:w-158.75 text-[#000000]/50 ">
                Featuring a genuine leather head strap and premium earcups,
                these headphones deliver superior comfort for those who like to
                enjoy endless listening. It includes intuitive controls designed
                for any situation. Whether you’re taking a business call or just
                in your own personal space, the auto on/off and pause features
                ensure that you’ll never miss a beat.
              </p>
              <p className="font-[Manrope] font-normal text-[15px] md:leading-6.25 md:w-158.75 text-[#000000]/50 pr-2 md:pr-3">
                The advanced Active Noise Cancellation with built-in equalizer
                allow you to experience your audio world on your terms. It lets
                you enjoy your audio in peace, but quickly interact with your
                surroundings when you need to. Combined with Bluetooth 5. 0
                compliant connectivity and 17 hour battery life, the XX99 Mark
                II headphones gives you superior sound, cutting-edge technology,
                and a modern design aesthetic.
              </p>
            </div>
            <div className="flex flex-col items-start gap-6 md:gap-8 ">
              <h4 className="font-[Manrope] uppercase font-bold text-[24px] md:text-[32px] md:tracking-[1.14px] tracking-[0.86px] text-[#000000] ">
                in the box
              </h4>
              <div className="flex-col flex items-start gap-2">
                {" "}
                <p className="text-[#D87D4A] font-bold text-[15px] font-[Manrope] flex gap-6 ">
                  {" "}
                  1x
                  <span className="text-[#000000]/50 font-normal text-[15px] font-[Manrope] ">
                    Headphone Unit
                  </span>
                </p>
                <p className="text-[#D87D4A] font-bold text-[15px] font-[Manrope] flex gap-6 ">
                  {" "}
                  2x
                  <span className="text-[#000000]/50 font-normal text-[15px] font-[Manrope] ">
                    Replacement Earcups
                  </span>
                </p>
                <p className="text-[#D87D4A] font-bold text-[15px] font-[Manrope] flex gap-6 ">
                  {" "}
                  1x
                  <span className="text-[#000000]/50 font-normal text-[15px] font-[Manrope] ">
                    User Manual
                  </span>
                </p>
                <p className="text-[#D87D4A] font-bold text-[15px] font-[Manrope] flex gap-6 ">
                  {" "}
                  1x
                  <span className="text-[#000000]/50 font-normal text-[15px] font-[Manrope] ">
                    3.5mm 5m Audio Cable
                  </span>
                </p>
                <p className="text-[#D87D4A] font-bold text-[15px] font-[Manrope] flex gap-6 ">
                  {" "}
                  1x
                  <span className="text-[#000000]/50 font-normal text-[15px] font-[Manrope] ">
                    Travel Bag
                  </span>
                </p>
              </div>{" "}
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 md:hidden">
            <img src={ManImg} alt="" className="rounded-lg  " />
            <img src={Swagg} alt="" className="rounded-lg  " />
            <img src={BigHeadphone} alt="" className="rounded-lg  " />
          </div>{" "}
          <div className="md:flex items-center gap-7.5 hidden">
            <div className="flex flex-col items-center gap-8  ">
              {" "}
              <img src={ManImgDesk} alt="" className="rounded-lg  " />
              <img src={SwaggDesk} alt="" className="rounded-lg  " />
            </div>
            <img src={BigHeadphoneDesk} alt="" className="rounded-lg  " />
          </div>{" "}
          <div className="flex flex-col items-center gap-10 w-81.75 md:gap-16 md:w-full ">
            <h4 className="text-[#000000] tracking-[0.86px] md:tracking-[1.14px] md:text-[32px] text-[24px] uppercase font-bold font-[Manrope] ">
              you may also like
            </h4>
            <div className="flex flex-col gap-14 items-center md:flex-row md:gap-7.5  ">
              <div className="flex flex-col gap-8 items-center md:gap-9 ">
                <div className="bg-[#F1F1F1] rounded-lg w-81.75 md:w-87.5 md:h-79.5 h-30 flex items-center justify-center ">
                  <img
                    src={BlackGoldHeadphone}
                    alt=""
                    className="md:w-37.25 md:h-48.25 "
                  />
                </div>

                <div className="flex flex-col gap-8 items-center ">
                  <h4 className="font-[Manrope] font-bold text-[24px] tracking-[1.71px] uppercase text-[#000000] ">
                    XX99 MARK I
                  </h4>
                  <button className="bg-[#D87D4A] text-[#FFFFFF] font-[Manrope] text-[13px] uppercase font-bold tracking-[1px] py-5 px-7.5 md:text-[16px] md:px-28.5 md:py-3 text-center hover:bg-[#fbaf85] cursor-pointer">
                    See Product
                  </button>
                </div>
              </div>{" "}
              <div className="flex flex-col gap-8 items-center md:gap-9 ">
                <div className="bg-[#F1F1F1] rounded-lg w-81.75 md:w-87.5 md:h-79.5 h-30 flex items-center justify-center ">
                  <img
                    src={WhiteHeadphone}
                    alt=""
                    className="md:w-47.75 md:h-49.75 "
                  />
                </div>

                <div className="flex flex-col gap-8 items-center ">
                  <h4 className="font-[Manrope] font-bold text-[24px] tracking-[1.71px] uppercase text-[#000000] ">
                    XX59
                  </h4>
                  <button className="bg-[#D87D4A] text-[#FFFFFF] font-[Manrope] text-[13px] uppercase font-bold tracking-[1px] py-5 px-7.5 md:text-[16px] md:px-28.5 md:py-3 text-center hover:bg-[#fbaf85] cursor-pointer">
                    {" "}
                    See Product
                  </button>
                </div>
              </div>{" "}
              <div className="flex flex-col gap-8 items-center md:gap-9 ">
                <div className="bg-[#F1F1F1] rounded-lg w-81.75 md:w-87.5 md:h-79.5 h-30 flex items-center justify-center ">
                  <img src={Speaker} alt="" className="md:w-35.75 md:h-43 " />
                </div>

                <div className="flex flex-col gap-8 items-center ">
                  <h4 className="font-[Manrope] font-bold text-[24px] tracking-[1.71px] uppercase text-[#000000] ">
                    ZX9 SPEAKER
                  </h4>
                  <button className="bg-[#D87D4A] text-[#FFFFFF] font-[Manrope] text-[13px] uppercase font-bold tracking-[1px] py-5 px-7.5 md:text-[16px] md:px-28.5 md:py-3 text-center hover:bg-[#fbaf85] cursor-pointer">
                    {" "}
                    See Product
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-30 items-center ">
            <div className="flex flex-col gap-4 items-center">
              <div className="flex flex-col items-center gap-18 md:flex-row md:gap-7.5 md:mt-20 ">
                <div className="relative">
                  <div className="bg-[#F1F1F1] flex flex-col items-center gap-9 rounded-lg  ">
                    <img
                      src={BlackGoldHeadphone}
                      alt=""
                      className="absolute -top-12 md:-top-20 drop-shadow-[0_30px_20px_rgba(0,0,0,0.5)] md:w-30.75 md:h-40 hover:scale-105 "
                    />

                    <div className="gap-4 flex flex-col items-center justify-end w-81.75 h-41.25 md:w-87.5 md:h-51 ">
                      <h5 className="font-[Manrope] text-[#000000] font-bold text-[15px] md:text-[18px] md:tracking-[1.29px] tracking-[1.07px] uppercase  ">
                        HEADPHONES
                      </h5>
                      <Link
                        to="/headphones"
                        className="group flex items-center gap-4 pb-5.5 cursor-pointer"
                      >
                        <p className="font-[Manrope] text-[#000000]/50 group-hover:text-[#D87D4A] font-bold tracking-[1px] text-[13px] uppercase">
                          Shop
                        </p>
                        <BiSolidChevronRight className="text-[#D87D4A] " />
                      </Link>
                    </div>
                  </div>{" "}
                </div>

                <div className="relative ">
                  <div className="bg-[#F1F1F1] flex flex-col items-center gap-9 rounded-lg">
                    <img
                      src={Speaker}
                      alt=""
                      className="absolute -top-12 md:-top-19 drop-shadow-[0_30px_20px_rgba(0,0,0,0.5)] md:w-30.5 md:h-[146px]  hover:scale-105 "
                    />

                    <div className="gap-4 flex flex-col items-center justify-end w-81.75 h-41.25 md:w-87.5 md:h-51  ">
                      <h5 className="font-[Manrope] text-[#000000] font-bold text-[15px] tracking-[1.07px] uppercase md:text-[18px] md:tracking-[1.29px]   ">
                        SPEAKERS
                      </h5>

                      <Link
                        to="/speakers"
                        className="group flex items-center gap-4 pb-5.5 cursor-pointer"
                      >
                        <p className="font-[Manrope] text-[#000000]/50 group-hover:text-[#D87D4A] font-bold tracking-[1px] text-[13px] uppercase">
                          Shop
                        </p>
                        <BiSolidChevronRight className="text-[#D87D4A] " />
                      </Link>
                    </div>
                  </div>{" "}
                </div>

                <div className="relative">
                  <div className="bg-[#F1F1F1] flex flex-col items-center gap-9 rounded-lg">
                    {" "}
                    <img
                      src={Earphone}
                      alt=""
                      className="absolute -top-12 md:-top-15 drop-shadow-[0_30px_20px_rgba(0,0,0,0.5)] md:w-[125px] md:h-[126px] hover:scale-105 "
                    />
                    <div className="gap-4 flex flex-col items-center justify-end w-81.75 h-41.25 md:w-87.5 md:h-51   ">
                      <h5 className="font-[Manrope] text-[#000000] font-bold text-[15px] tracking-[1.07px] uppercase md:text-[18px] md:tracking-[1.29px] ">
                        EARPHONES
                      </h5>

                      <Link
                        to="/earphones"
                        className="group flex items-center gap-4 pb-5.5 cursor-pointer"
                      >
                        <p className="font-[Manrope] text-[#000000]/50 group-hover:text-[#D87D4A] font-bold tracking-[1px] text-[13px] uppercase">
                          Shop
                        </p>
                        <BiSolidChevronRight className="text-[#D87D4A] " />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Man />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
