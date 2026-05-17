import type { Metadata } from "next"
import Link from "next/link"
import Photo from "../../../components/Photo"
import { CheckIcon, ShieldIcon, SparkleIcon, ClockIcon, LeafIcon, StarIcon } from "../../../components/Icon"
import { images, site } from "../../../lib/site"

export const metadata: Metadata = {
  title: "Property Cleaning Services Portsmouth & the South",
  description:
    "Tailored property cleaning for landlords, agents, and homeowners — deep cleans, viewings prep, recurring maintenance, move-in/move-out, and specialist carpet and window work.",
  alternates: { canonical: "/services/property" }
}

const SERVICES = [
  {
    title: "One-Off Deep Cleaning",
    description: "A thorough, top-to-bottom clean for properties that need a comprehensive reset."
  },
  {
    title: "Viewings & Photoshoot Prep",
    description: "Presentation-ready cleans before estate agent photography or property viewings."
  },
  {
    title: "Regular Maintenance",
    description: "Weekly, fortnightly, or monthly maintenance to keep your property in pristine condition."
  },
  {
    title: "Move-In / Move-Out Cleaning",
    description: "Complete cleans at the start or end of a tenancy to meet inventory standards."
  },
  {
    title: "Carpet & Window Cleaning",
    description: "Specialist extraction and window cleaning services for a polished finish."
  }
]

const OFFER = [
  {
    icon: ShieldIcon,
    title: "Trained & Trustworthy Staff",
    description: "Background-checked, reliable cleaners who treat your property with respect."
  },
  {
    icon: LeafIcon,
    title: "Eco-Friendly Products",
    description: "Low-impact, certified cleaning agents safe for children, pets, and the environment."
  },
  {
    icon: ClockIcon,
    title: "Flexible Scheduling",
    description: "Morning, afternoon, or evening appointments — including weekends."
  },
  {
    icon: StarIcon,
    title: "Competitive Pricing",
    description: "Transparent, fixed-price quotes with no hidden fees or surprise charges."
  }
]

const WHO = ["Landlords", "Letting agents", "Homeowners", "Property managers", "Developers"]

export default function PropertyPage() {
  return (
    <main className="bg-white">
      <section className="container py-12 md:py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <p className="inline-block rounded-full bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-wide px-3 py-1">
            Property Cleaning Services
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Keeping your property spotless and welcoming
          </h1>
          <p className="text-lg text-gray-600">
            We provide tailored cleaning services for residential and commercial
            properties — from one-off deep cleans to recurring maintenance.
          </p>
          <p className="text-gray-600">
            Tell us your property type and cleaning requirements and we&apos;ll
            provide a tailored, fixed-price quote.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact#quote"
              className="bg-brand-600 text-white px-5 py-3 rounded font-medium hover:bg-brand-700 transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link
              href={site.whatsappUrl}
              className="border border-brand-600 text-brand-700 px-5 py-3 rounded font-medium hover:bg-teal-50 transition-colors"
            >
              WhatsApp Us
            </Link>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-2">
              Trusted by
            </p>
            <div className="flex flex-wrap gap-2">
              {WHO.map(w => (
                <span
                  key={w}
                  className="inline-block bg-teal-50 text-teal-700 border border-teal-200 rounded-full px-3 py-1 text-xs font-medium"
                >
                  {w}
                </span>
              ))}
            </div>
          </div>
        </div>
        <Photo
          src={images.deepClean.src}
          alt={images.deepClean.alt}
          aspect="wide"
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="shadow-md rounded-xl"
        />
      </section>

      <section className="bg-gray-50">
        <div className="container py-12 md:py-16">
          <h2 className="text-3xl font-bold mb-2">Our services include</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            From a one-off refresh to ongoing maintenance, we cover every property cleaning need.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map(s => (
              <div
                key={s.title}
                className="bg-white rounded-xl border p-6 hover:shadow-md transition-shadow"
              >
                <SparkleIcon className="text-brand-600 mb-3" size={24} />
                <p className="font-semibold mb-2">{s.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <h2 className="text-3xl font-bold mb-2">What we offer</h2>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Every booking comes with our commitment to quality, reliability, and professionalism.
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          {OFFER.map(o => {
            const Icon = o.icon
            return (
              <div key={o.title} className="rounded-xl border p-6 flex gap-4">
                <Icon className="text-brand-600 mt-0.5 shrink-0" size={24} />
                <div>
                  <p className="font-semibold mb-1">{o.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{o.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="container py-10 md:py-14">
        <h2 className="text-2xl font-bold mb-2">Our work in action</h2>
        <p className="text-gray-600 mb-6">Real results from real jobs — each property left spotless and ready.</p>
        <div className="grid sm:grid-cols-3 gap-4">
          <Photo
            src={images.kitchen.src}
            alt="Freshly deep-cleaned kitchen with polished worktops and spotless surfaces"
            caption="Kitchen deep clean — polished and spotless"
            aspect="square"
            sizes="(min-width: 768px) 33vw, 100vw"
            className="shadow-sm rounded-xl"
          />
          <Photo
            src={images.bathroom.src}
            alt="Professionally sanitised bathroom with descaled tiles and chrome fixtures"
            caption="Bathroom sanitisation — descaled and gleaming"
            aspect="square"
            sizes="(min-width: 768px) 33vw, 100vw"
            className="shadow-sm rounded-xl"
          />
          <Photo
            src={images.airbnb.src}
            alt="Hotel-style bedroom prepared for new occupants after a professional clean"
            caption="Property prep — hotel-standard presentation"
            aspect="square"
            sizes="(min-width: 768px) 33vw, 100vw"
            className="shadow-sm rounded-xl"
          />
        </div>
      </section>

      <section className="bg-teal-50">
        <div className="container py-12 md:py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Request a tailored property quote
            </h3>
            <p className="text-gray-700">
              Tell us about your property, the service you need, and your preferred
              dates — we&apos;ll match you with the right team and send a fixed-price
              quote promptly.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Residential", "Commercial", "HMO", "Airbnb", "New build"].map(tag => (
                <span key={tag} className="inline-block bg-white border rounded-full px-3 py-1 text-xs text-gray-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex md:justify-end gap-3 flex-wrap">
            <Link
              href="/contact#quote"
              className="bg-brand-600 text-white px-5 py-3 rounded font-medium hover:bg-brand-700 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link
              href="/services"
              className="border border-brand-600 text-brand-700 px-5 py-3 rounded font-medium hover:bg-teal-100 transition-colors"
            >
              All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
