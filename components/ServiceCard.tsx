import Link from "next/link"
import Photo from "./Photo"

type Props = {
  title: string
  description: string
  href?: string
  image?: { src: string; alt: string }
}

export default function ServiceCard({
  title,
  description,
  href = "/contact",
  image
}: Props) {
  return (
    <article className="group bg-white rounded-xl shadow-sm border overflow-hidden flex flex-col transition hover:shadow-md hover:-translate-y-0.5">
      {image && (
        <Photo
          src={image.src}
          alt={image.alt}
          className="rounded-none"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      )}
      <div className="p-6 flex flex-col gap-3 flex-1">
        <h3 className="text-xl font-semibold group-hover:text-brand-700 transition-colors">{title}</h3>
        <p className="text-gray-600 flex-1 text-sm leading-relaxed">{description}</p>
        <div>
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 bg-brand-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-brand-700 transition-colors"
          >
            Get a Free Quote
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}
