import React from "react";
import ArrowUp from "../assets/ArrowUp.png";
import SearchInput from "./SearchInput";
import FilterMenu from "./FilterMenu";

export default function LeftSide() {
  return (
    <div className="flex flex-col gap-4 just">
      <div className="flex md:hidden lg:hidden items-center gap-4">
        <img src={ArrowUp} className="rotate-180 cursor-pointer" />
        <p className="">Filters</p>
      </div>
      <div className="flex items-center justify-between gap-10 border-b-[0.5px] pb-3 border-[#B5B5B5]">
        <p className="font-medium text-[18px] leading-6 tracking-[3%]  ">
          Categories
        </p>
        <img src={ArrowUp} className="rotate-180 cursor-pointer" />
      </div>

      <SearchInput />

      <FilterMenu />
    </div>
  );
}
