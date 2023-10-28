import React from "react";
import { CarProps } from "./../Types/index";
import { calculateCarRate } from "@/utils";
import Image from "next/image";

interface CarCardProps {
  car: CarProps;
}

function CarCard({ car }: CarCardProps) {
  const { year, city_mpg, model, make, drive, transmission } = car;

  const carRent = calculateCarRate(city_mpg, year);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {model}
          {make}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-bold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-semibold">/day</span>
      </p>
      <div className="relative w-full object-contain  h-40 my-3">
        <Image
          src="/hero.png"
          fill
          priority
          alt="logo"
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default CarCard;
