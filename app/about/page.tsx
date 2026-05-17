import type { Metadata } from "next"
import Link from "next/link"
import Photo from "../../components/Photo"
import { CheckIcon, ShieldIcon, SparkleIcon, LeafIcon } from "../../components/Icon"
import { site, images } from "../../lib/site"

export const metadata: Metadata = {
  title: "About Joetee Optimal Limited",
  description: `${site.name} delivers premium residential and commercial cleaning with trained professionals, checklist-driven quality, eco-friendly products, and a 100% satisfaction guarantee across Portsmouth and the South.`,
  alternates: { canonical: "/about" }
}

const VALUES = [
  {
    icon: SparkleIcon,
    title: "Premium Standards",
    description:
      "Every clean follows a detailed, room-by-room checklist to ensure consistent, high-quality results — every single visit."
  },
  {
    icon: ShieldIcon,
    title: "Vetted & Insured",
    description:
      "All team members are background-checked, trained, and fully insured for your complete peace of mind."
  },
  {
    icon: LeafIcon,
    title: "Eco-Friendly Options",
    description:
      "We use certified, low-impact cleaning products that are safe for children, pets, and the environment."
  },
  {
    icon: CheckIcon,
    title: "Satisfaction Guarantee",
    description:
      "If you are not completely delighted with the result, we will return and re-clean free of charge within 48 hours."
  }
]

const STATS = [
  { value: "7", label: "Days available" },
  { value: "48hr", label: "Re-clean guarantee" },
  { value: "100%", label: "Satisfaction rate" },
  { value: "Fully", label: "Insured teams" }
]

export default function About() {
  return (
    <main className="bg-white">
      <section className="container py-12 md:py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="inline-block rounded-full bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-wide px-3 py-1">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Cleaning you can trust, every time
          </h1>
          <p className="text-lg text-gray-600">
            {site.name} is a professional cleaning company based in Portsmouth,
            serving homes, businesses, landlords, and property managers across
            Hampshire and the South of England.
          </p>
          <p className="text-gray-600">
            We built this business on a simple belief: every client deserves a
            reliable, punctual, and thorough cleaning service — with
            transparent pricing and no surprises. From a single bedroom flat
            to a large commercial facility, we bring the same level of care
            and professionalism to every job.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {STATS.map(s => (
              <div key={s.label} className="bg-teal-50 rounded-xl p-4 text-center">
                <p className="text-xl font-bold text-brand-700">{s.value}</p>
                <p className="text-xs text-gray-600 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/contact#quote"
              className="bg-brand-600 text-white px-5 py-3 rounded font-medium hover:bg-brand-700 transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/services"
              className="border border-brand-600 text-brand-700 px-5 py-3 rounded font-medium hover:bg-teal-50 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <Photo
            src={images.team.src}
            alt={images.team.alt}
            caption="Professional, eco-safe cleaning — every visit."
            aspect="wide"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="shadow-md"
          />
          <div className="grid grid-cols-2 gap-4">
            <Photo
              src={images.kitchen.src}
              alt={images.kitchen.alt}
              aspect="square"
              sizes="(min-width: 768px) 25vw, 50vw"
              className="shadow-sm"
            />
            <Photo
              src={images.bathroom.src}
              alt={images.bathroom.alt}
              aspect="square"
              sizes="(min-width: 768px) 25vw, 50vw"
              className="shadow-sm"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="container py-12 md:py-16">
          <h2 className="text-3xl font-bold mb-2">Our values</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            We are committed to delivering a premium cleaning experience built on
            professionalism, reliability, and respect for every property we clean.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map(v => {
              const Icon = v.icon
              return (
                <div key={v.title} className="bg-white rounded-xl border p-6">
                  <Icon className="text-brand-600 mb-3" size={24} />
                  <p className="font-semibold mb-2">{v.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{v.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Based in Portsmouth, serving the South</h2>
          <p className="text-gray-600 mb-4">
            Our primary base is Portsmouth, and we cover a wide area including
            Southampton, Chichester, Fareham, Gosport, Havant, Winchester,
            Bournemouth, Brighton, and London.
          </p>
          <ul className="space-y-2">
            {[
              "Available 7 days a week, including bank holidays",
              "Short-notice and same-day bookings accepted",
              "Residential, commercial, and specialist cleaning",
              "Trusted by landlords, letting agents, and homeowners"
            ].map(item => (
              <li key={item} className="flex items-center gap-2 text-gray-700 text-sm">
                <CheckIcon className="text-brand-600 shrink-0" size={16} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <Photo
          src={images.deepClean.src}
          alt="Professional deep clean of a modern residential property"
          aspect="wide"
          sizes="(min-width: 768px) 50vw, 100vw"
          className="shadow-md"
        />
      </section>
    </main>
  )
}
