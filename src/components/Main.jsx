import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function Main() {
  return (
    <div className="w-full flex justify-center py-10 px-4 ">
      <div className="container flex gap-8 flex-col  lg:flex-row ">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
}
