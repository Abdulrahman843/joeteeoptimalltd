import type { Metadata } from "next"
import QuoteForm from "../../components/QuoteForm"
import { site, telHref, mailHref } from "../../lib/site"

export const metadata: Metadata = {
  title: "Contact Us — Free Cleaning Quote",
  description: `Get a free cleaning quote from ${site.name}. Phone, WhatsApp, or email — we respond quickly across Portsmouth, Hampshire, and the South.`,
  alternates: { canonical: "/contact" }
}

const CONTACT_METHODS = [
  {
    label: "Phone",
    value: site.phoneDisplay,
    href: telHref,
    description: "Call us directly — Mon to Sun, 8AM to 9PM"
  },
  {
    label: "Email",
    value: site.email,
    href: mailHref,
    description: "We aim to reply within a few hours on all enquiries"
  },
  {
    label: "WhatsApp",
    value: "Message us on WhatsApp",
    href: site.whatsappUrl,
    description: "Quick responses via WhatsApp for quotes and questions"
  }
]

export default function Contact() {
  return (
    <main className="bg-white">
      <section className="container py-12 md:py-16">
        <div className="max-w-2xl mb-10">
          <p className="inline-block rounded-full bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-wide px-3 py-1 mb-4">
            Contact Us
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get a free cleaning quote today
          </h1>
          <p className="text-lg text-gray-600">
            Fill in the form below, call us, or drop us a WhatsApp message —
            we respond quickly with a transparent, fixed-price quote.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-8">
            <div className="grid gap-4">
              {CONTACT_METHODS.map(m => (
                <a
                  key={m.label}
                  href={m.href}
                  className="flex items-start gap-4 rounded-xl border bg-white p-5 hover:shadow-md hover:border-brand-200 transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center shrink-0">
                    <span className="text-brand-600 font-bold text-xs uppercase">{m.label[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-500 uppercase tracking-wide">{m.label}</p>
                    <p className="font-bold text-brand-700 mt-0.5">{m.value}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{m.description}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="rounded-xl border bg-gray-50 p-6">
              <p className="font-semibold mb-3">Our service areas</p>
              <p className="text-sm text-gray-600 mb-3">
                Based in Portsmouth, serving across Hampshire and the South:
              </p>
              <div className="flex flex-wrap gap-2">
                {site.serviceAreas.map(city => (
                  <span
                    key={city}
                    className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                      city === site.primaryArea
                        ? "bg-brand-600 text-white"
                        : "bg-white border text-gray-600"
                    }`}
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <QuoteForm id="quote" />
        </div>
      </section>
    </main>
  )
}
