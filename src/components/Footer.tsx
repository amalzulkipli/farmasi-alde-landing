"use client"

import Link from "next/link"

const navigation = {
  main: [
    { name: 'About', href: '/#about' },
    { name: 'Values', href: '/#values' },
    { name: 'Services', href: '/#services' },
    { name: 'Products', href: '/#products' },
    { name: 'Locations', href: '/#locations' },
    { name: 'Contact', href: '/#contact' },
  ],
  policies: [
    { name: 'Delivery Policy', href: '/delivery-policy' },
    { name: 'Return and Refund Policy', href: '/refund-policy' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link href={item.href} className="text-sm leading-6 text-gray-400 hover:text-primary">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <nav className="mt-6 flex flex-col items-center gap-y-4 sm:flex-row sm:justify-center sm:gap-x-12" aria-label="Policies">
          {navigation.policies.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm leading-6 text-gray-400 hover:text-primary">
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="mt-10 text-center">
          <p className="text-sm leading-5 text-gray-400">
            FARMASI ALDE SDN. BHD.
          </p>
          <p className="text-xs leading-5 text-gray-400 mt-1">
            202201018007 (1463704-M)
          </p>
          <p className="text-xs leading-5 text-gray-400 mt-4">
            &copy; {new Date().getFullYear()} Farmasi Alde. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
