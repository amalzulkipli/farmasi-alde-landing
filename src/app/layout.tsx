import type { Metadata } from 'next'
import { Nunito, Nunito_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import '../styles/globals.css'

const nunito = Nunito({ 
  subsets: ['latin'],
  variable: '--font-nunito',
})

const nunitoSans = Nunito_Sans({ 
  subsets: ['latin'],
  variable: '--font-nunito-sans',
})

export const metadata: Metadata = {
  title: 'Farmasi Alde - Your Trusted Healthcare Partner',
  description: 'Professional Pharmacy Services & Health Solutions Since 2022',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${nunito.variable} ${nunitoSans.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}