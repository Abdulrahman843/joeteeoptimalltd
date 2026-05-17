import type { Metadata } from "next"
import Link from "next/link"
import QuoteForm from "../components/QuoteForm"
import ServiceCard from "../components/ServiceCard"
import Photo from "../components/Photo"
import { CheckIcon } from "../components/Icon"
import { FaqJsonLd } from "../components/StructuredData"
import { site, images } from "../lib/site"

export const metadata: Metadata = {
  title: "Professional Cleaning Services in Portsmouth & the South",
  description:
    "Trusted end of tenancy, commercial, post-construction, and property cleaning across Portsmouth, Hampshire, and the South. 7 days a week, fully insured, transparent pricing.",
  alternates: { canonical: "/" }
}

const FAQS = [
  {
    question: "Do you provide equipment and products?",
    answer:
      "Yes — our cleaners arrive fully equipped with professional tools and eco-safe supplies."
  },
  {
    question: "Are you available on weekends?",
    answer:
      "We operate 7 days a week, including evenings for short-notice bookings."
  },
  {
    question: "Do you cover end of tenancy checklists?",
    answer:
      "Yes — we follow a detailed checklist to meet landlord and agent standards."
  },
  {
    question: "Do you offer a guarantee?",
    answer:
      "If you’re not delighted, we re-clean free within 48 hours — 100% satisfaction."
  }
]

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    location: "Portsmouth",
    initials: "SM",
    color: "bg-teal-600",
    rating: 5,
    service: "End of Tenancy",
    review:
      "Absolutely spotless. My landlord was thrilled and I received my full deposit back without a single deduction. The team cleaned areas I hadn't even thought to check. Incredibly thorough and professional."
  },
  {
    name: "James T.",
    location: "Southampton",
    initials: "JT",
    color: "bg-blue-600",
    rating: 5,
    service: "Commercial Cleaning",
    review:
      "We use Joetee Optimal for our office every week. Consistently excellent results, always on time, and the team are professional and discreet. I would recommend them to any business looking for reliable commercial cleaning."
  },
  {
    name: "Rachel K.",
    location: "Brighton",
    initials: "RK",
    color: "bg-emerald-600",
    rating: 5,
    service: "Airbnb Turnovers",
    review:
      "As an Airbnb host I depend on fast, thorough turnarounds between guests. Joetee's team never lets me down. Multiple guests have commented on how spotlessly clean the flat is. Worth every penny."
  },
  {
    name: "David H.",
    location: "Chichester",
    initials: "DH",
    color: "bg-teal-700",
    rating: 5,
    service: "Post-Construction",
    review:
      "Had a full kitchen extension completed and called Joetee to handle the builders clean. They left the property in a perfect state — ready to occupy the very same day. Outstanding job from start to finish."
  },
  {
    name: "Emma W.",
    location: "Fareham",
    initials: "EW",
    color: "bg-cyan-700",
    rating: 5,
    service: "Regular Maintenance",
    review:
      "They have been cleaning my home fortnightly for six months now. Reliable, meticulous, and completely trustworthy. I would recommend Joetee Optimal to anyone looking for a dependable regular domestic cleaner."
  }
]

const HOME_SERVICES = [
  {
    title: "End of Tenancy Cleaning",
    description: "Detailed move-out cleans for landlords and tenants. Transparent pricing from £130.",
    image: images.endOfTenancy,
    href: "/services/end-of-tenancy"
  },
  {
    title: "Commercial Cleaning",
    description: "Tailored office and facility cleaning — daily, weekly, or one-off.",
    image: images.office,
    href: "/services/commercial"
  },
  {
    title: "Post-Construction Cleaning",
    description: "Debris removal, dust control, and finishing for newly built spaces.",
    image: images.afterBuilders,
    href: "/services/post-construction"
  },
  {
    title: "Property Cleaning",
    description: "Deep cleans, viewings prep, and recurring maintenance for landlords and homeowners.",
    image: images.deepClean,
    href: "/services/property"
  },
  {
    title: "Regular Cleaning",
    description: "Reliable weekly or fortnightly maintenance to keep spaces fresh.",
    image: images.regular,
    href: "/contact#quote"
  },
  {
    title: "Airbnb Turnovers",
    description: "Hotel-grade resets between guests, with linen and staging.",
    image: images.airbnb,
    href: "/contact#quote"
  }
]

