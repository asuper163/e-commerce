import React from "react";
import SearchIcon from "../assets/SearchIcon.png";

export default function SearchInput() {
  return (
    <div className="hidden lg:flex bg-[#F5F5F5] gap-2 rounded-lg p-4 items-center ">
      <img src={SearchIcon} alt="" />

      <input
        className="focus:outline-none"
        placeholder="Search"
        type="text sm:hidden md:hidden lg:flex"
      />
    </div>
  );
}
