import type { Metadata } from "next"
import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import EventPackages from "@/components/event/EventPackages"
import RegistrationEmbed from "@/components/event/RegistrationEmbed"

export const metadata: Metadata = {
  title: "Celebrate Freedom, Embrace Health | Farmasi Alde Bukit Changgang",
  description:
    "Program Saringan Kesihatan, Promosi Merdeka 2026. Sabtu 26 September 2026, 9 pagi hingga 1 tengah hari di Farmasi Alde Bukit Changgang. Pakej dari RM55.",
}

export default function MerdekaScreeningPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f9f9f9]">
      <Header />

      <main className="mx-auto w-full max-w-2xl space-y-7 px-4 py-6 sm:py-9">
        {/* The poster is the hero. No re-typed headline. */}
        <div className="overflow-hidden rounded-lg border bg-white shadow-[0_1px_2px_rgba(0,0,0,.05)]">
          <Image
            src="/events/merdeka-2026.jpg"
            alt="Celebrate Freedom, Embrace Health. Program Saringan Kesihatan Promosi Merdeka 2026 di Farmasi Alde Bukit Changgang, 26 September 2026."
            width={900}
            height={1600}
            priority
            className="block h-auto w-full"
          />
        </div>

        {/* Pricing, immediately */}
        <EventPackages />

        {/* Register */}
        <section id="daftar" className="scroll-mt-20">
          <div className="mb-3 flex items-center gap-2.5">
            <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#00aced]">
              Daftar
            </span>
            <span className="h-px flex-1 bg-gray-200" />
          </div>
          <RegistrationEmbed />
          <p className="mt-4 text-center text-[12.5px] text-gray-500">
            Pertanyaan{" "}
            <a href="tel:+60178748600" className="font-semibold text-[#00aced]">
              017-874 8600
            </a>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
