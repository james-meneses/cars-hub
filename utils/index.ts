export async function fetchCars () {
  const headers = {
    'X-RapidAPI-Key': '3a4b31abf0msh0757ca62d46e3ebp1df383jsnd0f27ea4a4be',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', { headers: headers})
  const result = await response.json()
  return result
}