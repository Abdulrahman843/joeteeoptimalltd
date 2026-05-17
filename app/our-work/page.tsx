import type { Metadata } from "next"
import Link from "next/link"
import Photo from "../../components/Photo"
import { site, images } from "../../lib/site"

export const metadata: Metadata = {
  title: "Our Work — Cleaning Projects Portsmouth & the South",
  description:
    "Real residential and commercial cleaning projects across Portsmouth, Hampshire, and the South — end of tenancy, deep cleans, after-builders, office cleaning, and Airbnb turnovers.",
  alternates: { canonical: "/our-work" }
}

const PROJECTS = [
  {
    title: "End of Tenancy — 2-Bed Flat",
    caption: "Portsmouth, Hampshire — full deposit-ready checklist clean",
    tag: "End of Tenancy",
    image: images.endOfTenancy
  },
  {
    title: "Commercial Office Reset",
    caption: "Southampton — weekly contract cleaning",
    tag: "Commercial",
    image: images.office
  },
  {
    title: "Airbnb Turnover",
    caption: "Brighton — same-day hotel-standard reset",
    tag: "Airbnb",
    image: images.airbnb
  },
  {
    title: "Post-Construction Clean",
    caption: "Chichester — full kitchen extension build clean",
    tag: "Post-Build",
    image: images.afterBuilders
  },
  {
    title: "Residential Deep Clean",
    caption: "Fareham — family home top-to-bottom clean",
    tag: "Deep Clean",
    image: images.deepClean
  },
  {
    title: "Move-In Clean",
    caption: "Winchester — three-bed flat for new tenants",
    tag: "Move-In",
    image: images.moveIn
  }
]

export default function OurWork() {
  return (
    <main className="bg-white">
      <section className="container py-12 md:py-16">
        <p className="inline-block rounded-full bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-wide px-3 py-1 mb-4">
          Our Work
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Real Jobs. Real Results.
        </h1>
        <p className="text-gray-600 mb-10 max-w-2xl text-lg">
          Every project is carried out by our trained, uniformed team to the
          highest standard. Browse a selection of recent jobs across Portsmouth,
          Hampshire, and the South of England.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map(p => (
            <article
              key={p.title}
              className="group bg-white border rounded-xl overflow-hidden shadow-sm flex flex-col transition hover:shadow-md hover:-translate-y-0.5"
            >
              <Photo
                src={p.image.src}
                alt={p.image.alt}
                className="rounded-none group-hover:scale-[1.02] transition-transform duration-500"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="p-5 flex-1 flex flex-col gap-2">
                <span className="inline-block self-start rounded-full bg-teal-50 text-teal-700 text-xs font-semibold px-2.5 py-0.5">
                  {p.tag}
                </span>
                <p className="font-semibold text-gray-900">{p.title}</p>
                <p className="text-sm text-gray-500">{p.caption}</p>
              </div>
            </article>
          ))}

          {/* Branded company vehicle card */}
          <article className="group rounded-xl overflow-hidden shadow-sm flex flex-col transition hover:shadow-md hover:-translate-y-0.5 bg-gradient-to-br from-teal-700 to-teal-900">
            <div className="relative flex-1 flex flex-col items-center justify-center px-6 pt-8 pb-4 min-h-[220px]">
              {/* Van silhouette SVG */}
              <svg
                viewBox="0 0 200 90"
                className="w-full max-w-[180px] mb-5 opacity-25"
                aria-hidden="true"
              >
                {/* Van body */}
                <rect x="5" y="32" width="130" height="42" rx="6" fill="white" />
                {/* Cab section */}
                <rect x="118" y="18" width="75" height="46" rx="6" fill="white" />
                {/* Cab window */}
                <rect x="124" y="23" width="60" height="22" rx="3" fill="#0d9488" />
                {/* Side window */}
                <rect x="18" y="38" width="45" height="18" rx="3" fill="#0d9488" />
                {/* Door line */}
                <line x1="70" y1="34" x2="70" y2="72" stroke="#0d9488" strokeWidth="2" />
                {/* Rear wheel */}
                <circle cx="38" cy="76" r="13" fill="white" />
                <circle cx="38" cy="76" r="6" fill="#0d9488" />
                {/* Front wheel */}
                <circle cx="158" cy="76" r="13" fill="white" />
                <circle cx="158" cy="76" r="6" fill="#0d9488" />
              </svg>

              {/* Brand content */}
              <div className="text-center space-y-1">
                <p className="text-white font-bold text-base leading-snug">
                  Joetee Optimal Limited
                </p>
                <p className="text-teal-200 text-sm font-medium italic">
                  &ldquo;Raising the Standard of Clean&rdquo;
                </p>
                <div className="pt-2 space-y-0.5 text-xs text-white/75">
                  <p>{site.phoneDisplay}</p>
                  <p>www.joeteeoptimalltd.co.uk</p>
                  <p>{site.email}</p>
                </div>
              </div>
            </div>
            <div className="px-5 py-4 bg-teal-800/60">
              <span className="inline-block rounded-full bg-teal-600/50 text-teal-100 text-xs font-semibold px-2.5 py-0.5 mb-2">
                Our Team
              </span>
              <p className="font-semibold text-white">Our team at your door</p>
              <p className="text-sm text-teal-300">Portsmouth &amp; the South — serving daily</p>
            </div>
          </article>
        </div>

        <div className="mt-10 flex flex-wrap gap-3 items-center">
          <Link
            href="/contact#quote"
            className="bg-brand-600 text-white px-5 py-3 rounded font-medium hover:bg-brand-700 transition-colors"
          >
            Request a Quote
          </Link>
          <Link
            href="/services"
            className="border border-brand-600 text-brand-700 px-5 py-3 rounded font-medium hover:bg-teal-50 transition-colors"
          >
            View All Services
          </Link>
        </div>
      </section>
    </main>
  )
}
