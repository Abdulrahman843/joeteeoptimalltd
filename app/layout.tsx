import type { Metadata } from "next"
import "./globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export const metadata: Metadata = {
  title: "Joetee Optimal Limited | Premium Cleaning",
  description:
    "Residential and commercial cleaning, move-in/move-out, Airbnb, post-construction, janitorial, standard, big, regular maintenance, deep cleaning."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
