import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logopic from "../assets/Vector.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import desktoplogo from "../assets/Vector-desktop.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div>
      {/* MOBILE NAV */}

      <nav className="md:hidden flex flex-col  m-auto max-w-full w-full  fixed top-0  z-50 ">
        <div className=" md:hidden bg-[#101010] py-7.5 flex justify-around px-1 max-w-full mx-auto m-auto w-full shadow-md">
          <GiHamburgerMenu className="text-[#FFFFFF] text-[25px]" />
          <div className="flex gap-[8.94px] ">
            <img src={logopic} alt="" />
            <p className="text-[#FFFFFF] pt-1">AUDIOPHILE</p>
          </div>
          <AiOutlineShoppingCart className="text-[#FFFFFF] text-[25px]" />
        </div>
        <div className="md:hidden border-2 border-[#7D7D7D] relative"></div>
        <div className="md:hidden border-10 border-[#101010] relative"></div>
      </nav>

      {/* DESKTOP NAV */}
      <nav className="hidden md:flex justify-between  bg-[#101010] px-40 py-7 max-w-360 w-full fixed top-0 z-50">
        <div className="flex gap-3 justify-center">
          <img src={desktoplogo} alt="" />
          <p className="text-[#FFFFFF] text-[15px] font-bold tracking-[2px] pt-2">
            AUDIOPHILE
          </p>
        </div>

        <div className="flex gap-8.5 pt-2">
          <NavLink
            to="/header"
            className={({ isActive }) =>
              isActive
                ? "text-[16px] font-bold tracking-[2px]  text-[#D87D4A]"
                : "text-[16px] font-bold tracking-[2px]  text-[#FFFFFF] hover:text-[#D87D4A]/50"
            }
          >
            HOME
          </NavLink>

          <NavLink
            to="/headphones"
            className={({ isActive }) =>
              isActive
                ? "text-[16px] font-bold tracking-[2px]  text-[#D87D4A]"
                : "text-[16px] font-bold tracking-[2px]  text-[#FFFFFF] hover:text-[#D87D4A]/50"
            }
          >
            HEADPHONES
          </NavLink>

          <NavLink
            to="/speakers"
            className={({ isActive }) =>
              isActive
                ? "text-[16px] font-bold tracking-[2px]  text-[#D87D4A]"
                : "text-[16px] font-bold tracking-[2px]  text-[#FFFFFF] hover:text-[#D87D4A]/50"
            }
          >
            SPEAKERS
          </NavLink>

          <NavLink
            to="/earphones"
            className={({ isActive }) =>
              isActive
                ? "text-[16px] font-bold tracking-[2px]  text-[#D87D4A]"
                : "text-[16px] font-bold tracking-[2px]  text-[#FFFFFF] hover:text-[#D87D4A]/50"
            }
          >
            EARPHONES
          </NavLink>
        </div>

        <div className="flex gap-6">
         
         <NavLink
            to="/roller"
            className={({ isActive }) => `flex gap-4 pt-2 ${
              isActive
                ? "text-[16px] font-bold tracking-[2px]  text-[#D87D4A]"
                : "text-[16px] font-bold tracking-[2px]  text-[#FFFFFF] hover:text-[#D87D4A]/50"
            
              }`
            }
          >
            <AiOutlineShoppingCart className="text-[25px]" />
            CART
          </NavLink>
          
          <div className="flex gap-4">
            <Link
              to=""
              className="border-[#FFFFFF] border p-2.5 text-[#FFFFFF] active:bg-[#FFFFFF]/20 hover:bg-[#FFFFFF]/50"
            >
              LOG IN
            </Link>
            <Link
              to=""
              className="border-[#D87D4A] bg-[#D87D4A] text-[#FFFFFF] p-2.5  active:bg-[#D87D4A]/20 hover:bg-[#D87D4A]/50"
            >
              {" "}
              SIGN UP
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
