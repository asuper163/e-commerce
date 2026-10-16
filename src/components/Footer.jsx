import React from "react";
import Twitter from "../assets/Twitter.png";
import Facebook from "../assets/Facebook.png";
import Tiktok from "../assets/Tiktok.png";
import Instgram from "../assets/Instagram.png";
import LogoFooter from "../assets/LogoFooter.png";

export default function Footer() {
  return (
    <div className="bg-[#121212] w-full flex flex-col  py-10 px-4 gap-8">
      <div className="container flex gap-8 justify-between mx-auto flex-col lg:flex-row  ">
        <div className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-start">
          <img src={LogoFooter} alt="" />
          <p className="text-center lg:text-left font-normal lg:font-medium text-[13px] lg:text-[14px] text-[#CFCFCF] leading-6 lg:leading-[171%] whitespace-pre-line ">
            {`We are a residential interior design firm located in Portland.
            Our boutique-studio offers more than`}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-around text-center lg:text-start gap-8 lg:w-[60%]  ">
          <div className="flex flex-col gap-2 ">
            <p className="font-semibold text-[16px] leading-4 text-white">
              Services
            </p>
            <p className="font-normal text-[14px] leading-8 text-[#CFCFCF]">
              Bonus program
            </p>
            <p className="font-normal text-[14px] leading-8 text-[#CFCFCF]">
              Gift cards
            </p>
            <p className="font-normal text-[14px] leading-8 text-[#CFCFCF]">
              Credit and payment
            </p>
            <p className="font-normal text-[14px] leading-8 text-[#CFCFCF]">
              Service contracts
            </p>
            <p className="font-normal text-[14px] leading-8 text-[#CFCFCF]">
              Non-cash account
            </p>
            <p className="font-normal text-[14px] leading-8 text-[#CFCFCF]">
              Payment
            </p>
          </div>

          <div className="flex flex-col gap-2 ">
            <p className="font-semibold text-[16px] leading-4 text-white">
              Assistance to the buyer
            </p>
            <p className="font-normal text-[14px] leading-8 text-[#CFCFCF]">
              Find an order
            </p>
            <p className="font-normal text-[14px] leading-8 text-[#CFCFCF]">
              Terms of delivery
            </p>
            <p className="font-normal text-[14px] leading-8 text-[#CFCFCF]">
              Exchange and return of goods
            </p>
            <p className="font-normal text-[14px] leading-8 text-[#CFCFCF]">
              Guarantee
            </p>
            <p className="font-normal text-[14px] leading-8 text-[#CFCFCF]">
              Frequently asked questions
            </p>
            <p className="font-normal text-[14px] leading-8 text-[#CFCFCF]">
              Terms of use of the site
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center lg:justify-start container mx-auto gap-9 items-center ">
        <img src={Twitter} alt="" />
        <img src={Facebook} alt="" />
        <img src={Tiktok} alt="" />
        <img src={Instgram} alt="" />
      </div>
    </div>
  );
}
