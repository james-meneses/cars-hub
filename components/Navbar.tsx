import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

function Navbar() {
  return (
    <header className="w-full z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image src="/car-logo.svg"
          alt="Logo - flynet transfers"
          className="object-contain"
          width={50} height={50} />  
        </Link>
        
        <div className="sm:flex items-end space-x-10">
        <CustomButton 
          title="PT/BR"
          btnType="button"
          containerStyles="text-primary-blu rounded-full bg-white header__link" 
          />
        
        <CustomButton 
          title="Entrar"
          btnType="button"
          containerStyles="text-primary-blu rounded-full bg-white header__link" />
        </div>
      </nav>
    </header>
  )
}

export default Navbar