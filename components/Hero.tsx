"use client";

import React from "react";
import { CustomButton } from ".";

function Hero() {
  const handscroll: any = function () {};
  return (
    <div className="hero">
      <div className="flex-1 padding-x pt-36">
        <h1 className="hero__title">
          Find, book or Rent a car --- quickly and easily
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with effortless booking process
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handscroll}
        />
      </div>
    </div>
  );
}

export default Hero;
