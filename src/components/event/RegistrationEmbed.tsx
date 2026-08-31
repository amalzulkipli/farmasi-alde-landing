"use client"

import * as React from "react"

const EMBED_URL =
  "https://farmasialdesdnbhd.bcl.my/embed/event/merdekamonthcelebration"
const DIRECT_URL =
  "https://farmasialdesdnbhd.bcl.my/event/merdekamonthcelebration"
const SCRIPT_SRC = "https://bcl.my/js/bc-encrypted-payment-embed.js"

/**
 * Embeds the BCL registration form inline so the customer never leaves
 * farmasialde.com. BCL is a third party and its script can fail or change, so
 * the fallback is not decorative: if nothing renders inside the mount within a
 * few seconds, we show a plain link to the hosted form instead. Registration
 * must never be blocked by an embed that quietly did nothing.
 */
export default function RegistrationEmbed() {
  const mountRef = React.useRef<HTMLDivElement>(null)
  const [failed, setFailed] = React.useState(false)

  React.useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${SCRIPT_SRC}"]`
    )
    if (!existing) {
      const s = document.createElement("script")
      s.src = SCRIPT_SRC
      s.async = true
      s.onerror = () => setFailed(true)
      document.body.appendChild(s)
    }

    // The embed injects into the mount node. If it is still empty after the
    // script has had a fair chance, treat it as a failure.
    const timer = window.setTimeout(() => {
      const node = mountRef.current
      if (!node || node.childElementCount === 0) setFailed(true)
    }, 6000)

    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div>
      <div id="bcl-payment-form" data-url={EMBED_URL} ref={mountRef} />

      {failed && (
        <div className="rounded-2xl border bg-white p-6 text-center">
          <p className="text-sm text-gray-600">
            Borang pendaftaran dibuka di halaman berasingan.
          </p>
          <a
            href={DIRECT_URL}
            className="mt-4 inline-block rounded-lg bg-[#00aced] px-6 py-3 font-bold text-white"
          >
            Daftar Sekarang
          </a>
        </div>
      )}

      <noscript>
        <div className="rounded-2xl border bg-white p-6 text-center">
          <a href={DIRECT_URL} className="font-bold text-[#00aced]">
            Daftar Sekarang
          </a>
        </div>
      </noscript>
    </div>
  )
}
