import type { Metadata } from "next"
import Link from "next/link"
import Photo from "../../components/Photo"
import { images } from "../../lib/site"

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Recent residential and commercial cleaning projects — end of tenancy, deep cleans, after-builders, and Airbnb turnovers across the UK.",
  alternates: { canonical: "/our-work" }
}

const PROJECTS = [
  {
    title: "Two-bed end of tenancy",
    caption: "Camden, London — full checklist clean",
    image: images.endOfTenancy
  },
  {
    title: "Office reset",
    caption: "Shoreditch — weekly maintenance",
    image: images.office
  },
  {
    title: "Airbnb turnover",
    caption: "Kensington — 2-hour same-day reset",
    image: images.airbnb
  },
  {
    title: "Post-builders clean",
    caption: "Manchester — kitchen refit",
    image: images.afterBuilders
  },
  {
    title: "Deep clean",
    caption: "Birmingham — family home",
    image: images.deepClean
  },
  {
    title: "Move-in clean",
    caption: "Bristol — three-bed flat",
    image: images.moveIn
  }
]

export default function OurWork() {
  return (
    <main className="container py-16">
      <h1 className="text-4xl font-bold mb-4">Our Work</h1>
      <p className="text-gray-600 mb-8 max-w-2xl">
        Selected residential and commercial projects across the UK — end of
        tenancy, deep cleans, after-builders, Airbnb turnovers, and recurring
        commercial contracts.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map(p => (
          <article
            key={p.title}
            className="group bg-white border rounded-xl overflow-hidden shadow-sm flex flex-col transition hover:shadow-md hover:-translate-y-0.5"
          >
            <Photo
              src={p.image.src}
              alt={p.image.alt}
              className="rounded-none"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
            <div className="p-4 flex-1">
              <p className="font-semibold">{p.title}</p>
              <p className="text-sm text-gray-600">{p.caption}</p>
            </div>
          </article>
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
