"use client"

import * as React from "react"

const cancerPackages = {
  lelaki: {
    name: "Men's Premium",
    price: 175,
    was: 199,
    save: 12,
    tests: [
      "PSA (prostat)",
      "CEA (usus)",
      "Alpha Fetoprotein (hati)",
      "CA19-9 (pankreas)",
      "HBsAg (hepatitis B)",
    ],
    excludes: "Pakej ini tidak termasuk air kencing, TSH, sifilis dan rheumatoid yang ada di Premium.",
  },
  wanita: {
    name: "Women's Premium",
    price: 180,
    was: 219,
    save: 18,
    tests: [
      "Semua ujian di Pakej Premium",
      "CA125 (ovari)",
      "CA15-3 (payudara)",
      "CA19-9 (pankreas)",
      "HIV I & II",
      "TSH (tiroid)",
    ],
    excludes: null,
  },
} as const

type Gender = keyof typeof cancerPackages

export default function EventPackages() {
  const [gender, setGender] = React.useState<Gender>("lelaki")
  const pkg = cancerPackages[gender]

  return (
    <>
      {/* Shared floor: stated once so each tier only expresses its difference */}
      <div className="mx-auto max-w-2xl px-6 pt-10">
        <div className="rounded-2xl bg-gray-50 border p-5">
          <h2 className="font-bold text-gray-900">Setiap pakej termasuk</h2>
          <ul className="mt-3 space-y-1.5 text-sm text-gray-700">
            <li>✓ Pengambilan darah oleh kakitangan terlatih</li>
            <li>✓ Ujian di makmal bertauliah</li>
            <li>✓ Keputusan dijelaskan dalam bahasa mudah</li>
            <li>✓ Rujukan doktor jika keputusan memerlukan</li>
          </ul>
        </div>
        <p className="mt-4 text-center text-sm text-gray-500">
          Empat pakej untuk keperluan berbeza, bukan satu tangga naik taraf.
        </p>
      </div>

      {/* Saringan Am */}
      <section className="mx-auto max-w-2xl px-6 py-10">
        <p className="text-sm font-semibold leading-7 text-[#00aced]">Saringan Am</p>
        <h2 className="mt-1 text-2xl font-bold tracking-tight text-gray-900">
          Pemeriksaan kesihatan asas
        </h2>

        <div className="mt-5 rounded-2xl border overflow-hidden">
          {/* Basic. No struck price: a 15% deal is a small plausible deal, where a
              reference price adds nothing (Krishna et al. 2002 meta-analysis). */}
          <div className="p-5 flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-gray-900">Basic</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                7 ujian. Gula &amp; HbA1c (kencing manis), lipid (kolesterol), fungsi buah
                pinggang, fungsi hati, air kencing, TSH (tiroid).
              </p>
            </div>
            <div className="shrink-0 text-right">
              <div className="text-2xl font-bold leading-none text-gray-700">RM55</div>
            </div>
          </div>

          {/* The upgrade drawn as a step. Differential price framing is the one lever
              with both lab and field evidence behind it. */}
          <div className="flex items-center gap-2 border-y border-[#00aced]/20 bg-[#00aced]/5 px-5 py-3">
            <span aria-hidden className="text-[#00aced]">↓</span>
            <span className="text-sm text-gray-800">
              tambah <b className="text-[#00aced]">RM20 sahaja</b> untuk 5 ujian lagi
            </span>
          </div>

          {/* Premium: the hero */}
          <div className="bg-[#00aced]/[0.07] p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Premium</h3>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  12 ujian. Semua di Basic, dan lima lagi.
                </p>
              </div>
              <div className="shrink-0 text-right">
                <div className="text-sm text-gray-400 line-through">RM99</div>
                <div className="text-3xl font-extrabold leading-none text-gray-900">RM75</div>
                <div className="mt-1 inline-block rounded bg-[#00aced] px-1.5 py-0.5 text-[11px] font-bold text-white">
                  Jimat 24%
                </div>
              </div>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {[
                "Blood grouping (kumpulan darah)",
                "HBsAg (hepatitis B)",
                "RPR (sifilis)",
                "Rheumatoid Factor (sendi)",
                "CEA (penanda usus)",
              ].map((t) => (
                <li key={t} className="rounded-full border bg-white px-2.5 py-1 text-xs text-gray-700">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Saringan Kanser: a separate product, not a rung */}
      <section className="bg-gray-50 py-10">
        <div className="mx-auto max-w-2xl px-6">
          <p className="text-sm font-semibold leading-7 text-[#00aced]">Saringan Kanser</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-gray-900">
            Penanda kanser mengikut jantina
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Pakej berasingan dengan kandungan tersendiri, bukan naik taraf daripada Premium.
          </p>

          <div className="mt-5 overflow-hidden rounded-2xl border bg-white">
            <div className="flex text-sm font-semibold" role="tablist" aria-label="Pilih jantina">
              {(Object.keys(cancerPackages) as Gender[]).map((g) => (
                <button
                  key={g}
                  role="tab"
                  aria-selected={gender === g}
                  onClick={() => setGender(g)}
                  className={`flex-1 py-3 capitalize transition-colors ${
                    gender === g ? "bg-[#00aced] text-white" : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>

            <div className="p-5">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-bold text-gray-900">{pkg.name}</h3>
                <div className="shrink-0 text-right">
                  <div className="text-sm text-gray-400 line-through">RM{pkg.was}</div>
                  <div className="text-2xl font-extrabold leading-none text-gray-900">
                    RM{pkg.price}
                  </div>
                  <div className="mt-1 inline-block rounded bg-[#00aced] px-1.5 py-0.5 text-[11px] font-bold text-white">
                    Jimat {pkg.save}%
                  </div>
                </div>
              </div>
              <ul className="mt-4 space-y-1.5 text-sm text-gray-700">
                {pkg.tests.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              {pkg.excludes && (
                <p className="mt-4 text-xs text-gray-500">{pkg.excludes}</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
