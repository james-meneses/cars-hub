import { Hero, SearchBar, CustomFilter, CarCard  } from '@/components'
import { fetchCars } from '@/utils'

export default async function Home() {

  const allCars = await fetchCars()

  const isDataEmpty = !Array.isArray(allCars) || allCars?.length < 1 

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width min-h-screen" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-bold ">Carros</h1>
          <p>Explore nosso catálogo.</p>

          <div className="home__filters">
            <SearchBar />
            <div className="home__filter-container">
              <CustomFilter title="marca" />
              <CustomFilter title="ano" />
            </div>
          </div>

          {
            isDataEmpty ? (<div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Sem resultados.</h2>
              </div>) : (<section className="home__cars-wrapper">
              {allCars.map((car, index) => <CarCard key={index} 
              type={car.type}
              year={car.year}
              make={car.make}
              model={car.model}
              fuel_type={car.fuel_type}
              />)}
              </section>)
          }

        </div>
      </div>
    </main>
  )
}
