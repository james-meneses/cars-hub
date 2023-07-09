import { CarProps } from "@/types"

interface CarDetailsProps {
  car: CarProps,
  isOpen: boolean,
  setIsOpen: (value: boolean) => void
}

const CarDetails = ({car, isOpen, setIsOpen}: CarDetailsProps) => {
  return (
    <div>CarDetails</div>
  )
}

export default CarDetails