import type { Metadata } from "next"
import Link from "next/link"
import Photo from "../../../components/Photo"
import { CheckIcon, ShieldIcon, SparkleIcon, ClockIcon, LeafIcon } from "../../../components/Icon"
import { images, site } from "../../../lib/site"

export const metadata: Metadata = {
  title: "Commercial Cleaning Services Portsmouth & the South",
  description:
    "Tailored commercial cleaning for offices, retail, and facilities across Portsmouth and the South. Trained, uniformed staff, eco-friendly products, transparent pricing.",
  alternates: { canonical: "/services/commercial" }
}

const SERVICES = [
  {
    title: "Office Cleaning",
    description:
      "Desks, chairs, floors, blinds, restrooms, kitchens, and break rooms — left immaculate every visit."
  },
  {
    title: "Sanitisation & Disinfection",
    description:
      "Professional-grade products applied to all high-contact surfaces, shared areas, and washrooms."
  },
  {
    title: "Window & Carpet Cleaning",
    description:
      "Interior window cleans and deep carpet extraction to restore a fresh, professional appearance."
  },
  {
    title: "Waste Disposal & Recycling",
    description:
      "Responsible collection and separation of general waste and recyclables in line with UK guidelines."
  },
  {
    title: "High-Touch Surface Cleaning",
    description:
      "Lift buttons, door handles, light switches, and shared workstation areas thoroughly sanitised."
  }
]

const WHY = [
  {
    icon: ClockIcon,
    title: "Tailored Schedules",
    description:
      "Daily, weekly, monthly, or one-off cleans — built entirely around your operating hours."
  },
  {
    icon: ShieldIcon,
    title: "Trained & Uniformed Staff",
    description:
      "Background-checked professionals who represent your business with discretion and care."
  },
  {
    icon: LeafIcon,
    title: "Eco-Friendly Products",
    description:
      "Certified, low-impact cleaning agents that are safe for your people and the environment."
  },
  {
    icon: SparkleIcon,
    title: "Flexible Hours",
    description:
      "Early mornings, evenings, and weekends — we work around your schedule, not the other way round."
  },
  {
    icon: CheckIcon,
    title: "Transparent Pricing",
    description:
      "Fixed-price quotes with no hidden costs, no surprises, and no lock-in contracts."
  }
]

const STATS = [
  { value: "7 Days", label: "Available all week" },
  { value: "100%", label: "Satisfaction guarantee" },
  { value: "Fully", label: "Insured & vetted" }
]

export default function CommercialPage() {
  return (
    <main className="bg-white">
      <section className="container py-12 md:py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <p className="inline-block rounded-full bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-wide px-3 py-1">
            Commercial Cleaning
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            A spotless workplace, on your schedule
          </h1>
          <p className="text-lg text-gray-600">
            Keep your office or commercial space spotless with our tailored
            commercial cleaning solutions. Consistent, professional results
            — every visit.
          </p>
          <p className="text-gray-600">
            Let us handle the cleaning while you focus on running your business.
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
          <div className="grid grid-cols-3 gap-4 pt-2">
            {STATS.map(s => (
              <div key={s.label}>
                <p className="text-2xl font-bold text-brand-700">{s.value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <Photo
          src={images.office.src}
          alt={images.office.alt}
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
            Comprehensive cleaning solutions tailored to your commercial environment and requirements.
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
        <h2 className="text-3xl font-bold mb-2">Why choose us</h2>
        <p className="text-gray-600 mb-8 max-w-2xl">
          We make commercial cleaning simple, consistent, and cost-effective for businesses of every size.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY.map(w => {
            const Icon = w.icon
            return (
              <div key={w.title} className="rounded-xl border p-6">
                <Icon className="text-brand-600 mb-3" size={24} />
                <p className="font-semibold mb-2">{w.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{w.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="container py-10 md:py-14">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <Photo
            src={images.office.src}
            alt="Professionally cleaned open-plan office"
            aspect="wide"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="shadow-sm rounded-xl"
          />
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Serving businesses across Portsmouth &amp; the South</h3>
            <p className="text-gray-600">
              From small offices to large commercial facilities, we provide a reliable,
              discreet cleaning service that keeps your workspace presentable and your
              staff comfortable — day in, day out.
            </p>
            <ul className="space-y-2">
              {[
                "Offices and co-working spaces",
                "Retail units and showrooms",
                "Restaurants and hospitality venues",
                "Warehouses and industrial units",
                "Schools, gyms, and healthcare premises"
              ].map(item => (
                <li key={item} className="flex items-center gap-2 text-gray-700 text-sm">
                  <CheckIcon className="text-brand-600" size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-teal-50">
        <div className="container py-12 md:py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Get a tailored commercial quote
            </h3>
            <p className="text-gray-700">
              Tell us your site size, frequency, and preferred schedule.
              We&apos;ll respond quickly with a transparent, fixed-price quote —
              no hidden costs, no long-term contracts.
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
