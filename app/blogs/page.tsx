import Link from "next/link"
import { posts } from "./posts"

export default function Blogs() {
  return (
    <main className="container py-16">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map(p => (
          <div key={p.title} className="bg-white border rounded-xl overflow-hidden">
            <div className="aspect-video bg-gray-100" />
            <div className="p-4 space-y-2">
              <p className="font-semibold">{p.title}</p>
              <p className="text-sm text-gray-600">{p.excerpt}</p>
              <p className="text-xs text-gray-500">{p.date}</p>
              <Link href={`/blogs/${p.slug}`} className="text-brand-700 underline text-sm">Read more</Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
