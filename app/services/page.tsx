import type { Metadata } from "next"
import ServiceCard from "../../components/ServiceCard"
import { ServiceListJsonLd } from "../../components/StructuredData"
import { images } from "../../lib/site"

export const metadata: Metadata = {
  title: "Cleaning Services — Residential, Commercial, End of Tenancy",
  description:
    "Residential, commercial, end of tenancy, Airbnb turnover, post-construction, janitorial, and deep cleaning across the UK. Fully insured, checklist-driven teams.",
  alternates: { canonical: "/services" }
}

const SERVICES = [
  {
    title: "Residential Cleaning",
    description: "Detailed cleaning for homes and apartments.",
    image: images.deepClean
  },
  {
    title: "Commercial Cleaning",
    description: "Consistent cleaning for offices and businesses.",
    image: images.office
  },
  {
    title: "End of Tenancy",
    description: "Move-out cleans to landlord and agent standards.",
    image: images.endOfTenancy
  },
  {
    title: "Airbnb Turnover",
    description: "Reset and staging between guests, with linen and amenities.",
    image: images.airbnb
  },
  {
    title: "Post-construction",
    description: "Dust removal and finishing after builds and refurbishments.",
    image: images.afterBuilders
  },
  {
    title: "Janitorial Services",
    description: "Recurring building maintenance for facilities and offices.",
    image: images.janitorial
  },
  {
    title: "Regular Maintenance",
    description: "Weekly or bi-weekly maintenance to keep spaces fresh.",
    image: images.regular
  },
  {
    title: "Kitchen Deep Clean",
    description: "Degrease hobs, extractors, splashbacks, and detail cabinetry.",
    image: images.kitchen
  },
  {
    title: "Bathroom Deep Clean",
    description: "Descale, sanitise, and restore tiles, grout, and fixtures.",
    image: images.bathroom
  }
]

export default function Services() {
  return (
    <main className="container py-16">
      <ServiceListJsonLd
        services={SERVICES.map(s => ({ name: s.title, description: s.description }))}
      />
      <h1 className="text-4xl font-bold mb-4">Cleaning Services</h1>
      <p className="text-gray-600 mb-8 max-w-2xl">
        From routine maintenance to deep cleans and post-construction, we tailor
        services to homes, businesses, rentals, and facilities across the UK.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map(s => (
          <ServiceCard
            key={s.title}
            title={s.title}
            description={s.description}
            image={s.image}
            href="/contact#quote"
          />
        ))}
      </div>
    </main>
  )
}
