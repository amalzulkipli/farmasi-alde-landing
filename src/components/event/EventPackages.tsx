const PACKAGES = [
  { key: "basic", name: "Basic", price: 55, was: null, save: null },
  { key: "premium", name: "Premium", price: 75, was: 99, save: 24 },
  { key: "men", name: "Men's", price: 175, was: 199, save: 12 },
  { key: "women", name: "Women's", price: 180, was: 219, save: 18 },
] as const

type Key = (typeof PACKAGES)[number]["key"]

type Row = { test: string; in: Key[] }

const GROUPS: { title: string; rows: Row[] }[] = [
  {
    title: "Asas",
    rows: [
      { test: "Glucose (gula)", in: ["basic", "premium", "women"] },
      { test: "HbA1c (gula 3 bulan)", in: ["basic", "premium", "women"] },
      { test: "Lipid Profile (kolesterol)", in: ["basic", "premium", "women"] },
      { test: "Renal Function (buah pinggang)", in: ["basic", "premium", "women"] },
      { test: "Liver Function (hati)", in: ["basic", "premium", "women"] },
      { test: "Urine FEME (air kencing)", in: ["basic", "premium", "women"] },
      { test: "TSH (tiroid)", in: ["basic", "premium", "women"] },
    ],
  },
  {
    title: "Tambahan Premium",
    rows: [
      { test: "Blood Grouping (kumpulan darah)", in: ["premium", "women"] },
      { test: "HBs Ag / Ab (hepatitis B)", in: ["premium", "men", "women"] },
      { test: "Syphilis RPR (sifilis)", in: ["premium", "women"] },
      { test: "Rheumatoid Factor (sendi)", in: ["premium", "women"] },
    ],
  },
  {
    title: "Penanda Kanser",
    rows: [
      { test: "CEA (usus)", in: ["premium", "men", "women"] },
      { test: "Alpha Fetoprotein (hati)", in: ["men"] },
      { test: "PSA (prostat)", in: ["men"] },
      { test: "CA19-9 (pankreas)", in: ["men", "women"] },
      { test: "CA125 (ovari)", in: ["women"] },
      { test: "CA15-3 (payudara)", in: ["women"] },
      { test: "HIV I & II", in: ["women"] },
    ],
  },
]

const HERO: Key = "premium"

function Cell({ on, hero }: { on: boolean; hero: boolean }) {
  return (
    <td
      className={`border-l px-2 py-2 text-center ${hero ? "bg-[#00aced]/[0.06]" : ""}`}
    >
      {on ? (
        <span className="text-[#00aced]" aria-label="termasuk">
          ✓
        </span>
      ) : (
        <span className="text-gray-300" aria-label="tidak termasuk">
          –
        </span>
      )}
    </td>
  )
}

export default function EventPackages() {
  return (
    <section>
      <div className="mb-3 flex items-center gap-2.5">
        <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#00aced]">
          Banding Pakej
        </span>
        <span className="h-px flex-1 bg-gray-200" />
        <span className="text-[11px] text-gray-400 sm:hidden">leret →</span>
      </div>

      <div className="relative w-full overflow-x-auto rounded-lg border bg-white">
        <table className="w-full border-collapse text-[12.5px]">
          <thead>
            <tr>
              <th
                scope="col"
                className="sticky left-0 z-10 min-w-[148px] bg-white px-3 py-3 text-left align-bottom"
              >
                <span className="sr-only">Ujian</span>
              </th>
              {PACKAGES.map((p) => {
                const hero = p.key === HERO
                return (
                  <th
                    key={p.key}
                    scope="col"
                    className={`min-w-[86px] border-l px-2 py-3 align-bottom ${
                      hero ? "bg-[#00aced]/[0.06]" : ""
                    }`}
                  >
                    <div className="text-[12px] font-semibold text-gray-900">{p.name}</div>
                    {p.was && (
                      <div className="text-[10.5px] text-gray-400 line-through">RM{p.was}</div>
                    )}
                    <div
                      className={`leading-none ${
                        hero ? "text-[19px] font-extrabold" : "text-[16px] font-bold"
                      } text-gray-900`}
                    >
                      RM{p.price}
                    </div>
                    {p.save && (
                      <div className="mt-1 inline-block rounded bg-[#00aced] px-1 py-0.5 text-[9px] font-bold text-white">
                        Jimat {p.save}%
                      </div>
                    )}
                  </th>
                )
              })}
            </tr>
          </thead>

          <tbody>
            {GROUPS.map((group) => (
              <>
                <tr key={group.title}>
                  <th
                    scope="colgroup"
                    colSpan={PACKAGES.length + 1}
                    className="sticky left-0 bg-gray-50 px-3 py-1.5 text-left text-[10.5px] font-bold uppercase tracking-[0.06em] text-gray-500"
                  >
                    {group.title}
                  </th>
                </tr>
                {group.rows.map((row) => (
                  <tr key={row.test} className="border-t">
                    <th
                      scope="row"
                      className="sticky left-0 z-10 bg-white px-3 py-2 text-left font-normal text-gray-700"
                    >
                      {row.test}
                    </th>
                    {PACKAGES.map((p) => (
                      <Cell
                        key={p.key}
                        on={row.in.includes(p.key)}
                        hero={p.key === HERO}
                      />
                    ))}
                  </tr>
                ))}
              </>
            ))}

            <tr className="border-t bg-gray-50">
              <th
                scope="row"
                className="sticky left-0 z-10 bg-gray-50 px-3 py-2 text-left text-[11.5px] font-semibold text-gray-600"
              >
                Jumlah ujian
              </th>
              {PACKAGES.map((p) => (
                <td
                  key={p.key}
                  className={`border-l px-2 py-2 text-center text-[13px] font-bold text-gray-900 ${
                    p.key === HERO ? "bg-[#00aced]/[0.06]" : ""
                  }`}
                >
                  {GROUPS.reduce(
                    (n, g) => n + g.rows.filter((r) => r.in.includes(p.key)).length,
                    0
                  )}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-2.5 text-[11.5px] leading-4 text-gray-500">
        Premium ialah Basic dan lima ujian lagi, <b className="text-[#00aced]">tambah RM20 sahaja</b>.
        Men&rsquo;s dan Women&rsquo;s ialah pakej penanda kanser, bukan naik taraf daripada Premium.
      </p>
    </section>
  )
}
