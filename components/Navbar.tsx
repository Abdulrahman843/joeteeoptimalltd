"use client"
import Link from "next/link"
import Image from "next/image"
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
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src="/logo.svg" alt={`${site.name} logo`} width={32} height={32} className="h-8 w-8" />
          <span className="font-semibold text-sm md:text-base">{site.shortName}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          {NAV.map(n => (
            <Link
              key={n.href}
              href={n.href}
              className={
                isActive(n.href)
                  ? "text-brand-700 font-semibold border-b-2 border-brand-600 text-sm"
                  : "hover:text-brand-700 text-sm transition-colors"
              }
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a
            href={site.whatsappUrl}
            className="text-sm text-brand-700 font-medium hover:underline"
          >
            WhatsApp
          </a>
          <a
            href={telHref}
            className="bg-brand-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-brand-700 transition-colors"
          >
            {site.phoneDisplay}
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
          <div className="container py-4 flex flex-col gap-4">
            {NAV.map(n => (
              <Link
                key={n.href}
                href={n.href}
                className={`text-base ${isActive(n.href) ? "text-brand-700 font-semibold" : "text-gray-700"}`}
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <div className="border-t pt-4 flex flex-col gap-3">
              <a
                href={site.whatsappUrl}
                className="border border-brand-600 text-brand-700 px-4 py-2.5 rounded text-center font-medium text-sm"
              >
                WhatsApp Us
              </a>
              <a
                href={telHref}
                className="bg-brand-600 text-white px-4 py-2.5 rounded text-center font-medium text-sm"
              >
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
