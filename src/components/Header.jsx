import React from "react";
import Logo from "../assets/Logo.png";
import SearchInput from "./SearchInput";
import NavBar from "./NavBar";
import Icons from "./Icons";
import Burger from "../assets/Burger.png";

export default function Header() {
  return (
    <div className="w-full flex justify-center py-6 lg:py-4  border-b border-[#B5B5B5] px-4  ">
      <div className="container flex justify-between items-center">
        <img src={Logo} alt="" />
        <SearchInput />
        <NavBar />
        <Icons />
        <img className="block lg:hidden" src={Burger} alt="" />
      </div>
    </div>
  );
}
