'use client'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
  const handleScroll = () => {
    console.log("handleScroll")
  }

  return (
    <div className="hero relative">
      <div className="flex-1 text-white padding-x z-[1] ">
          <h1 className="hero__title">Aluguel de Carros</h1>
          <p className="hero__subtitle">Alugue seu carro de forma rápida e segura.</p>
          </div>
    
        <div className="hero__image-container">
        <Image src="/hero.png" 
            fill 
            priority
            quality={90}
            alt="Capa - Cars Hub"
            className="hero__image object-contain"
            />
        </div>
        <div className="hero__overlay"></div>
    </div>
  )
}

export default Hero