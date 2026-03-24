import Link from "next/link"
import QuoteForm from "../components/QuoteForm"
import ServiceCard from "../components/ServiceCard"

export default function Home() {
  return (
    <main className="bg-white">
      <section className="container py-10 md:py-16 grid lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Professional Cleaning Services in London</h1>
          <p className="text-lg text-gray-600">
            Trusted end of tenancy, deep cleaning, move‑in/move‑out, after builders, and regular maintenance —
            available 7 days a week with reliable, punctual teams.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 text-teal-700 px-3 py-1 text-sm">Reliable</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 text-teal-700 px-3 py-1 text-sm">Professional</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 text-teal-700 px-3 py-1 text-sm">Fast Turnaround</span>
          </div>
          <div className="flex gap-3">
            <Link href="/contact#quote" className="bg-brand-600 text-white px-5 py-3 rounded">Get a Free Quote</Link>
            <Link href="/services" className="border border-brand-600 text-brand-700 px-5 py-3 rounded">Services</Link>
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
        <div className="bg-white rounded-2xl border shadow-sm p-4 md:p-6">
          <p className="font-semibold mb-3">Get a Free Cleaning Quote</p>
          <QuoteForm />
        </div>
      </section>

      <section className="container py-10 md:py-14">
        <h2 className="text-3xl font-bold mb-2">How Our Cleaning Service Works</h2>
        <p className="text-gray-600 mb-8">Booking trusted cleaners has never been easier.</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border rounded-xl p-6">
            <p className="text-lg font-semibold mb-2">1. Book Your Cleaning</p>
            <p className="text-gray-600">Select your service, choose a date, and book in under 60 seconds.</p>
          </div>
          <div className="bg-white border rounded-xl p-6">
            <p className="text-lg font-semibold mb-2">2. We Arrive Fully Equipped</p>
            <p className="text-gray-600">Professional teams arrive with all tools and eco‑safe supplies.</p>
          </div>
          <div className="bg-white border rounded-xl p-6">
            <p className="text-lg font-semibold mb-2">3. Relax in a Spotless Space</p>
            <p className="text-gray-600">Enjoy a sparkling property — we handle everything while you relax.</p>
          </div>
        </div>
      </section>

      <section className="container py-10 md:py-14">
        <h2 className="text-3xl font-bold mb-6">Popular Cleaning Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard title="End of Tenancy Cleaning" description="Detailed move‑out cleans for landlords and tenants." />
          <ServiceCard title="Deep Cleaning" description="Thorough top‑to‑bottom clean for kitchens, baths, and living areas." />
          <ServiceCard title="Move‑in / Move‑out" description="Fresh start cleans before you move in or after you move out." />
          <ServiceCard title="After Builders Cleaning" description="Dust removal and finishing after renovations and construction." />
          <ServiceCard title="Regular Cleaning" description="Reliable weekly/bi‑weekly maintenance to keep spaces fresh." />
          <ServiceCard title="Property Cleaning" description="Tailored packages for homes, apartments, and offices." />
        </div>
        <div className="mt-8 flex gap-3">
          <Link href="/services" className="bg-brand-600 text-white px-5 py-3 rounded">See All Services</Link>
          <Link href="/contact#quote" className="border border-brand-600 text-brand-700 px-5 py-3 rounded">Get a Free Quote</Link>
        </div>
      </section>

      <section className="container py-10 md:py-14">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border rounded-xl p-6">
            <ul className="space-y-2 text-gray-700">
              <li>Reliable and punctual</li>
              <li>High cleaning standards</li>
              <li>Competitive prices</li>
              <li>Short‑notice bookings available</li>
              <li>Friendly, professional service</li>
            </ul>
          </div>
          <div className="bg-white border rounded-xl p-6">
            <ul className="space-y-2 text-gray-700">
              <li>Supplies included</li>
              <li>Checklist‑driven quality</li>
              <li>Eco‑friendly options</li>
              <li>100% satisfaction guarantee</li>
              <li>Fully insured teams</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container py-10 md:py-14">
        <h2 className="text-3xl font-bold mb-6">Service Areas</h2>
        <p className="text-gray-600 mb-4">Serving London and surrounding areas — available 7 days a week.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
          {[
            "London", "Manchester", "Birmingham", "Leeds",
            "Glasgow", "Liverpool", "Edinburgh", "Bristol",
            "Nottingham", "Sheffield", "Leicester", "Brighton"
          ].map(city => (
            <span key={city} className="inline-block rounded bg-gray-100 px-3 py-2">{city}</span>
          ))}
        </div>
      </section>

      <section className="container py-10 md:py-14">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border rounded-xl p-6">
            <p className="font-semibold mb-2">Do you provide equipment and products?</p>
            <p className="text-gray-600">Yes — our cleaners arrive fully equipped with professional tools and eco‑safe supplies.</p>
          </div>
          <div className="bg-white border rounded-xl p-6">
            <p className="font-semibold mb-2">Are you available on weekends?</p>
            <p className="text-gray-600">We operate 7 days a week, including evenings for short‑notice bookings.</p>
          </div>
          <div className="bg-white border rounded-xl p-6">
            <p className="font-semibold mb-2">Do you cover end of tenancy checklists?</p>
            <p className="text-gray-600">Yes — we follow a detailed checklist to meet landlord and agent standards.</p>
          </div>
          <div className="bg-white border rounded-xl p-6">
            <p className="font-semibold mb-2">Do you offer a guarantee?</p>
            <p className="text-gray-600">If you’re not delighted, we re‑clean free within 48 hours — 100% satisfaction.</p>
          </div>
        </div>
      </section>

      <section className="bg-teal-50">
        <div className="container py-12 md:py-16 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-bold">Get a Free Cleaning Quote Today</h3>
            <p className="text-gray-700">Tell us about your property — we respond quickly with a fixed‑price quote.</p>
            <div className="flex gap-3">
              <Link href="/contact#quote" className="bg-brand-600 text-white px-5 py-3 rounded">Request Quote</Link>
              <Link href="https://wa.me/447442907768" className="border border-brand-600 text-brand-700 px-5 py-3 rounded">WhatsApp</Link>
            </div>
          </div>
          <div className="bg-white rounded-xl border p-6">
            <QuoteForm />
          </div>
        </div>
      </section>
    </main>
  )
}
