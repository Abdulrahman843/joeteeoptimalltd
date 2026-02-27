"use client"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

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
          <img src="/logo.svg" alt="Joetee Optimal Limited" className="h-8 w-8" />
          <span className="font-semibold">Joetee Optimal Limited</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className={isActive("/") ? "text-brand-700 font-semibold border-b-2 border-brand-600" : "hover:text-brand-700"}>Home</Link>
          <Link href="/services" className={isActive("/services") ? "text-brand-700 font-semibold border-b-2 border-brand-600" : "hover:text-brand-700"}>Services</Link>
          <Link href="/our-work" className={isActive("/our-work") ? "text-brand-700 font-semibold border-b-2 border-brand-600" : "hover:text-brand-700"}>Our Work</Link>
          <Link href="/about" className={isActive("/about") ? "text-brand-700 font-semibold border-b-2 border-brand-600" : "hover:text-brand-700"}>About</Link>
          <Link href="/blogs" className={isActive("/blogs") ? "text-brand-700 font-semibold border-b-2 border-brand-600" : "hover:text-brand-700"}>Blogs</Link>
          <Link href="/contact" className={isActive("/contact") ? "text-brand-700 font-semibold border-b-2 border-brand-600" : "hover:text-brand-700"}>Contact</Link>
        </nav>
        <div className="hidden md:block">
          <a href="tel:+447442907768" className="bg-brand-600 text-white px-4 py-2 rounded-full">Call</a>
        </div>
        <button aria-label="Menu" className="md:hidden" onClick={() => setOpen(!open)}>
          <span className="inline-block w-6 h-6 border border-gray-800 rounded" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container py-3 flex flex-col gap-3">
            <Link href="/" className={isActive("/") ? "text-brand-700 font-semibold" : ""} onClick={() => setOpen(false)}>Home</Link>
            <Link href="/services" className={isActive("/services") ? "text-brand-700 font-semibold" : ""} onClick={() => setOpen(false)}>Services</Link>
            <Link href="/our-work" className={isActive("/our-work") ? "text-brand-700 font-semibold" : ""} onClick={() => setOpen(false)}>Our Work</Link>
            <Link href="/about" className={isActive("/about") ? "text-brand-700 font-semibold" : ""} onClick={() => setOpen(false)}>About</Link>
            <Link href="/blogs" className={isActive("/blogs") ? "text-brand-700 font-semibold" : ""} onClick={() => setOpen(false)}>Blogs</Link>
            <Link href="/contact" className={isActive("/contact") ? "text-brand-700 font-semibold" : ""} onClick={() => setOpen(false)}>Contact</Link>
            <a href="tel:+2340000000000" className="bg-brand-600 text-white px-4 py-2 rounded">Call</a>
          </div>
        </div>
      )}
    </header>
  )
}
