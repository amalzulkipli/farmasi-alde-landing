import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Return and Refund Policy - Farmasi Alde',
  description: 'What can be returned to Farmasi Alde, what cannot, and how refunds are paid.',
}

export default function RefundPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Return and Refund Policy
          </h1>

          <div className="mt-10 space-y-8 text-lg leading-8 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-gray-900">What can be returned</h2>
              <p className="mt-3">
                Unopened, unused items in their original packaging, within 7 days of you receiving
                them, with proof of purchase.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">What cannot be returned</h2>
              <p className="mt-3">
                Under Malaysian pharmacy practice, medicines that have left the premises cannot be
                resold. We therefore cannot accept returns of prescription medicines,
                over-the-counter medicines, or any item whose seal has been broken. This is a
                safety rule, not a preference.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">If we got it wrong</h2>
              <p className="mt-3">
                Wrong item, damaged in transit, or expired on arrival: tell us within 48 hours with
                a photo. We replace it or refund it in full, including delivery, and we arrange the
                return pickup ourselves.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">How refunds are paid</h2>
              <p className="mt-3">
                Back to the original payment method within 7 to 14 working days of us approving the
                return.
              </p>
            </section>

            <section className="rounded-2xl bg-gray-50 p-8 shadow-md">
              <h2 className="text-xl font-semibold text-gray-900">How to start</h2>
              <p className="mt-3 text-base leading-7">
                WhatsApp the branch you bought from with your order number and a photo of the item.
              </p>
              <div className="mt-6 space-y-2 text-base leading-7">
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
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
