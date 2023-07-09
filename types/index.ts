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