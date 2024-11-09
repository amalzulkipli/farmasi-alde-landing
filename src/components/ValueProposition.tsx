"use client"

import { UserRoundCheck, Users, Heart } from "lucide-react"

const features = [
  {
    name: 'Professional Expertise',
    description: 'Our team of experienced pharmacists and healthcare professionals are dedicated to providing you with the best care.',
    icon: UserRoundCheck,
  },
  {
    name: 'Comprehensive Healthcare',
    description: 'We offer a wide range of health services and products to meet all your healthcare needs under one roof.',
    icon: Heart,
  },
  {
    name: 'Customer-Centric Approach',
    description: "Your health and satisfaction are our top priorities. We're here to listen, advise and care for you.",
    icon: Users,
  },
]

export default function ValueProposition() {
  return (
    <div className="py-24 sm:py-32 bg-[#00aced] md:bg-transparent">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl bg-[#00aced] shadow-2xl overflow-hidden md:p-8 lg:p-16">
          <div className="p-8 md:p-0">
            {/* First Row */}
            <div className="grid md:grid-cols-5 gap-8 mb-12">
              <div className="md:col-span-2">
                <h2 className="text-base font-semibold leading-7 text-white">
                  Our Core Values
                </h2>
              </div>
              <div className="hidden md:block md:col-span-3">
                {/* Empty space */}
              </div>
            </div>

            {/* Second Row */}
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Everything you need for your health and wellness
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  At Farmasi Alde, we're committed to providing comprehensive healthcare solutions with a personal touch. Our dedicated team ensures you receive the best care possible.
                </p>
              </div>
              
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col items-start mt-8 md:mt-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 mb-4">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold leading-8 text-white mb-4">
                    {feature.name}
                  </h3>
                  <p className="text-base leading-7 text-white/80">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}