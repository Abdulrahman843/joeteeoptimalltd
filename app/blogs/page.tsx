import type { Metadata } from "next"
import Link from "next/link"
import PlaceholderArt from "../../components/PlaceholderArt"
import { posts } from "./posts"

export const metadata: Metadata = {
  title: "Cleaning Tips & Guides",
  description:
    "Practical cleaning guides — kitchen deep cleans, post-construction tips, and how professional cleaners save you time.",
  alternates: { canonical: "/blogs" }
}

export default function Blogs() {
  return (
    <main className="container py-16">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p, i) => (
          <article
            key={p.title}
            className="bg-white border rounded-xl overflow-hidden flex flex-col"
          >
            <PlaceholderArt
              label={p.title}
              variant={i}
              className="rounded-none"
            />
            <div className="p-4 space-y-2 flex flex-col flex-1">
              <p className="font-semibold">{p.title}</p>
              <p className="text-sm text-gray-600">{p.excerpt}</p>
              <p className="text-xs text-gray-500">{p.date}</p>
              <Link
                href={`/blogs/${p.slug}`}
                className="text-brand-700 underline text-sm mt-auto"
              >
                Read more
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
