import type { Metadata } from "next"
import Link from "next/link"
import Photo from "../../components/Photo"
import { images } from "../../lib/site"
import { posts } from "./posts"

export const metadata: Metadata = {
  title: "Cleaning Tips & Guides",
  description:
    "Practical cleaning guides — kitchen deep cleans, post-construction tips, and how professional cleaners save you time.",
  alternates: { canonical: "/blogs" }
}

const BLOG_IMAGES: Record<string, { src: string; alt: string }> = {
  "kitchen-deep-cleaning-guide": images.blogKitchen,
  "why-professional-cleaners-save-time": images.blogPros,
  "post-construction-cleaning-tips": images.blogPostBuild
}

export default function Blogs() {
  return (
    <main className="container py-16">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map(p => {
          const img = BLOG_IMAGES[p.slug] ?? images.deepClean
          return (
            <article
              key={p.title}
              className="group bg-white border rounded-xl overflow-hidden flex flex-col shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
            >
              <Photo
                src={img.src}
                alt={img.alt}
                className="rounded-none"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
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
          )
        })}
      </div>
    </main>
  )
}
