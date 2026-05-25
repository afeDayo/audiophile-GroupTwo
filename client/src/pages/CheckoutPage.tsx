import React, { useState } from "react";
import earphone from "../assets/image-removebg-preview(47).png";
import earphone2 from "../assets/Frame 119.png";
import speaKer from "../assets/Frame 120.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const CheckoutPage: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [agreeTerms, setAgreeTerms] = useState(false);

  return (
    <div className="bg-[#F7F7F7] min-h-screen flex justify-center font-[Manrope] px-4 sm:px-6 py-6 overflow-x-hidden">
      <div className="w-full max-w-[1110px]">
        {/* Go Back */}
        <button className="text-sm md:hidden text-[#00000080] flex mb-6 hover:text-[#D87D4A] transition">
          Go Back
        </button>

        {/* Progress Indicator */}
        <div className="flex items-center gap-3 mb-8 text-sm font-semibold text-[#00000080]">
          <span className="text-[#D87D4A]">Cart</span>

          <span>
            <IoIosArrowRoundForward />
          </span>

          <span className="text-[#D87D4A]">Checkout</span>

          <span>
            <IoIosArrowRoundForward />
          </span>

          <span>Payment</span>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 text-left">
          {/* Checkout Form */}
          <div className="bg-[#F7F7F7] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-6 sm:p-8 md:p-10">
            <h1 className="text-[#000000] text-[28px] md:text-[32px] font-bold uppercase tracking-[2px] mb-10">
              Checkout
            </h1>

            {/* Billing Details */}
            <div className="pb-10 border-b border-[#ECECEC]">
              <h2 className="text-[#D87D4A] uppercase text-[15px] tracking-[2px] font-bold mb-5">
                Billing Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-bold">Name</label>

                  <input
                    className="border border-[#E5E5E5] p-4 rounded-xl outline-none focus:border-[#D87D4A]"
                    placeholder="Alexei Ward"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-bold">Email Address</label>

                  <input
                    className="border border-[#E5E5E5] p-4 rounded-xl outline-none focus:border-[#D87D4A]"
                    placeholder="alexei@mail.com"
                  />
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-[13px] font-bold">Phone Number</label>

                  <input
                    className="border border-[#E5E5E5] p-4 rounded-xl outline-none focus:border-[#D87D4A]"
                    placeholder="+234 812 345 6789"
                  />
                </div>
              </div>
            </div>

            {/* Shipping */}
            <div className="py-10 border-b border-[#ECECEC]">
              <h2 className="text-[#D87D4A] uppercase text-[15px] tracking-[2px] font-bold mb-5">
                Shipping Info
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-[13px] font-bold">Address</label>

                  <input
                    className="border border-[#E5E5E5] p-4 rounded-xl outline-none focus:border-[#D87D4A]"
                    placeholder="1137 Williams Avenue"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-bold">ZIP Code</label>

                  <input
                    className="border border-[#E5E5E5] p-4 rounded-xl outline-none focus:border-[#D87D4A]"
                    placeholder="100001"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-bold">City</label>

                  <input
                    className="border border-[#E5E5E5] p-4 rounded-xl outline-none focus:border-[#D87D4A]"
                    placeholder="Lagos"
                  />
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-[13px] font-bold">Country</label>

                  <input
                    className="border border-[#E5E5E5] p-4 rounded-xl outline-none focus:border-[#D87D4A]"
                    placeholder="Nigeria"
                  />
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="pt-10">
              <h2 className="text-[#D87D4A] uppercase text-[15px] tracking-[2px] font-bold mb-5">
                Payment Details
              </h2>

              <p className="text-[13px] font-bold mb-4">Payment Method</p>

              <div className="space-y-4">
                {[
                  { value: "card", label: "Card Payment" },
                  { value: "cod", label: "Cash on Delivery" },
                  { value: "emoney", label: "e-Money" },
                ].map((opt) => (
                  <label
                    key={opt.value}
                    className={`flex items-center gap-4 border p-4 rounded-xl cursor-pointer ${
                      paymentMethod === opt.value
                        ? "border-[#D87D4A] bg-[#FFF8F5]"
                        : "border-[#E5E5E5]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={opt.value}
                      checked={paymentMethod === opt.value}
                      onChange={() => setPaymentMethod(opt.value)}
                      className="accent-[#D87D4A]"
                    />

                    <span className="font-semibold text-sm">{opt.label}</span>
                  </label>
                ))}
              </div>

              {paymentMethod === "emoney" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                  <input
                    className="border border-[#E5E5E5] p-4 rounded-xl outline-none focus:border-[#D87D4A]"
                    placeholder="e-Money Number"
                  />

                  <input
                    className="border border-[#E5E5E5] p-4 rounded-xl outline-none focus:border-[#D87D4A]"
                    placeholder="e-Money PIN"
                  />
                </div>
              )}

              <label className="flex items-start gap-3 mt-6 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={() => setAgreeTerms(!agreeTerms)}
                  className="mt-1 accent-[#D87D4A]"
                />

                <span className="text-sm text-[#00000080] leading-[22px]">
                  I have read and agree to the Terms and Conditions
                </span>
              </label>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-5 rounded">
            {/* SUMMARY */}
            <div className="bg-[#F7F7F7] border border-[#E5E5E5]">
              <div className=" px-5 py-4">
                <h2 className="text-[24px] font-extrabold uppercase">
                  SUMMARY
                </h2>
              </div>

              <div className="px-5 py-5 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[13px] font-bold uppercase text-[#555]">
                    SUBTOTAL
                  </span>

                  <span className="text-[14px] font-bold">₦ 89,997</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[13px] font-bold uppercase text-[#555]">
                    SHIPPING & HANDLING
                  </span>

                  <span className="text-[14px] font-bold text-[#D87D4A]">
                    FREE
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <span className="text-[13px] font-bold uppercase text-[#555]">
                      TAXES
                    </span>

                    <span className="text-[#D87D4A] text-[12px]">ⓘ</span>
                  </div>

                  <span className="text-[14px] font-bold">₦ 9,000</span>
                </div>

                <div className="border-t border-[#ECECEC] pt-4 flex justify-between items-center">
                  <span className="text-[15px] font-extrabold uppercase">
                    TOTAL
                  </span>

                  <span className="text-[22px] font-extrabold text-[#D87D4A]">
                    ₦ 98,997
                  </span>
                </div>
              </div>
            </div>

            {/* CART */}
            <div className="bg-white border border-[#E5E5E5]">
              {/* Header */}
              <div className="bg-[#EDEDED] px-5 py-4 border-b border-[#ECECEC]">
                <h2 className="text-[24px] font-extrabold uppercase">
                  IN YOUR CART (3)
                </h2>
              </div>

              {/* Arrival */}
              <div className="px-5 py-4 border-b border-[#ECECEC]">
                <p className="text-[14px] font-bold uppercase text-[#555]">
                  ARRIVES 18/11 - 26/11
                </p>
              </div>

              {/* Products */}
              <div className="px-5 py-5 border-b border-[#ECECEC] space-y-6">
                {[
                  {
                    img: earphone,
                    name: "XX99 MK II",
                    color: "Black",
                    colorCode: "bg-black",
                    price: "₦ 29,999",
                    qty: "Qty : 1",
                  },
                  {
                    img: earphone2,
                    name: "XX59",
                    color: "White",
                    colorCode: "bg-white",
                    price: "₦ 29,999",
                    qty: "Qty : 2",
                  },
                  {
                    img: speaKer,
                    name: "YX1 Speaker",
                    color: "Black",
                    colorCode: "bg-black",
                    price: "₦ 29,999",
                    qty: "Qty : 1",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    {/* Image */}
                    <div className="w-[110px] h-[80px] flex items-center justify-center">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full object-contain"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1">
                      <p className="text-[14px] font-bold leading-5">
                        {item.name}
                      </p>

                      {/* Product Color */}
                      <div className="flex items-center gap-2 mt-2">
                        <span
                          className={`w-3 h-3 rounded-full border border-[#D9D9D9] ${item.colorCode}`}
                        ></span>

                        <p className="text-[12px] text-[#666] font-medium">
                          {item.color}
                        </p>
                      </div>

                      <p className="text-[12px] text-[#666] mt-2">{item.qty}</p>

                      {/* Price */}
                      <p className="text-[15px] font-extrabold text-[#D87D4A] mt-3">
                        {item.price}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Edit Cart */}
                <button className="text-[12px] underline text-[#666] hover:text-[#D87D4A] transition">
                  Edit Cart
                </button>
              </div>

              {/* Shipping */}
              <div className="px-5 py-5">
                <h3 className="text-[20px] font-extrabold uppercase mb-3">
                  SHIPPING & DELIVERY
                </h3>

                <p className="text-[13px] text-[#666] leading-6">
                  Orders are delivered on business days (Monday-Friday)
                  excluding public holidays.
                </p>

                <button className="text-[13px] underline mt-2 text-[#444] hover:text-[#D87D4A] transition">
                  See details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
