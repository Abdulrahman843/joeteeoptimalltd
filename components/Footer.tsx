import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container py-10 grid md:grid-cols-3 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Joetee Optimal Limited" className="h-8 w-8" />
            <span className="font-semibold">Joetee Optimal Limited</span>
          </div>
          <p className="text-sm text-gray-600">Professional cleaning for homes and businesses.</p>
          <p className="text-sm">Mon–Sun: 8AM–9PM</p>
          <p className="text-sm">info@joeteeoptimal.com</p>
        </div>
        <div className="space-y-2">
          <p className="font-semibold">Navigation</p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/our-work">Our Work</Link>
            <Link href="/about">About</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="space-y-4">
          <p className="font-semibold">Get a Free Quote</p>
          <a href="#quote" className="inline-block bg-brand-600 text-white px-5 py-3 rounded">Start</a>
          <div className="flex items-center gap-2">
            <a href="https://wa.me/447442907768" className="text-brand-700">WhatsApp</a>
            <a href="tel:+447442907768" className="text-brand-700">Call</a>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 text-sm text-gray-600">
          © 2026 Joetee Optimal Limited. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
