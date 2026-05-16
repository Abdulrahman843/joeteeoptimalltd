"use client"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { site, telHref } from "../lib/site"

const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/our-work", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt={`${site.name} logo`} className="h-8 w-8" />
          <span className="font-semibold">{site.name}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          {NAV.map(n => (
            <Link
              key={n.href}
              href={n.href}
              className={
                isActive(n.href)
                  ? "text-brand-700 font-semibold border-b-2 border-brand-600"
                  : "hover:text-brand-700"
              }
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <a
            href={telHref}
            className="bg-brand-600 text-white px-4 py-2 rounded-full"
          >
            Call
          </a>
        </div>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div id="mobile-nav" className="md:hidden border-t bg-white">
          <div className="container py-3 flex flex-col gap-3">
            {NAV.map(n => (
              <Link
                key={n.href}
                href={n.href}
                className={isActive(n.href) ? "text-brand-700 font-semibold" : ""}
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <a
              href={telHref}
              className="bg-brand-600 text-white px-4 py-2 rounded text-center"
            >
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
