import type { Metadata, Viewport } from "next"
import "./globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { LocalBusinessJsonLd } from "../components/StructuredData"
import { site } from "../lib/site"

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Professional Cleaning Services UK`,
    template: `%s | ${site.name}`
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  keywords: [
    "cleaning services UK",
    "end of tenancy cleaning",
    "deep cleaning London",
    "after builders cleaning",
    "Airbnb cleaning",
    "commercial cleaning",
    "residential cleaning"
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_GB",
    url: site.url,
    title: `${site.name} | Professional Cleaning Services UK`,
    description: site.description,
    images: [{ url: "/logo.svg", width: 512, height: 512, alt: site.name }]
  },
  twitter: {
    card: "summary",
    title: site.name,
    description: site.description,
    images: ["/logo.svg"]
  },
  robots: { index: true, follow: true },
  icons: { icon: "/logo.svg" }
}

export const viewport: Viewport = {
  themeColor: "#0f766e",
  width: "device-width",
  initialScale: 1
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <LocalBusinessJsonLd />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
