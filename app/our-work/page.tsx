import type { Metadata } from "next"
import Link from "next/link"
import PlaceholderArt from "../../components/PlaceholderArt"

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Recent residential and commercial cleaning projects — end of tenancy, deep cleans, after-builders, and Airbnb turnovers across the UK.",
  alternates: { canonical: "/our-work" }
}

const PROJECTS = [
  { title: "Two-bed end of tenancy", caption: "Camden, London — full checklist clean" },
  { title: "Office reset", caption: "Shoreditch — weekly maintenance" },
  { title: "Airbnb turnover", caption: "Kensington — 2-hour same-day reset" },
  { title: "Post-builders clean", caption: "Manchester — kitchen refit" },
  { title: "Deep clean", caption: "Birmingham — family home" },
  { title: "Move-in clean", caption: "Bristol — three-bed flat" }
]

export default function OurWork() {
  return (
    <main className="container py-16">
      <h1 className="text-4xl font-bold mb-8">Our Work</h1>
      <p className="text-gray-600 mb-6">
        Selected projects and before/after transformations.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((p, i) => (
          <div key={p.title} className="bg-white border rounded-xl overflow-hidden">
            <PlaceholderArt label={p.title} variant={i} className="rounded-none" />
            <div className="p-4">
              <p className="font-semibold">{p.title}</p>
              <p className="text-sm text-gray-600">{p.caption}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link
          href="/contact#quote"
          className="bg-brand-600 text-white px-5 py-3 rounded"
        >
          Request a Quote
        </Link>
      </div>
    </main>
  )
}
