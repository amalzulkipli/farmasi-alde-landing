"use client"

import { MapPin, Clock, Phone, Facebook, Instagram } from "lucide-react"
import Link from "next/link"

const locations = [
  {
    name: 'Farmasi Alde Bukit Changgang',
    address: 'No 3 Jln SD1 1/1 Taman Seri Dagang, Kampung Bukit Changgang, 42700 Banting, Selangor',
    hours: '9 am–9 pm (Daily)',
    phone: '017-874 8600',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.6583359372897!2d101.61370737475506!3d2.8302289975076087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb98c7c164589%3A0x9520d98c8143c0e8!2sFarmasi%20Alde%20Bukit%20Changgang!5e0!3m2!1sen!2smy!4v1684304454305!5m2!1sen!2smy',
    social: {
      facebook: 'https://www.facebook.com/farmasialde.bukitchanggang',
      instagram: 'https://www.instagram.com/farmasialde.bukitchanggang/',
      tiktok: 'https://www.tiktok.com/@farmasialde.bukitchanggang'
    }
  },
  {
    name: 'Farmasi Alde Salak Tinggi',
    address: 'Desa Sri Qaseh, 30, Jln Sri Qaseh Permai, 43900 Sepang, Selangor',
    hours: '9:30 am–9:30 pm (Daily)',
    phone: '017-214 0488',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.0524839288395!2d101.71841607475458!3d2.8052360975132387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdc7581150b3c1%3A0x809c926d5426b6d8!2sFarmasi%20Alde%20Salak%20Tinggi!5e0!3m2!1sen!2smy!4v1684304391717!5m2!1sen!2smy',
    social: {
      facebook: 'https://www.facebook.com/farmasialde.salaktinggi',
      instagram: 'https://www.instagram.com/farmasialde.salaktinggi/',
      tiktok: 'https://www.tiktok.com/@farmasialde.salaktinggi'
    }
  },
]

export default function Locations() {
  return (
    <div id="locations" className="py-24 sm:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-[#00aced]">Our Locations</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Visit Us Today
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Find a Farmasi Alde location near you for all your healthcare needs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {locations.map((location) => (
            <div key={location.name} className="bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={location.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${location.name} Map`}
                ></iframe>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{location.name}</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-[#00aced] flex-shrink-0 mt-1 mr-3" />
                    <p className="text-gray-600">{location.address}</p>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-[#00aced] flex-shrink-0 mr-3" />
                    <p className="text-gray-600">{location.hours}</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-[#00aced] flex-shrink-0 mr-3" />
                    <Link href={`tel:${location.phone.replace(/\s/g, '')}`} className="text-gray-600 hover:text-[#00aced] transition-colors">
                      {location.phone}
                    </Link>
                  </div>
                </div>
                <div className="mt-8 flex justify-start space-x-4">
                  <Link href={location.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00aced] transition-colors">
                    <Facebook className="h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link href={location.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00aced] transition-colors">
                    <Instagram className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link href={location.social.tiktok} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00aced] transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                    </svg>
                    <span className="sr-only">TikTok</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}