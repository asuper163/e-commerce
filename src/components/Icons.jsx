import React from "react";
import Cart from "../assets/Cart.png";
import Favorites from "../assets/Favorites.png";
import UserIcon from "../assets/UserIcon.png";

export default function Icons() {
  return (
    <div className="hidden lg:flex gap-8 items-center ">
      <img src={Favorites} alt="" />
      <img src={Cart} alt="" />
      <img src={UserIcon} alt="" />
    </div>
  );
}
