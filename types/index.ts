import { MouseEventHandler } from "react";

export interface CustomButtonProps { 
  title: string,
  containerStyles?: string,
  handleClick?: MouseEventHandler<HTMLButtonElement>,
  btnType?: 'button' | 'submit';
}

export interface SearchBrandProps {
  brand: string,
  setBrand: (brand: string) => void,
}

export interface CustomFilterProps {
  title: string
}

export interface CarCardProps {
  key: string,
  type: string,
  year: number,
  make: string,
  model: string,
  fuel_type: string
}
