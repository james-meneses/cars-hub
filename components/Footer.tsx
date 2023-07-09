import Image from 'next/image'
import Link from 'next/link'

import { footerLinks } from '@/constants'

function Footer() {
  return (
    <footer className="footer flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="footer__links-container">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image 
          className='object-contain'
          src="/car-logo.svg" alt="Logo Car Hub" width={50} height={50} />
          <p className="text-base text-gray-700">Car Hub - James Meneses 2023 <br/> Todos direitos reservados &copy;</p>
        </div>
 
          <div className="footer__links">
          {footerLinks.map(link => (
            <div key={link.title} className="footer__link">
              <p className="font-bold ">{link.title}</p>
              {link.links.map(link => (
                <Link key={link.title} href={link.url} className='text-gray-500'>
                  {link.title}
                  </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row lg:justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10 gap-4">
            <p>2023 Car Hub - James Meneses. Todos direitos reservados </p>

            <div className="footer__copyrights-link">
              <Link href="/" className="text-gray-500">Política de Privacidade</Link>
              <Link href="/" className="text-gray-500">Termos de Uso</Link>
            </div>
          </div>
    </footer>
  )
}

export default Footer