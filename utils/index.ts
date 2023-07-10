import { CarProps } from "@/types"

export async function fetchCars () {
  const headers = {
    'X-RapidAPI-Key': '3a4b31abf0msh0757ca62d46e3ebp1df383jsnd0f27ea4a4be',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera', { headers: headers})
  const result = await response.json()

  const finalResult = result.map((car: CarProps) => {
    car.kmPerLiter = Number((car.city_mpg * 0.425).toFixed(1))
    return car
  })

  return finalResult
}

export const calculateCarRent = (city_mpg:number, year: number) => {
  const basePricePerDay = 50; // daily rate
  const mileageFactor = 0.1; // R$0.10 per additional mile
  const ageFactor = 0.25; // R$0.05 per year (age of car)
  // const pricePerDay = basePricePerDay + (mileageFactor * city_mpg) + (ageFactor * (2020 - year));

  // Calculate additional rate based on mileage and age
  const mileageRate = mileageFactor * city_mpg;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rate per day
  const pricePerDay = basePricePerDay + mileageRate + ageRate;

  return {price: pricePerDay.toFixed(0), formattedPrice: Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).formatToParts(Math.round(pricePerDay))};
}