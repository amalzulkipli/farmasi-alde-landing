import type { Metadata } from "next"
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
    <div className="flex min-h-screen flex-col">
      <Header />

      <main>
        {/* Poster masthead, so anyone arriving from the QR recognises the event */}
        <section className="bg-gradient-to-b from-[#4cc3f5] to-[#33b6ee] px-6 pb-10 pt-12 text-white">
          <div className="mx-auto max-w-2xl">
            <p className="text-sm text-white/90">
              Program Saringan Kesihatan (Promosi Merdeka 2026)
            </p>
            <h1 className="mt-2 text-3xl font-extrabold uppercase leading-tight sm:text-5xl">
              Celebrate Freedom,
              <br />
              Embrace Health.
            </h1>
            <dl className="mt-6 space-y-2 text-sm">
              <div className="flex gap-2">
                <dt className="w-16 shrink-0 text-white/70">Tarikh</dt>
                <dd className="font-semibold">Sabtu, 26 September 2026</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-16 shrink-0 text-white/70">Masa</dt>
                <dd className="font-semibold">9.00 pagi hingga 9.00 malam</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-16 shrink-0 text-white/70">Tempat</dt>
                <dd className="font-semibold">
                  Farmasi Alde Bukit Changgang
                  <br />
                  <a href={MAPS_URL} className="font-normal text-white/85 underline">
                    Lihat lokasi di peta
                  </a>
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-sm text-white/90">
              Harga Early Bird sehingga <b>12 September 2026</b> sahaja.
            </p>
            <a
              href="#daftar"
              className="mt-5 inline-block rounded-lg bg-white px-6 py-3 font-bold text-[#0090c5]"
            >
              Daftar Sekarang
            </a>
          </div>
        </section>

        <EventPackages />

        {/* Preparation. On the page rather than only in the confirmation message,
            because in 2025 these instructions were sent after payment. */}
        <section className="mx-auto max-w-2xl px-6 py-10">
          <p className="text-sm font-semibold leading-7 text-[#00aced]">Persediaan</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-gray-900">
            Sebelum anda datang
          </h2>
          <ol className="mt-5 space-y-3 text-sm leading-6 text-gray-600">
            {[
              "Berpuasa 8 hingga 10 jam sebelum pengambilan darah. Air kosong dibenarkan.",
              "Bawa kad pengenalan. Ia diperlukan untuk laporan makmal.",
              "Elakkan minuman manis, kopi dan rokok sebelum ujian.",
              "Teruskan ubat harian anda seperti biasa melainkan doktor menasihatkan sebaliknya.",
            ].map((step, i) => (
              <li key={step} className="flex gap-3">
                <span className="font-bold text-[#00aced]">{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Registration */}
        <section id="daftar" className="scroll-mt-20 bg-gray-50 py-10">
          <div className="mx-auto max-w-2xl px-6">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Daftar</h2>
            <p className="mt-2 text-sm text-gray-600">
              Isi borang di bawah untuk mendaftar dan membuat pembayaran. Anda boleh
              mendaftar untuk beberapa orang dalam satu pembayaran.
            </p>
            <div className="mt-6">
              <RegistrationEmbed />
            </div>
            <p className="mt-6 text-center text-sm text-gray-500">
              Pertanyaan:{" "}
              <a href="tel:+60178748600" className="font-semibold text-[#00aced]">
                017-874 8600
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
