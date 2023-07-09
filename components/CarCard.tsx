'use client'
import { CarProps } from "@/types"
import { calculateCarRent } from "@/utils"
import Image from "next/image"
import CustomButton from "./CustomButton"
import CarDetails from "./CarDetails"
import { useState } from "react"

interface CarCardProps {
  key: number,
  car: CarProps
}


const CarCard = ({key, car} : CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive, kmPerLiter } = car

  const {price, formattedPrice} = calculateCarRent(city_mpg, year)

  const currency = formattedPrice[0]?.value
  const integer = formattedPrice[2]?.value
  // const separator = formattedPrice[3]?.value
  // const fraction = formattedPrice[4]?.value

  const [isOpen, setIsOpen] = useState(false)

  return (
    <li className="car-card group" key={key}>
      <div className="car-card__content">
        <h2 className="car-card__content-title">{make} {model}</h2>
      </div>
      <p className="flex mt-6 font-extrabold text-[24px]">
        <span className="car-card__price-currency">{currency}</span>
        {integer}
        <span className="self-end text-[12px] font-medium">/dia</span>
      </p>

      <div className="car-card__image">
        <Image src="/hero.png" fill alt={`Foto do ${make} ${model} ${year}`} className="object-contain" />      
      </div>

      <div className="relative flex w-full mt-2">
      <ul className="car-card__info relative flex justify-between w-full group-hover:invisible">
        <li className="car-card__info-item flex flex-col justify-center items-center gap-2">
          <Image src="/steering-wheel.svg" width={20} height={20} alt="Direção" />
          <span className="car-card__info-title text-[14px]">{
          transmission === 'a' ? 'Automático' : 'Manual'
          }</span>       
        </li>

        <li className="car-card__info-item flex flex-col justify-center items-center gap-2">
          <Image src="/tire.svg" width={20} height={20} alt="Pneu" />
          <span className="car-card__info-title text-[14px]">{
          drive === 'f' ? '4x4' : '4x2'
          } {drive.toUpperCase()}</span>       
        </li>

        <li className="car-card__info-item flex flex-col justify-center items-center gap-2">
          <Image src="/gas.svg" width={20} height={20} alt="Direção" />
          <span className="car-card__info-title text-[14px]">{
          kmPerLiter
          } KM/L</span>       
        </li>
      </ul>

      <div className="car-card__btn-container">
        <CustomButton title="Ver mais" 
          containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
          titleStyles="text-white font-bold text-[14px] leading-[16px]"
          rightIcon="/right-arrow.svg"
        />
      </div>
      </div>

      <CarDetails 
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car} />
    </li>
  )
}

export default CarCard