import type { Metadata } from "next"
import Link from "next/link"
import Photo from "../../../components/Photo"
import { CheckIcon, ShieldIcon } from "../../../components/Icon"
import { images, site } from "../../../lib/site"

export const metadata: Metadata = {
  title: "End of Tenancy Cleaning Portsmouth & the South",
  description:
    "Professional end of tenancy cleaning across Portsmouth, Hampshire, and the South. Transparent pricing from £130 for studios up to £430 for 7-bed homes. Landlord and agent-ready.",
  alternates: { canonical: "/services/end-of-tenancy" }
}

const PRICING = [
  { type: "Studio Flat", price: "from £130" },
  { type: "1 Bedroom Flat", price: "from £160" },
  { type: "2 Bedroom Flat / House", price: "from £220" },
  { type: "3 Bedroom House", price: "from £250" },
  { type: "4 Bedroom House", price: "from £300" },
  { type: "5 Bedroom House", price: "from £350" },
  { type: "6 Bedroom House", price: "from £385" },
  { type: "7 Bedroom House", price: "from £430" }
]

const INCLUDES = [
  "Deep clean of kitchens and appliances — ovens, hobs, cupboards, and cabinets",
  "Bathroom descaling, sanitising, and limescale removal",
  "Stain treatment on walls, skirting, and carpets",
  "Windows, frames, and hard-to-reach corners",
  "Floor washing, hoovering, and edge detailing",
  "Inventory-checklist standard for landlord and agent sign-off"
]

const TRUST = [
  "Fully insured, vetted teams",
  "Checklist-driven for deposit return",
  "Eco-safe products on request",
  "Re-clean within 48 hours if not delighted"
]

const WHO = ["Tenants", "Landlords", "Estate agents", "Property managers"]

export default function EndOfTenancyPage() {
  return (
    <main className="bg-white">
      <section className="container py-12 md:py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <p className="inline-block rounded-full bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-wide px-3 py-1">
            End of Tenancy Cleaning
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Professional End of Tenancy Cleaning — Deposit Ready
          </h1>
          <p className="text-lg text-gray-600">
            Leave your property spotless and sparkling with our professional end
            of tenancy cleaning service. We restore every room to a high
            standard — giving you the best chance of a full deposit return.
          </p>
          <p className="text-gray-600">
            We focus on deep cleaning kitchens and kitchen appliances including
            ovens, hobs, cupboards, and cabinets. Our service also includes
            bathroom descaling, sanitising, stain removal from walls and
            carpets, and attention to difficult-to-reach areas such as windows
            and corners.
          </p>
          <p className="text-gray-600">
            Whether you are a tenant, landlord, estate agent, or property
            manager, we help restore the beauty, freshness, and presentation of
            the property to a high professional standard.
          </p>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-2">
              We work with
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
        </div>
        <Photo
          src={images.endOfTenancy.src}
          alt={images.endOfTenancy.alt}
          aspect="wide"
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="shadow-md rounded-xl"
        />
      </section>

      <section className="bg-gray-50">
        <div className="container py-12 md:py-16">
          <h2 className="text-3xl font-bold mb-2">Transparent pricing</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Fixed-price quotes by property size. All prices include supplies,
            equipment, and a thorough checklist-driven clean.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRICING.map(p => (
              <div
                key={p.type}
                className="bg-white border rounded-xl p-5 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
              >
                <p className="text-sm text-gray-500">{p.type}</p>
                <p className="text-2xl font-bold text-brand-700 mt-2">{p.price}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Final quote may vary based on property condition and any add-ons such as carpet
            steam cleaning or exterior window cleaning.
          </p>
        </div>
      </section>

      <section className="container py-12 md:py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold mb-6">What&apos;s included</h2>
          <ul className="space-y-4">
            {INCLUDES.map(item => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <CheckIcon className="text-brand-600 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Why choose us</h2>
          <ul className="space-y-4">
            {TRUST.map(item => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <ShieldIcon className="text-brand-600 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-teal-50 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-brand-700">48hr</p>
              <p className="text-xs text-gray-600 mt-1">Re-clean guarantee</p>
            </div>
            <div className="bg-teal-50 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-brand-700">7 Days</p>
              <p className="text-xs text-gray-600 mt-1">Available all week</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-teal-50">
        <div className="container py-12 md:py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Book your end of tenancy clean
            </h3>
            <p className="text-gray-700">
              Tell us your property size, address, and preferred date. We&apos;ll
              respond quickly with a transparent, fixed-price quote.
            </p>
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
