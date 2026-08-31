"use client"

import * as React from "react"

const cancer = {
  Lelaki: {
    name: "Men's Premium",
    price: 175,
    was: 199,
    save: 12,
    tests: "PSA (prostat), CEA (usus), Alpha Fetoprotein (hati), CA19-9 (pankreas), HBsAg (hepatitis B)",
    note: "Tiada air kencing, TSH, sifilis dan rheumatoid.",
  },
  Wanita: {
    name: "Women's Premium",
    price: 180,
    was: 219,
    save: 18,
    tests: "Semua di Premium, tambah CA125 (ovari), CA15-3 (payudara), CA19-9 (pankreas), HIV I & II, TSH",
    note: null,
  },
} as const

type Gender = keyof typeof cancer

function Rule({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 flex items-center gap-2.5">
      <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#00aced]">
        {children}
      </span>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  )
}

export default function EventPackages() {
  const [g, setG] = React.useState<Gender>("Lelaki")
  const p = cancer[g]

  return (
    <div className="space-y-6">
      <section>
        <Rule>Saringan Am</Rule>
        <div className="overflow-hidden rounded-lg border">
          <div className="flex items-start justify-between gap-3 p-4">
            <div>
              <div className="font-semibold text-gray-900">Basic</div>
              <p className="mt-0.5 text-[12.5px] leading-5 text-gray-600">
                7 ujian. Gula &amp; HbA1c, lipid, buah pinggang, hati, air kencing, TSH.
              </p>
            </div>
            <div className="shrink-0 text-xl font-bold text-gray-700">RM55</div>
          </div>

          <div className="flex items-center gap-2 border-y border-[#00aced]/20 bg-[#00aced]/5 px-4 py-2">
            <span aria-hidden className="text-[#00aced]">↓</span>
            <span className="text-[12.5px] text-gray-800">
              tambah <b className="text-[#00aced]">RM20 sahaja</b> untuk 5 ujian lagi
            </span>
          </div>

          <div className="bg-[#00aced]/[0.07] p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-lg font-bold text-gray-900">Premium</div>
                <p className="mt-0.5 text-[12.5px] leading-5 text-gray-600">
                  12 ujian. Semua di Basic, tambah blood grouping, hepatitis B, sifilis,
                  rheumatoid, CEA.
                </p>
              </div>
              <div className="shrink-0 text-right">
                <div className="text-[12px] text-gray-400 line-through">RM99</div>
                <div className="text-2xl font-extrabold leading-none text-gray-900">RM75</div>
                <div className="mt-1 inline-block rounded bg-[#00aced] px-1.5 py-0.5 text-[10px] font-bold text-white">
                  Jimat 24%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Rule>Saringan Kanser</Rule>
        <div className="overflow-hidden rounded-lg border">
          <div className="flex text-[13px] font-semibold" role="tablist">
            {(Object.keys(cancer) as Gender[]).map((k) => (
              <button
                key={k}
                role="tab"
                aria-selected={g === k}
                onClick={() => setG(k)}
                className={`flex-1 py-2.5 ${
                  g === k ? "bg-[#00aced] text-white" : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                {k}
              </button>
            ))}
          </div>
          <div className="p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="font-bold text-gray-900">{p.name}</div>
              <div className="shrink-0 text-right">
                <div className="text-[12px] text-gray-400 line-through">RM{p.was}</div>
                <div className="text-xl font-extrabold leading-none text-gray-900">
                  RM{p.price}
                </div>
                <div className="mt-1 inline-block rounded bg-[#00aced] px-1.5 py-0.5 text-[10px] font-bold text-white">
                  Jimat {p.save}%
                </div>
              </div>
            </div>
            <p className="mt-2 text-[12.5px] leading-5 text-gray-600">{p.tests}</p>
            {p.note && <p className="mt-1.5 text-[11.5px] text-gray-500">{p.note}</p>}
          </div>
        </div>
        <p className="mt-2 text-[11.5px] text-gray-500">
          Pakej berasingan, bukan naik taraf daripada Premium.
        </p>
      </section>
    </div>
  )
}
