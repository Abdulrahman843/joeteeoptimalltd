import type { Metadata } from "next"
import ServiceCard from "../../components/ServiceCard"
import { ServiceListJsonLd } from "../../components/StructuredData"
import { images } from "../../lib/site"

export const metadata: Metadata = {
  title: "Cleaning Services — Residential, Commercial, End of Tenancy",
  description:
    "End of tenancy, commercial, post-construction, property, Airbnb, janitorial, and deep cleaning across Portsmouth, Hampshire, and the South. Fully insured, checklist-driven teams.",
  alternates: { canonical: "/services" }
}

const SERVICES = [
  {
    title: "End of Tenancy Cleaning",
    description:
      "Landlord and agent-ready cleans with transparent pricing from £130. Studio to 7-bed.",
    image: images.endOfTenancy,
    href: "/services/end-of-tenancy"
  },
  {
    title: "Commercial Cleaning",
    description:
      "Tailored office and facility cleaning — daily, weekly, or one-off. Uniformed, trained staff.",
    image: images.office,
    href: "/services/commercial"
  },
  {
    title: "Post-Construction Cleaning",
    description:
      "Debris removal, dust control, and finishing so a build is move-in ready.",
    image: images.afterBuilders,
    href: "/services/post-construction"
  },
  {
    title: "Property Cleaning Services",
    description:
      "Deep cleans, viewings prep, and recurring maintenance for landlords and homeowners.",
    image: images.deepClean,
    href: "/services/property"
  },
  {
    title: "Airbnb Turnover",
    description:
      "Hotel-grade resets between guests, with linen and amenities.",
    image: images.airbnb,
    href: "/contact#quote"
  },
  {
    title: "Janitorial Services",
    description:
      "Recurring facility maintenance — schools, offices, and retail.",
    image: images.janitorial,
    href: "/contact#quote"
  },
  {
    title: "Regular Maintenance",
    description: "Weekly or fortnightly maintenance to keep spaces fresh.",
    image: images.regular,
    href: "/contact#quote"
  },
  {
    title: "Kitchen Deep Clean",
    description:
      "Degrease hobs, extractors, splashbacks, and detail cabinetry.",
    image: images.kitchen,
    href: "/contact#quote"
  },
  {
    title: "Bathroom Deep Clean",
    description:
      "Descale, sanitise, and restore tiles, grout, and fixtures.",
    image: images.bathroom,
    href: "/contact#quote"
  }
]

export default function Services() {
  return (
    <main className="bg-white">
      <ServiceListJsonLd
        services={SERVICES.map(s => ({ name: s.title, description: s.description }))}
      />
      <section className="container py-12 md:py-16">
        <p className="inline-block rounded-full bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-wide px-3 py-1 mb-4">
          Our Services
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Professional Cleaning Services
        </h1>
        <p className="text-gray-600 mb-10 max-w-2xl text-lg">
          From routine maintenance to specialist deep cleans and post-construction
          finishing, we tailor every service to homes, businesses, rentals, and
          facilities across Portsmouth, Hampshire, and the South.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(s => (
            <ServiceCard
              key={s.title}
              title={s.title}
              description={s.description}
              image={s.image}
              href={s.href}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
