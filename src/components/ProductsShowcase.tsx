"use client"

import { PillBottle, Pill, Stethoscope, Activity } from "lucide-react"

const products = [
  {
    name: 'Medications & Prescriptions',
    description: 'Wide range of prescription and over-the-counter medications.',
    icon: PillBottle,
  },
  {
    name: 'Vitamins & Supplements',
    description: 'High-quality vitamins and dietary supplements for optimal health.',
    icon: Pill,
  },
  {
    name: 'Medical Equipment',
    description: 'Essential medical equipment for home and professional use.',
    icon: Stethoscope,
  },
  {
    name: 'Health Monitoring Devices',
    description: 'Advanced devices for monitoring your health at home.',
    icon: Activity,
  },
]

export default function ProductsShowcase() {
  return (
    <div id="products" className="py-24 sm:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-[#00aced]">Our Products</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Quality Healthcare Products
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore our extensive range of healthcare products to support your wellness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00aced]/10 rounded-bl-[100px] transition-all duration-300 group-hover:scale-110" />
              <div className="relative p-8">
                <div className="flex items-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00aced]/20 mr-4">
                    <product.icon className="h-6 w-6 text-[#00aced]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                </div>
                <p className="text-gray-600">{product.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00aced] to-[#0090c5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}