'use client'
import { useState, Fragment } from "react"

import {Combobox, Transition} from "@headlessui/react"
import { SearchBrandProps } from "@/types"
import Image from "next/image"
import { brands } from "@/constants"

const SearchBrand = ({brand, setBrand}: SearchBrandProps) => {
  const [query, setQuery] = useState('')

  const filteredBrands = query === '' ? brands : brands.filter(brand => brand.replace(/\s+/g,'').toLowerCase().includes(query.replace(/\s+/g, '').toLowerCase()))
  
  return (
    <div className="search-brand">
      <Combobox
        value={brand}
        onChange={setBrand}
      >
      <div className="relative w-full h-10">
        <Combobox.Button className="absolute w-full">
          <Image 
          src="/icons/car.svg"
          width={20}
          height={20}
          className="ml-4 absolute mt-[14px]"
          alt="Marca do carro" /> 

          <Combobox.Input 
            className="search-brand__input"
            placeholder="Volkswagen"
            displayValue={(brand: string) => brand}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="search-brand__options">
             { filteredBrands?.length === 0 && query !== '' ? (
              <Combobox.Option value={''} className="search-brand__option">
                Sem resultados para: <b>{query}</b>
              </Combobox.Option>
             ) : filteredBrands?.map(brand => (
              <Combobox.Option key={brand} value={brand} className={({active}) => `relative search-brand__option ${active ? 'bg-sky-700 text-white' : 'text-gray-900'}`}
              >
                {brand}
              </Combobox.Option>
             )) }
            </Combobox.Options>

          </Transition>
        </Combobox.Button>
      </div>
      </Combobox>
    </div>
  )
}

export default SearchBrand