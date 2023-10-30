import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  btnType?: "button" | " submit";
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  textStyle?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface ManifacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;

  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface CradDetailsProps {
  isOpen?: boolean;
  closeModal?: () => void;
  car: CarProps;
}

export interface FilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

export interface OptionProps {
  title: string;
  value: string;
}
export interface CustomFliterProps {
  title: string;
  option: OptionProps[];
}
