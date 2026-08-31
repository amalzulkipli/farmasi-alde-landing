import type { Metadata } from "next"
import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import EventPackages from "@/components/event/EventPackages"
import RegistrationEmbed from "@/components/event/RegistrationEmbed"

export const metadata: Metadata = {
  title: "Celebrate Freedom, Embrace Health | Farmasi Alde Bukit Changgang",
  description:
    "Program Saringan Kesihatan, Promosi Merdeka 2026. Sabtu 26 September 2026, 9 pagi hingga 9 malam di Farmasi Alde Bukit Changgang. Pakej dari RM55.",
}

const MAPS_URL =
  "https://maps.google.com/?q=Farmasi+Alde+Bukit+Changgang,+No+3,+Jalan+SD1+1/1,+Taman+Seri+Dagang,+42700+Banting,+Selangor"

export default function MerdekaScreeningPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f9f9f9]">
      <Header />

      <main className="mx-auto w-full max-w-2xl space-y-7 px-4 py-6 sm:py-9">
        {/* The poster is the hero. No re-typed headline. */}
        <div className="overflow-hidden rounded-lg border bg-white shadow-[0_1px_2px_rgba(0,0,0,.05)]">
          <Image
            src="/events/merdeka-2026.png"
            alt="Celebrate Freedom, Embrace Health. Program Saringan Kesihatan Promosi Merdeka 2026 di Farmasi Alde Bukit Changgang, 26 September 2026."
            width={675}
            height={1200}
            priority
            className="block h-auto w-full"
          />
        </div>

        {/* Facts as chips, not paragraphs */}
        <div className="flex flex-wrap gap-2 text-[12.5px]">
          <span className="rounded-full border bg-white px-3 py-1.5 font-semibold text-gray-800">
            Sabtu, 26 Sept 2026
          </span>
          <span className="rounded-full border bg-white px-3 py-1.5 font-semibold text-gray-800">
            9 pagi &ndash; 9 malam
          </span>
          <a
            href={MAPS_URL}
            className="rounded-full border bg-white px-3 py-1.5 font-semibold text-[#00aced]"
          >
            Bukit Changgang &middot; peta
          </a>
          <span className="rounded-full border border-[#00aced]/30 bg-[#00aced]/10 px-3 py-1.5 font-semibold text-[#0090c5]">
            Early Bird hingga 12 Sept
          </span>
        </div>

        {/* Pricing, immediately */}
        <EventPackages />

        {/* Everything else, compressed to one card */}
        <div className="rounded-lg border bg-white p-4 text-[12.5px] leading-5 text-gray-700">
          <div className="font-bold text-gray-900">Sebelum datang</div>
          <p className="mt-1">
            Puasa 8 hingga 10 jam, air kosong dibenarkan. Bawa kad pengenalan. Elak minuman
            manis, kopi dan rokok. Ubat harian teruskan seperti biasa.
          </p>
          <div className="mt-3 border-t pt-3">
            Semua pakej termasuk pengambilan darah oleh kakitangan terlatih, ujian di makmal
            bertauliah, keputusan dijelaskan dalam bahasa mudah, dan rujukan doktor jika perlu.
          </div>
        </div>

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
