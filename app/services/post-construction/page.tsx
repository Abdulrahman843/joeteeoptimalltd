import type { Metadata } from "next"
import Link from "next/link"
import Photo from "../../../components/Photo"
import { CheckIcon, ShieldIcon, SparkleIcon } from "../../../components/Icon"
import { images, site } from "../../../lib/site"

export const metadata: Metadata = {
  title: "Post-Construction Cleaning Portsmouth & the South",
  description:
    "Specialist post-construction cleaning for residential and commercial properties — debris removal, dust control, finishing, and sanitisation. Insurance-backed guarantee.",
  alternates: { canonical: "/services/post-construction" }
}

const SERVICES = [
  "Debris and construction waste removal",
  "Dusting, vacuuming, and surface wipe-downs",
  "Floor sweeping, mopping, polishing, and carpet vacuuming",
  "Interior window cleaning",
  "Sanitisation and disinfection of high-touch areas"
]

const WHY = [
  "Fully trained and equipped cleaning professionals",
  "Efficient and detailed service with thorough quality checks",
  "Flexible scheduling around your project handover date",
  "Insurance-backed guarantee for complete peace of mind"
]

const PROCESS = [
  {
    step: "1",
    title: "Site Assessment",
    description:
      "We visit or review your build to assess scope, schedule, and access requirements."
  },
  {
    step: "2",
    title: "Debris & Waste Clearance",
    description:
      "All construction debris, packaging, and waste material is safely removed from the site."
  },
  {
    step: "3",
    title: "Deep Cleaning",
    description:
      "Every surface, floor, window, and fitting is cleaned, polished, and detailed to a high standard."
  },
  {
    step: "4",
    title: "Final Inspection",
    description:
      "A thorough walkthrough ensures your property is spotless and ready for occupation or viewing."
  }
]

export default function PostConstructionPage() {
  return (
    <main className="bg-white">
      <section className="container py-12 md:py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <p className="inline-block rounded-full bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-wide px-3 py-1">
            Post-Construction Cleaning
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Move-in ready, the day the builders leave
          </h1>
          <p className="text-lg text-gray-600">
            We specialise in post-construction cleaning for residential and
            commercial properties, leaving your space spotless and ready for
            occupation.
          </p>
          <p className="text-gray-600">
            Whether it&apos;s a new build, full renovation, or single-room
            refurbishment, let us make your newly completed space shine.
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
        </div>
        <Photo
          src={images.afterBuilders.src}
          alt={images.afterBuilders.alt}
          aspect="wide"
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="shadow-md rounded-xl"
        />
      </section>

      <section className="bg-gray-50">
        <div className="container py-12 md:py-16">
          <h2 className="text-3xl font-bold mb-8">How we work</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map(p => (
              <div key={p.step} className="bg-white rounded-xl border p-6">
                <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-lg mb-4">
                  {p.step}
                </div>
                <p className="font-semibold mb-2">{p.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our services include</h2>
          <ul className="space-y-4">
            {SERVICES.map(item => (
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
            {WHY.map(item => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <ShieldIcon className="text-brand-600 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-teal-50 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-brand-700">100%</p>
              <p className="text-xs text-gray-600 mt-1">Satisfaction guaranteed</p>
            </div>
            <div className="bg-teal-50 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-brand-700">Insured</p>
              <p className="text-xs text-gray-600 mt-1">Fully insured service</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-10 md:py-14">
        <h2 className="text-2xl font-bold mb-6">Before &amp; after</h2>
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <div>
            <Photo
              src={images.afterBuilders.src}
              alt="Interior space after post-construction dust removal and clearance"
              aspect="wide"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="shadow-sm rounded-xl"
            />
            <p className="text-xs text-gray-500 text-center mt-2">
              Construction clearance &amp; deep dust removal
            </p>
          </div>
          <div>
            <Photo
              src={images.kitchen.src}
              alt="Pristine kitchen after final post-construction finishing clean"
              aspect="wide"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="shadow-sm rounded-xl"
            />
            <p className="text-xs text-gray-500 text-center mt-2">
              Final finishing clean — move-in ready
            </p>
          </div>
        </div>
      </section>

      <section className="bg-teal-50">
        <div className="container py-12 md:py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Schedule your post-construction clean
            </h3>
            <p className="text-gray-700">
              Tell us the build size, finish date, and access details. We respond
              quickly with a fixed-price quote tailored to your project.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {["New builds", "Renovations", "Extensions", "Loft conversions", "Commercial fit-outs"].map(tag => (
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
