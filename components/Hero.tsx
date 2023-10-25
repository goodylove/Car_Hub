"use client";

import React from "react";
import { CustomButton } from ".";
import Image from "next/image";

function Hero() {
  const handscroll: any = function () {};
  return (
    <div className="hero">
      <div className="flex-1 padding-x pt-36">
        <h2 className="hero__title">
          Find, book or Rent a car -- quickly and easily
        </h2>
        <p className="hero__subtitle">
          Streamline your car rental experience with effortless booking process
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handscroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="car" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
}

export default Hero;
