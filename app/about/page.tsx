import type { Metadata } from "next"
import PlaceholderArt from "../../components/PlaceholderArt"
import { site } from "../../lib/site"

export const metadata: Metadata = {
  title: "About Us",
  description: `${site.name} delivers premium cleaning with trained professionals, checklist-driven quality, supplies included, and punctual service across the UK.`,
  alternates: { canonical: "/about" }
}

export default function About() {
  return (
    <main className="container py-16 grid md:grid-cols-2 gap-10">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">About {site.name}</h1>
        <p className="text-gray-600">
          We deliver premium cleaning with trained professionals, clear scopes,
          checklist-driven quality, supplies included, and punctual service.
        </p>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white border rounded-xl p-6">
            <p className="font-semibold">Skilled Team</p>
            <p className="text-sm text-gray-600">
              Experienced staff with vetted processes.
            </p>
          </div>
          <div className="bg-white border rounded-xl p-6">
            <p className="font-semibold">Customised Solutions</p>
            <p className="text-sm text-gray-600">
              Plans tailored to property needs.
            </p>
          </div>
          <div className="bg-white border rounded-xl p-6">
            <p className="font-semibold">Eco Options</p>
            <p className="text-sm text-gray-600">
              Green products on request.
            </p>
          </div>
          <div className="bg-white border rounded-xl p-6">
            <p className="font-semibold">Guarantee</p>
            <p className="text-sm text-gray-600">
              Re-clean within 48 hours if not delighted.
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <PlaceholderArt
          label="Trained, vetted teams"
          caption="Checklist-driven cleans across the UK"
          variant={0}
        />
        <div className="grid grid-cols-2 gap-4">
          <PlaceholderArt label="Eco-safe supplies" variant={2} />
          <PlaceholderArt label="100% satisfaction" variant={4} />
        </div>
      </div>
    </main>
  )
}
