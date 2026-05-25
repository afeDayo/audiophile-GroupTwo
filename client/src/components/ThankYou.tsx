import React from "react";
import { Link } from "react-router-dom";
import earPhone from "../assets/image-removebg-preview(47).png";
import circleImage from "../assets/Oval.png";
import checkImage from "../assets/Path 4.png";

const ThankYouPage: React.FC = () => {
  return (
    <div className="bg-[#F7F7F7] flex items-center justify-center min-h-screen font-[Manrope] px-4 py-6">
      <div className="w-full max-w-[540px] bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-6 sm:p-10">
        {/* Success Icon */}
        <div className="relative w-16 h-16 mb-8">
          <img src={circleImage} alt="circle" className="w-16 h-16" />

          <img
            src={checkImage}
            alt="check"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6"
          />
        </div>

        {/* Heading */}
        <h1 className="text-[26px] text-left sm:text-[32px] font-bold uppercase tracking-[1px] text-[#000000] mb-4 leading-[1.2]">
          Thank You <br /> For Your Order
        </h1>

        {/* Message */}
        <p className="text-[14px] sm:text-[15px] text-[#00000080] leading-[24px] mb-8">
          You will receive an email confirmation shortly.
        </p>

        {/* Order Summary */}
        <div className="flex flex-col md:flex-row rounded-xl overflow-hidden mb-8 shadow-sm">
          {/* LEFT SIDE */}
          <div className="bg-[#F1F1F1] p-5 sm:p-6 flex-1">
            {/* Product */}
            <div className="flex items-center gap-4">
              {/* IMAGE */}
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#F7F7F7] to-[#EAEAEA] flex items-center justify-center overflow-hidden">
                <img
                  src={earPhone}
                  alt="product"
                  className="w-[85%] h-[85%] object-contain"
                />
              </div>

              {/* INFO */}
              <div className="flex-1 min-w-0">
                <h3 className="text-[15px] font-bold text-[#000000]">
                  XX99 MK II
                </h3>

                <p className="text-[13px] text-[#00000080]">₦ 29,999</p>
              </div>

              {/* QTY */}
              <span className="bg-[#E5E5E5] px-3 py-1 rounded-full text-xs font-bold text-[#00000080]">
                x1
              </span>
            </div>

            {/* Divider */}
            <div className="border-t border-[#00000015] my-4"></div>

            {/* MORE ITEMS */}
            <p className="text-center text-[12px] text-[#00000080]">
              and 2 other item(s)
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-[#000000] px-6 py-8 md:w-[200px] flex flex-col justify-center">
            <p className="text-[13px] uppercase text-[#FFFFFF80] mb-2">
              Grand Total
            </p>

            <h2 className="text-[20px] font-bold text-white">₦ 5,446</h2>
          </div>
        </div>

        {/* BUTTON */}
        <Link to="/HomePage">
          <button className="w-full h-12 bg-[#D87D4A] hover:bg-[#FBAF85] transition-all duration-300 text-white text-[13px] font-bold uppercase tracking-[1px] rounded-lg hover:scale-[1.02] active:scale-[0.98]">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
