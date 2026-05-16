import type { Metadata } from "next"
import QuoteForm from "../../components/QuoteForm"
import { site, telHref, mailHref } from "../../lib/site"

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get a free cleaning quote from ${site.name}. Phone, WhatsApp, and email — we respond quickly across the UK.`,
  alternates: { canonical: "/contact" }
}

export default function Contact() {
  return (
    <main className="container py-16 grid md:grid-cols-2 gap-10">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="text-gray-600">
          Request a free quote. We respond quickly.
        </p>
        <dl className="space-y-2 text-sm">
          <div className="flex gap-2">
            <dt className="font-semibold">Phone:</dt>
            <dd>
              <a href={telHref} className="text-brand-700 underline">
                {site.phoneDisplay}
              </a>
            </dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-semibold">Email:</dt>
            <dd>
              <a href={mailHref} className="text-brand-700 underline">
                {site.email}
              </a>
            </dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-semibold">Hours:</dt>
            <dd>{site.hoursDisplay}</dd>
          </div>
        </dl>
        <div className="flex gap-3">
          <a
            href={site.whatsappUrl}
            className="border border-brand-600 text-brand-700 px-5 py-3 rounded"
          >
            WhatsApp
          </a>
          <a
            href={telHref}
            className="bg-brand-600 text-white px-5 py-3 rounded"
          >
            Call
          </a>
        </div>
      </div>
      <QuoteForm id="quote" />
    </main>
  )
}