export default function Home() {
  return (
    <main className="bg-white">
      <FaqJsonLd items={FAQS} />

      <section className="container py-10 md:py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Professional Cleaning Services in Portsmouth &amp; the South
          </h1>
          <p className="text-lg text-gray-600">
            Trusted end of tenancy, commercial, post-construction, and
            property cleaning — available 7 days a week with reliable,
            punctual teams across Hampshire and the South of England.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 text-teal-700 px-3 py-1 text-sm">
              Reliable
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 text-teal-700 px-3 py-1 text-sm">
              Professional
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 text-teal-700 px-3 py-1 text-sm">
              Fast Turnaround
            </span>
          </div>
          <div className="flex gap-3">
            <Link
              href="/contact#quote"
              className="bg-brand-600 text-white px-5 py-3 rounded"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/services"
              className="border border-brand-600 text-brand-700 px-5 py-3 rounded"
            >
              Services
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-6 pt-6">
            <div>
              <p className="text-3xl font-bold text-brand-700">7 Days</p>
              <p className="text-sm text-gray-600">Service available all week</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-brand-700">100%</p>
              <p className="text-sm text-gray-600">Satisfaction Guarantee</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-brand-700">Fully</p>
              <p className="text-sm text-gray-600">Insured Teams</p>
            </div>
          </div>
        </div>
        <Photo
          src={images.hero.src}
          alt={images.hero.alt}
          aspect="wide"
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="shadow-md"
        />
      </section>

      <section className="container py-10 md:py-14">
        <h2 className="text-3xl font-bold mb-2">How Our Cleaning Service Works</h2>
        <p className="text-gray-600 mb-8">
          Booking trusted cleaners has never been simpler.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              step: "1",
              title: "Book Your Cleaning",
              body: "Tell us your service, property size, and preferred date — we respond quickly with a fixed-price quote."
            },
            {
              step: "2",
              title: "We Arrive Fully Equipped",
              body: "Our trained team arrives on time with all professional tools and eco-safe cleaning supplies."
            },
            {
              step: "3",
              title: "Relax in a Spotless Space",
              body: "Enjoy a sparkling, fresh property — we handle everything thoroughly while you carry on with your day."
            }
          ].map(s => (
            <div key={s.step} className="bg-white border rounded-xl p-6">
              <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-lg mb-4">
                {s.step}
              </div>
              <p className="text-lg font-semibold mb-2">{s.title}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-10 md:py-14">
        <h2 className="text-3xl font-bold mb-6">Popular Cleaning Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOME_SERVICES.map(s => (
            <ServiceCard
              key={s.title}
              title={s.title}
              description={s.description}
              image={s.image}
              href={s.href}
            />
          ))}
        </div>
        <div className="mt-8 flex gap-3">
          <Link href="/services" className="bg-brand-600 text-white px-5 py-3 rounded">
            See All Services
          </Link>
          <Link
            href="/contact#quote"
            className="border border-brand-600 text-brand-700 px-5 py-3 rounded"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      <section className="container py-10 md:py-14 grid md:grid-cols-2 gap-10 items-center">
        <Photo
          src={images.kitchen.src}
          alt={images.kitchen.alt}
          aspect="wide"
          sizes="(min-width: 768px) 50vw, 100vw"
          className="shadow-md rounded-xl"
        />
        <div>
          <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Reliable and punctual",
              "Supplies included",
              "High cleaning standards",
              "Checklist-driven quality",
              "Competitive prices",
              "Eco-friendly options",
              "Short-notice bookings available",
              "100% satisfaction guarantee",
              "Friendly, professional service",
              "Fully insured teams"
            ].map(item => (
              <div key={item} className="flex items-center gap-2 text-gray-700">
                <CheckIcon className="text-brand-600 shrink-0" size={16} />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-10 md:py-14">
        <h2 className="text-3xl font-bold mb-2">Service Areas</h2>
        <p className="text-gray-600 mb-6">
          Based in {site.primaryArea} and serving Hampshire, West Sussex,
          Surrey, Dorset, Berkshire, and London — available 7 days a week.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
          {site.serviceAreas.map(city => {
            const primary = city === site.primaryArea
            return (
              <span
                key={city}
                className={
                  primary
                    ? "inline-flex items-center gap-2 rounded bg-brand-600 text-white px-3 py-2 font-semibold"
                    : "inline-block rounded bg-gray-100 px-3 py-2"
                }
              >
                {primary && (
                  <span className="inline-block rounded-full bg-white/20 text-[10px] uppercase tracking-wide px-1.5 py-0.5">
                    Primary
                  </span>
                )}
                {city}
              </span>
            )
          })}
        </div>
      </section>

      <section className="container py-10 md:py-14">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {FAQS.map(f => (
            <div key={f.question} className="bg-white border rounded-xl p-6">
              <p className="font-semibold mb-2">{f.question}</p>
              <p className="text-gray-600">{f.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="container py-12 md:py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">
              Trusted by Homeowners, Landlords &amp; Businesses
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real reviews from real customers across Portsmouth, Hampshire, and the South of England.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map(t => (
              <div
                key={t.name}
                className="bg-white rounded-xl border p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} className="text-amber-400 text-lg leading-none">★</span>
                    ))}
                  </div>
                  <span className="text-xs text-gray-400 uppercase tracking-wide font-medium border rounded-full px-2 py-0.5">
                    {t.service}
                  </span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed flex-1">&ldquo;{t.review}&rdquo;</p>
                <div className="flex items-center gap-3 pt-2 border-t">
                  <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.location}</p>
                  </div>
                  <svg className="ml-auto text-brand-600 opacity-60" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M9 11H5a3 3 0 010-6h1a3 3 0 013 3v3zm11 0h-4a3 3 0 010-6h1a3 3 0 013 3v3zm-9 4v4a2 2 0 004 0v-4H11zm2-4v8"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">
            Verified customer reviews — collected via direct feedback and booking enquiries.
          </p>
        </div>
      </section>

      <section className="bg-teal-50">
        <div className="container py-12 md:py-16 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold">
              Get a Free Cleaning Quote Today
            </h3>
            <p className="text-gray-700">
              Tell us about your property — we respond quickly with a
              transparent, fixed-price quote.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact#quote"
                className="bg-brand-600 text-white px-5 py-3 rounded font-medium hover:bg-brand-700 transition-colors"
              >
                Request Quote
              </Link>
              <Link
                href={site.whatsappUrl}
                className="border border-brand-600 text-brand-700 px-5 py-3 rounded font-medium hover:bg-teal-100 transition-colors"
              >
                WhatsApp
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-xl border p-6">
            <QuoteForm id="quote" />
          </div>
        </div>
      </section>
    </main>
  )
}
