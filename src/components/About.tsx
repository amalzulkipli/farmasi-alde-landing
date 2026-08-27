"use client"

export default function About() {
  return (
    <div id="about" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-[#00aced]">About Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Farmasi Alde
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="space-y-6 text-center text-lg leading-8 text-gray-600">
            <p>
              Farmasi Alde is a community pharmacy group serving Banting and Sepang since 2022.
              We run two outlets, Bukit Changgang and Salak Tinggi, each staffed by a registered
              pharmacist and open every day.
            </p>
            <p>
              We dispense prescription and over-the-counter medicines, stock vitamins and
              supplements, and carry home medical equipment and health monitoring devices. Our
              pharmacists give medication counselling, run health screenings, and advise on
              chronic disease management.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
