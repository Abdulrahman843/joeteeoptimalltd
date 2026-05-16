"use client"
import Image from "next/image"
import { useState } from "react"

type Props = {
  src: string
  alt: string
  caption?: string
  className?: string
  priority?: boolean
  sizes?: string
  aspect?: "video" | "square" | "portrait" | "wide"
}

const aspectMap = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  wide: "aspect-[16/10]"
}

export default function Photo({
  src,
  alt,
  caption,
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  aspect = "video"
}: Props) {
  const [errored, setErrored] = useState(false)
  return (
    <figure
      className={`relative overflow-hidden rounded-xl ${aspectMap[aspect]} bg-gradient-to-br from-teal-500 via-emerald-500 to-cyan-500 ${className}`}
    >
      {!errored && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onError={() => setErrored(true)}
          className="object-cover transition-transform duration-500 hover:scale-[1.03]"
        />
      )}
      {errored && (
        <div className="absolute inset-0 flex items-end p-5">
          <p className="text-white/95 font-medium text-sm drop-shadow-sm">
            {alt}
          </p>
        </div>
      )}
      {caption && !errored && (
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 text-sm text-white">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
