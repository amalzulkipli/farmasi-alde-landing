# farmasi-alde-landing

Brochure site for the two Farmasi Alde pharmacy outlets, live at https://farmasialde.com.
Next.js 15 App Router, TypeScript, Tailwind, shadcn/ui primitives in `src/components/ui/`.
No cart and no checkout. One marketing page at `src/app/page.tsx` plus a few sub-routes.

## Which company operates what

The site names two operating entities and must keep naming both. Getting this wrong is
what held up a payment gateway application in August 2026.

| Outlet | Operated by | Registration |
|---|---|---|
| Bukit Changgang (Banting) | FARMASI ALDE SDN. BHD. | 202201018007 (1463704-M) |
| Salak Tinggi (Sepang) | ALDE ALLL STAR PLT | LLP0042893-LGN |

`ALDE ALL STAR SDN. BHD. 202401005279 (1551129-D)` is a third, dormant vehicle. It
operates neither outlet and must not appear on the site. The PLT spells "Alll" with three
Ls; that is the registered spelling, not a typo.

The `/delivery-policy` and `/refund-policy` routes and the About section carry terms a
customer can hold the pharmacy to. Do not edit the timeframes, the return window or the
registration numbers without Amal confirming the new values.

## Deploy

Cloudflare Pages, not Vercel. The project moved off Vercel; `@vercel/analytics` is still a
dependency and is not evidence of the host.

| | |
|---|---|
| Pages project | `farmasi-alde-landing` |
| Production branch | `main`, pushing to it publishes |
| Preview deploys | every branch, so a PR gets its own URL |
| Build command | `npx @cloudflare/next-on-pages@1`, set in the dashboard |
| Build output | `.vercel/output/static` |
| Runtime config | `wrangler.toml`, which overrides the dashboard for compat settings |

Node 22 is required locally. This machine defaults to 20, so:
`source ~/.nvm/nvm.sh && nvm use 22`.

To reproduce a Cloudflare build exactly: `rm -rf node_modules .vercel .next`,
`npm clean-install`, `npx @cloudflare/next-on-pages@1`.

## Why next-on-pages and wrangler are pinned exact

`@cloudflare/next-on-pages` and `wrangler` are exact-pinned in devDependencies. Do not
loosen them to carets and do not bump wrangler past 4.107.1 without checking first.

wrangler 4.108.0 moved its `@cloudflare/workers-types` peer from `^4` to `^5`, while
next-on-pages 1.13.16 still declares `^4`. The dashboard build command resolves a fresh
wrangler on every run, so the build began failing with `npm error ERESOLVE` on its own,
with no commit behind it, and no commit could avoid it. Pinning both means `npm ci`
installs a tree that resolves and `npx` uses the local binary instead of fetching one.

Bumping wrangler is safe again only once next-on-pages accepts workers-types `^5`.

## Conventions

- npm, not pnpm. The repo ships `package-lock.json`. Ask before converting.
- Plain function components with Tailwind utility classes. No CSS-in-JS, no CMS.
- English throughout. No em dashes in copy.
- Commit messages carry no AI attribution of any kind.
