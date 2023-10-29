"use client";

import React from "react";
import { CarProps } from "./../Types/index";
import { calculateCarRate, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import { CustomButton } from ".";
import CardDetails from "./CardDetails";

interface CarCardProps {
  car: CarProps;
}

function CarCard({ car }: CarCardProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const { year, city_mpg, model, make, drive, transmission } = car;

  const carRent = calculateCarRate(city_mpg, year);
  return (
    <div className="car-card group my-5">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {model} &nbsp;
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
          src={generateCarImageUrl(car)}
          fill
          priority
          alt="logo"
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible justify-between text-gray w-full">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              alt="steering-icon"
              width={20}
              height={20}
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" alt="steering-icon" width={20} height={20} />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" alt="steering-icon" width={20} height={20} />
            <p className="text-[14px]">{city_mpg}MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="view more"
            containerStyles="bg-primary-blue w-full py-[16px] rounded-full text-white"
            rightIcon="/right-arrow.svg"
            textStyle="text-white leading-[17px] font-bold  text-[14px]"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CardDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
}

export default CarCard;
