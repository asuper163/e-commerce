import React from "react";

export default function NavBar() {
  return (
    <div className="hidden lg:flex">
      <ul className="flex gap-13 items-center">
        <li className="font-medium leading-[100%] active:text-black text-[#656565] cursor-pointer">
          Home
        </li>
        <li className="font-medium leading-[100%] active:text-black text-[#656565] cursor-pointer">
          About
        </li>
        <li className="font-medium leading-[100%] active:text-black text-[#656565] cursor-pointer">
          Contact Us
        </li>
        <li className="font-medium leading-[100%] active:text-black text-[#656565] cursor-pointer">
          Blog
        </li>
      </ul>
    </div>
  );
}
