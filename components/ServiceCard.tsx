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
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 flex-1">{description}</p>
        <div>
          <Link
            href={href}
            className="inline-block bg-brand-600 text-white px-4 py-2 rounded"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </article>
  )
}
