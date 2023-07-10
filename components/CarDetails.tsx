'use client'
import { CarProps } from "@/types"

import {Dialog, Transition} from '@headlessui/react'
import { Fragment } from "react"
import Image from "next/image"

interface CarDetailsProps {
  car: CarProps,
  isOpen: boolean,
  closeModal: () => void,
  setIsOpen: (value: boolean) => void
}

const CarDetails = ({car, closeModal, isOpen}: CarDetailsProps) => {

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog 
          as="div"
          className="relative z-10"
          onClose={closeModal}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child 
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel
                    className="bg-white relative rounded-2xl overflow-y-auto w-full max-w-lg max-h-[90vh] p-6 transform text-left shadow-xl transition-all flex flex-col gap-5 "
                  >
                    <button 
                      className="absolute top-4 right-4 z-10 bg-white rounded-full p-2"
                      type="button"
                      onClick={closeModal}
                      >
                        <Image
                        src="/close.svg"
                        alt="Fechar Detalhes do Carro"
                        width={20}
                        height={20} 
                        className="object-contain"
                        />
                    </button>

                    <div className="flex-1 flex flex-col gap-3">
                      <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                      <Image src="/hero.png" 
                          fill 
                          quality={90}
                          alt="Capa - Cars Hub"
                          className="object-contain"
                          />
                      </div>

                      <div className="flex gap-3">
                        <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                          <Image src="/hero.png"
                            alt={`Foto 1 do ${car.make} ${car.model} ${car.year} - Cars Hub`}
                            fill 
                            className="object-contain"
                            />
                        </div>

                        <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                          <Image src="/hero.png"
                            alt={`Foto 1 do ${car.make} ${car.model} ${car.year} - Cars Hub`}
                            fill 
                            className="object-contain"
                            />
                        </div>

                        <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                          <Image src="/hero.png"
                            alt={`Foto 1 do ${car.make} ${car.model} ${car.year} - Cars Hub`}
                            fill 
                            className="object-contain"
                            />
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col gap-2">
                      <h2 className="font-semibold text-xl capitalize ">
                        {car.make} {car.model} {car.year}
                      </h2>

                      <ul className="mt-3 flex flex-wrap gap-4">
                        {Object.keys(car).map((key, index) => {
                          const value = car[key as keyof CarProps]
                          return (
                          <li key={key} className="flex justify-between text-sm text-gray-500 w-full text-right">
                            <h3 className="font-semibold text-grey capitalize">{key.split('_').join(' ')}</h3> 
                            <p className="font-semibold text-black-100 capitalize">{value}</p>
                          </li>
                        )})}
                      </ul>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>

          </Dialog>
      </Transition>
    </>
  )
}

export default CarDetails