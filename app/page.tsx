import Link from "next/link"
import QuoteForm from "../components/QuoteForm"
import ServiceCard from "../components/ServiceCard"

export default function Home() {
  return (
    <main>
      <section className="container py-16 grid lg:grid-cols-2 gap-10">
        <div className="flex flex-col gap-6">
          <p className="text-brand-700 font-semibold">Welcome to Joetee Optimal Limited</p>
          <h1 className="text-4xl md:text-5xl font-bold">Premium Cleaning for Homes and Businesses</h1>
          <p className="text-lg text-gray-600">
            Standard, big, regular maintenance, and deep cleaning. Move-in/move-out, Airbnb, post-construction, janitorial services.
          </p>
          <div className="flex gap-3">
            <a href="#quote" className="bg-brand-600 text-white px-5 py-3 rounded-full">Get a Free Quote</a>
            <a href="https://wa.me/447442907768" className="border border-brand-600 text-brand-700 px-5 py-3 rounded-full">WhatsApp</a>
          </div>
          <div className="flex gap-4 text-sm text-gray-600">
            <span>Insured</span>
            <span>Checklist Driven</span>
            <span>100% Satisfaction Guarantee</span>
          </div>
        </div>
        <QuoteForm />
      </section>

      <section className="container py-12">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard title="Residential Cleaning" description="Careful, thorough cleaning for homes and apartments." />
          <ServiceCard title="Commercial Cleaning" description="Reliable maintenance for offices and retail spaces." />
          <ServiceCard title="Move-in/Move-out" description="Detailed cleaning for end of tenancy and new arrivals." />
          <ServiceCard title="Airbnb Cleaning" description="Fast turnaround and checklist-based resets." />
          <ServiceCard title="Post-construction" description="Dust removal and finishing for new builds and renovations." />
          <ServiceCard title="Janitorial Services" description="Recurring cleaning for buildings and facilities." />
          <ServiceCard title="Standard Cleaning" description="Regular cleaning to keep spaces fresh." />
          <ServiceCard title="Big Cleaning" description="Extended sessions for larger scope tasks." />
          <ServiceCard title="Deep Cleaning" description="Intensive cleaning of kitchens, baths, and high-touch areas." />
        </div>
        <div className="mt-8">
          <Link href="/services" className="text-brand-700 underline">Explore all services</Link>
        </div>
      </section>

      <section className="container py-12 grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Transform Your Property</h2>
          <p className="text-gray-600">
            Trained teams, eco-friendly options, supplies included, punctual scheduling, transparent pricing, and re-clean guarantee.
          </p>
          <div className="flex gap-3">
            <Link href="/about" className="bg-gray-900 text-white px-5 py-3 rounded">About Us</Link>
            <Link href="/our-work" className="bg-brand-600 text-white px-5 py-3 rounded">Our Portfolio</Link>
          </div>
        </div>
        <div className="bg-white rounded-xl border p-6">
          <div className="aspect-video bg-gray-100 rounded-lg" />
        </div>
      </section>
    </main>
  )
}
