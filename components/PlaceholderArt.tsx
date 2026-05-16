type Props = {
  label?: string
  caption?: string
  variant?: number
  className?: string
}

const palettes = [
  "from-teal-500 via-emerald-500 to-cyan-500",
  "from-sky-500 via-teal-500 to-emerald-500",
  "from-emerald-500 via-teal-600 to-sky-600",
  "from-cyan-500 via-teal-500 to-emerald-600",
  "from-teal-600 via-cyan-500 to-sky-500",
  "from-emerald-600 via-teal-500 to-cyan-500"
]

export default function PlaceholderArt({
  label,
  caption,
  variant = 0,
  className = ""
}: Props) {
  const gradient = palettes[variant % palettes.length]
  return (
    <div
      className={`relative aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br ${gradient} ${className}`}
      aria-hidden={label ? undefined : true}
      role={label ? "img" : undefined}
      aria-label={label}
    >
      <svg
        viewBox="0 0 400 225"
        className="absolute inset-0 h-full w-full opacity-20"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id={`p-${variant}`}
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="20" cy="20" r="1.5" fill="white" />
          </pattern>
        </defs>
        <rect width="400" height="225" fill={`url(#p-${variant})`} />
        <circle cx="320" cy="60" r="70" fill="white" opacity="0.12" />
        <circle cx="80" cy="180" r="50" fill="white" opacity="0.10" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-start justify-end p-5 text-white">
        {label && (
          <p className="text-lg font-semibold drop-shadow-sm">{label}</p>
        )}
        {caption && (
          <p className="text-sm text-white/90 drop-shadow-sm">{caption}</p>
        )}
      </div>
    </div>
  )
}
