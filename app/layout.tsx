import type { Metadata } from 'next'
import './globals.css'
import {Navbar, Footer} from '../components'


export const metadata: Metadata = {
  title: 'CarHub',
  description: 'Get the best deals on every car you purchase in your entire life',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className='relative'>
      <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
