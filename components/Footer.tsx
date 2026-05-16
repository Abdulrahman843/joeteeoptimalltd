import Link from "next/link"
import { site, telHref, mailHref } from "../lib/site"

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container py-10 grid md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt={`${site.name} logo`} className="h-8 w-8" />
            <span className="font-semibold">{site.name}</span>
          </div>
          <p className="text-sm text-gray-600">
            Professional cleaning for homes and businesses across the UK.
          </p>
          <p className="text-sm">{site.hoursDisplay}</p>
          <a href={mailHref} className="text-sm text-brand-700 underline">
            {site.email}
          </a>
        </div>
        <div className="space-y-2">
          <p className="font-semibold">Navigation</p>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/our-work">Our Work</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="space-y-2">
          <p className="font-semibold">Legal</p>
          <ul className="space-y-1 text-sm">
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms &amp; Conditions</Link></li>
            <li><Link href="/cookies">Cookie Policy</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <p className="font-semibold">Get in touch</p>
          <Link
            href="/contact#quote"
            className="inline-block bg-brand-600 text-white px-5 py-3 rounded"
          >
            Get a Free Quote
          </Link>
          <div className="flex items-center gap-3 text-sm">
            <a href={site.whatsappUrl} className="text-brand-700 underline">
              WhatsApp
            </a>
            <a href={telHref} className="text-brand-700 underline">
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 text-sm text-gray-600 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <p className="text-gray-500">Registered in England &amp; Wales.</p>
        </div>
      </div>
    </footer>
  )
}
