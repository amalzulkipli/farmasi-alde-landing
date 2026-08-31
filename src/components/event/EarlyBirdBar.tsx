"use client"

import * as React from "react"

// Early bird closes at the end of 12 September 2026, Malaysian time (UTC+8).
// 2026-09-12T23:59:59+08:00 == 2026-09-12T15:59:59Z
const CUTOFF_UTC_MS = Date.UTC(2026, 8, 12, 15, 59, 59)

export default function EarlyBirdBar() {
  // Rendered on the server too, so start from null and fill in on the client.
  // Otherwise the static HTML would ship a day count that goes stale on the CDN.
  const [daysLeft, setDaysLeft] = React.useState<number | null>(null)

  React.useEffect(() => {
    const d = Math.ceil((CUTOFF_UTC_MS - Date.now()) / 86_400_000)
    setDaysLeft(d)
  }, [])

  const expired = daysLeft !== null && daysLeft <= 0

  return (
    <div
      className={`rounded-lg border px-4 py-3 text-center ${
        expired
          ? "border-gray-200 bg-gray-50"
          : "border-[#00aced]/30 bg-[#00aced]/[0.07]"
      }`}
    >
      {expired ? (
        <p className="text-[13px] text-gray-600">
          Tempoh Early Bird telah tamat. Harga biasa terpakai.
        </p>
      ) : (
        <>
          <p className="text-[13px] text-gray-800">
            <span className="font-bold text-[#00aced]">Harga Early Bird</span> tamat{" "}
            <b>12 September 2026</b>
          </p>
          {daysLeft !== null && (
            <p className="mt-0.5 text-[12px] text-gray-600">
              {daysLeft === 1 ? "Hari terakhir" : `Tinggal ${daysLeft} hari`}
            </p>
          )}
        </>
      )}
    </div>
  )
}
