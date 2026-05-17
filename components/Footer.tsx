import Link from "next/link"
import Image from "next/image"
import { site, telHref, mailHref } from "../lib/site"

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container py-12 grid md:grid-cols-4 gap-8">
        <div className="space-y-4 md:col-span-1">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt={`${site.name} logo`} width={32} height={32} className="h-8 w-8" />
            <span className="font-semibold text-sm">{site.name}</span>
          </Link>
          <p className="text-sm text-gray-600 leading-relaxed">
            Professional cleaning for homes and businesses across Portsmouth,
            Hampshire, and the South of England.
          </p>
          <div className="space-y-1 text-sm">
            <p className="text-gray-700 font-medium">{site.hoursDisplay}</p>
            <a href={telHref} className="block text-brand-700 hover:underline">
              {site.phoneDisplay}
            </a>
            <a href={mailHref} className="block text-brand-700 hover:underline">
              {site.email}
            </a>
            <a
              href={site.url}
              className="block text-brand-700 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.joeteeoptimalltd.co.uk
            </a>
          </div>
        </div>
        <div className="space-y-3">
          <p className="font-semibold text-sm uppercase tracking-wide text-gray-500">Navigation</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-brand-700 transition-colors">Home</Link></li>
            <li><Link href="/services" className="hover:text-brand-700 transition-colors">Services</Link></li>
            <li><Link href="/our-work" className="hover:text-brand-700 transition-colors">Our Work</Link></li>
            <li><Link href="/about" className="hover:text-brand-700 transition-colors">About Us</Link></li>
            <li><Link href="/blogs" className="hover:text-brand-700 transition-colors">Blogs</Link></li>
            <li><Link href="/contact" className="hover:text-brand-700 transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div className="space-y-3">
          <p className="font-semibold text-sm uppercase tracking-wide text-gray-500">Services</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services/end-of-tenancy" className="hover:text-brand-700 transition-colors">End of Tenancy</Link></li>
            <li><Link href="/services/commercial" className="hover:text-brand-700 transition-colors">Commercial Cleaning</Link></li>
            <li><Link href="/services/post-construction" className="hover:text-brand-700 transition-colors">Post-Construction</Link></li>
            <li><Link href="/services/property" className="hover:text-brand-700 transition-colors">Property Cleaning</Link></li>
            <li><Link href="/privacy" className="hover:text-brand-700 transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-brand-700 transition-colors">Terms &amp; Conditions</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <p className="font-semibold text-sm uppercase tracking-wide text-gray-500">Get in touch</p>
          <p className="text-sm text-gray-600">
            Get a free, fixed-price quote for any cleaning service — we respond promptly.
          </p>
          <Link
            href="/contact#quote"
            className="inline-block bg-brand-600 text-white px-5 py-3 rounded font-medium text-sm hover:bg-brand-700 transition-colors"
          >
            Get a Free Quote
          </Link>
          <div className="flex flex-col gap-2 text-sm">
            <a href={site.whatsappUrl} className="text-brand-700 hover:underline font-medium">
              WhatsApp Us
            </a>
            <a href={telHref} className="text-brand-700 hover:underline font-medium">
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-5 text-xs text-gray-500 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <p>Registered in England &amp; Wales</p>
            <Link href="/cookies" className="hover:text-brand-700 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
