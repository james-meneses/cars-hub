import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import { Footer, Navbar} from '@/components'

const montserrat = Montserrat({ 
        subsets: ['latin'],
        display: 'swap',
      })

export const metadata: Metadata = {
  title: 'Car Hub - Aluguel de Carros',
  description: 'Alugue seu carro de forma rápida e segura.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${montserrat.className} `} lang="pt-BR">
      <body className={`relative`}>
      <Navbar />
      {children}
      <Footer />
      </body>
    </html>
  )
}
