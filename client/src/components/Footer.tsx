import React from "react";
import { ImFacebook2 } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { ImTwitter } from "react-icons/im";
import { NavLink } from "react-router-dom";
import LogoM from "../assets/audiophileLogo.png";
import LogoD from "../assets/audiophileLogoDesk.png";

const Footer: React.FC = () => {
  return (
    <footer className="w-93.75 md:w-full flex flex-col bg-[#000000] items-center md:items-start md:px-41.25 ">
      <div className="bg-[#D87D4A] w-25.25 h-1 "></div>

      <div className="flex flex-col px-5 items-center py-12 gap-12 md:items-start md:px-0 md:w-full md:gap-8 ">
        <img src={LogoM} alt="" className="md:hidden" />

        <div className="md:flex md:flex-row md:items-center md:justify-between md:w-full ">
          <img src={LogoD} alt="" className="hidden md:flex" />{" "}
          <div className="flex flex-col items-center gap-5 md:flex-row md:gap-7 ">
            {" "}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[13px] font-bold tracking-[2px] text-[#D87D4A] font-[Manrope] uppercase "
                  : "text-[13px] font-bold tracking-[2px] uppercase text-[#FFFFFF] hover:text-[#fbaf85] font-[Manrope]"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/headphones"
              className={({ isActive }) =>
                isActive
                  ? "text-[13px] font-bold tracking-[2px] text-[#D87D4A] font-[Manrope] uppercase "
                  : "text-[13px] font-bold tracking-[2px] uppercase text-[#FFFFFF] hover:text-[#fbaf85] font-[Manrope]"
              }
            >
              Headphones
            </NavLink>
            <NavLink
              to="/speakers"
              className={({ isActive }) =>
                isActive
                  ? "text-[13px] font-bold tracking-[2px] text-[#D87D4A] font-[Manrope] uppercase "
                  : "text-[13px] font-bold tracking-[2px] uppercase text-[#FFFFFF] hover:text-[#fbaf85] font-[Manrope]"
              }
            >
              Speakers
            </NavLink>
            <NavLink
              to="/earphones"
              className={({ isActive }) =>
                isActive
                  ? "text-[13px] font-bold tracking-[2px] text-[#D87D4A] font-[Manrope] uppercase "
                  : "text-[13px] font-bold tracking-[2px] uppercase text-[#FFFFFF] hover:text-[#fbaf85] font-[Manrope]"
              }
            >
              Earphones
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col items-center gap-12.75 md:flex md:flex-row md:items-center md:justify-between md:w-full  ">
          {" "}
          <div className="flex flex-col items-center gap-13 md:flex md:flex-col md:items-start md:w-135 md:gap-14  ">
            {" "}
            <p className="font-[Manrope] text-[#FFFFFF]/50 text-[15px] leading-6.25 tracking-normal font-normal md:font-medium px-2 md:px-0 md:text-start ">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we're open 7 days a week.
            </p>
            <p className="font-[Manrope] text-[#FFFFFF]/50 text-[15px] font-bold ">
              Copyright 2021. All Rights Reserved
            </p>
          </div>
          <div className="flex text-[#FFFFFF] gap-4 items-center ">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="text-[#FFFFFF] hover:text-[#fbaf85]"
            >
              <ImFacebook2 className="h-6 w-6 " />{" "}
            </a>{" "}
            <a
              href="https://www.x.com/"
              target="_blank"
              className="hover:text-[#fbaf85] "
            >
              {" "}
              <ImTwitter className="h-6 w-6 " />{" "}
            </a>{" "}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="hover:text-[#fbaf85] "
            >
              {" "}
              <GrInstagram className="h-6 w-6 " />{" "}
            </a>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
