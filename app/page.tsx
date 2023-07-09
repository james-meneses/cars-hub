import { Hero, SearchBar, CustomFilter  } from '@/components'

export default function Home() {
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
        </div>
      </div>
    </main>
  )
}
