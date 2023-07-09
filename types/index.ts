import { MouseEventHandler } from "react";

export interface CustomButtonProps { 
  title: string,
  containerStyles?: string,
  handleClick?: MouseEventHandler<HTMLButtonElement>,
  titleStyles?: string,
  rightIcon?: string,
  btnType?: 'button' | 'submit';
}

export interface SearchBrandProps {
  brand: string,
  setBrand: (brand: string) => void,
}

export interface CustomFilterProps {
  title: string
}

export interface CarProps {
  key: number,
  type: string,
  year: number,
  make: string,
  model: string,
  fuel_type: string,
  cylinder: number,
  highway_mpg: number,
  city_mpg: number,
  kmPerLiter?: number,
  combination_mpg: number,
  transmission: string,
  drive: string,
}
