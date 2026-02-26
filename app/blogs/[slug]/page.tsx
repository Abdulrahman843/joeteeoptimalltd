import Link from "next/link"
import { notFound } from "next/navigation"
import { posts } from "../posts"

type Props = { params: { slug: string } }

export default function BlogPost({ params }: Props) {
  const post = posts.find(p => p.slug === params.slug)
  if (!post) return notFound()
  return (
    <main className="container py-16 max-w-3xl">
      <article className="prose max-w-none">
        <header className="not-prose mb-6">
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <p className="text-sm text-gray-500">{post.date}</p>
        </header>
        {post.sections.map(s => (
          <section key={s.heading}>
            <h2>{s.heading}</h2>
            {s.body?.map((b, i) => (
              <p key={i}>{b}</p>
            ))}
            {s.bullets && s.bullets.length > 0 && (
              <ul>
                {s.bullets.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </article>

      <section className="mt-10 bg-white border rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-2">Ready for a Free Quote?</h3>
        <p className="text-gray-600 mb-4">Tell us about your property and we will respond quickly.</p>
        <div className="flex gap-3">
          <Link href="/contact#quote" className="bg-brand-600 text-white px-5 py-3 rounded">Get Free Quote</Link>
          <Link href="/blogs" className="border border-brand-600 text-brand-700 px-5 py-3 rounded">Back to Blog</Link>
        </div>
      </section>
    </main>
  )
}
