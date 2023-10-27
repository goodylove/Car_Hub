import React from "react";
import { CarProps } from "./../Types/index";

interface CarCardProps {
  car: CarProps;
}

function CarCard({ car }: CarCardProps) {
  const { year, city_mpg, model, make, drive, transmission } = car;
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {model}
          {make}
        </h2>
      </div>
    </div>
  );
}

export default CarCard;
