"use client"

import { Pill, HeartPulse, Stethoscope, Accessibility } from "lucide-react"

const services = [
  {
    name: 'Professional Pharmacy Services',
    description: 'Expert medication management and consultation.',
    icon: Pill,
  },
  {
    name: 'Health & Wellness Products',
    description: 'Wide range of products for your well-being.',
    icon: HeartPulse,
  },
  {
    name: 'Health Monitoring Services',
    description: 'Regular check-ups and health screenings.',
    icon: Stethoscope,
  },
  {
    name: 'Medical Equipment',
    description: 'Quality equipment for home healthcare needs.',
    icon: Accessibility,
  },
]

export default function ServicesGrid() {
  return (
    <div id="services" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-[#00aced]">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Healthcare Solutions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover our range of professional services designed to meet all your health and wellness needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.name}
              className="group relative bg-white rounded-2xl p-6 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-[#00aced] hover:text-white min-h-48"
            >
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 group-hover:text-white/90">
                  {service.description}
                </p>
              </div>
              <div className="absolute -bottom-8 -right-8 transition-all duration-300 group-hover:scale-110">
                <service.icon className="w-32 h-32 text-gray-200 group-hover:text-white/20" strokeWidth={1.5} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}