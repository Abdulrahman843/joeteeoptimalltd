import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import Photo from "../../../components/Photo"
import { posts } from "../posts"
import { site, images } from "../../../lib/site"

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = posts.find(p => p.slug === params.slug)
  if (!post) {
    return { title: "Article not found" }
  }
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${site.url}/blogs/${post.slug}`,
      publishedTime: new Date(post.date).toISOString()
    }
  }
}

const BLOG_IMAGES: Record<string, { src: string; alt: string }> = {
  "kitchen-deep-cleaning-guide": images.blogKitchen,
  "why-professional-cleaners-save-time": images.blogPros,
  "post-construction-cleaning-tips": images.blogPostBuild
}

export default function BlogPost({ params }: Props) {
  const post = posts.find(p => p.slug === params.slug)
  if (!post) return notFound()
  const img = BLOG_IMAGES[post.slug] ?? images.deepClean
  return (
    <main className="container py-16 max-w-3xl">
      <article className="prose max-w-none">
        <header className="not-prose mb-6 space-y-4">
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <p className="text-sm text-gray-500">{post.date}</p>
          <Photo
            src={img.src}
            alt={img.alt}
            aspect="wide"
            priority
            sizes="(min-width: 1024px) 768px, 100vw"
            className="shadow-md"
          />
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
        <p className="text-gray-600 mb-4">
          Tell us about your property and we will respond quickly.
        </p>
        <div className="flex gap-3">
          <Link
            href="/contact#quote"
            className="bg-brand-600 text-white px-5 py-3 rounded"
          >
            Get Free Quote
          </Link>
          <Link
            href="/blogs"
            className="border border-brand-600 text-brand-700 px-5 py-3 rounded"
          >
            Back to Blog
          </Link>
        </div>
      </section>
    </main>
  )
}
