import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Delivery Policy - Farmasi Alde',
  description: 'Delivery timeframes, courier coverage and lost parcel handling for Farmasi Alde orders.',
}

export default function DeliveryPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Delivery Policy
          </h1>

          <div className="mt-10 space-y-6 text-lg leading-8 text-gray-600">
            <p>
              Orders placed and confirmed before 3:00 pm on a working day are packed and handed
              to the courier the same day. Orders after that go out the next working day.
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Klang Valley and Selangor: 1 to 2 working days</li>
              <li>Rest of Peninsular Malaysia: 3 to 5 working days</li>
              <li>Sabah and Sarawak: 5 to 10 working days</li>
              <li>We do not ship outside Malaysia.</li>
            </ul>

            <p>
              Cold chain items and controlled medicines are not couriered. They are collected in
              store after a pharmacist consultation.
            </p>

            <p>A tracking number is sent by WhatsApp once the parcel is picked up.</p>

            <div className="rounded-2xl bg-gray-50 p-8 shadow-md">
              <h2 className="text-xl font-semibold text-gray-900">Parcel not arrived?</h2>
              <p className="mt-4 text-base leading-7 text-gray-600">
                If tracking has not moved for 3 working days, message the branch that took your
                order. We open a trace with the courier and reply within 2 working days. If the
                courier confirms the parcel is lost, we resend at no charge or refund in full,
                your choice.
              </p>
              <div className="mt-6 space-y-2 text-base leading-7 text-gray-600">
                <p>
                  Bukit Changgang: 017-874 8600,{' '}
                  <a href="mailto:farmasialdebc@gmail.com" className="hover:text-[#00aced]">
                    farmasialdebc@gmail.com
                  </a>
                </p>
                <p>
                  Salak Tinggi: 017-648 4050,{' '}
                  <a href="mailto:farmasialdesalaktinggi@gmail.com" className="hover:text-[#00aced]">
                    farmasialdesalaktinggi@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
