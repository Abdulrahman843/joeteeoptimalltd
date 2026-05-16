"use client"
import { useState } from "react"
import { site, telHref } from "../lib/site"

type Props = { id?: string }

export default function QuoteForm({ id }: Props) {
  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState<boolean | null>(null)
  const formsEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT
  const configured = Boolean(formsEndpoint)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!configured) return
    setLoading(true)
    const form = e.currentTarget
    const body = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      address: (form.elements.namedItem("address") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      notes: (form.elements.namedItem("notes") as HTMLTextAreaElement).value
    }
    try {
      const res = await fetch(formsEndpoint!, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
      setOk(res.ok)
      if (res.ok) form.reset()
    } catch {
      setOk(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      id={id}
      onSubmit={onSubmit}
      className="bg-white shadow-xl rounded-2xl p-6 space-y-4"
      aria-labelledby={id ? `${id}-title` : undefined}
    >
      <p id={id ? `${id}-title` : undefined} className="sr-only">
        Free cleaning quote request form
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="name"
          autoComplete="name"
          className="w-full border rounded-lg p-3"
          placeholder="Name"
          required
        />
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          className="w-full border rounded-lg p-3"
          placeholder="Phone"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="email"
          type="email"
          autoComplete="email"
          className="w-full border rounded-lg p-3"
          placeholder="Email"
          required
        />
        <input
          name="address"
          autoComplete="street-address"
          className="w-full border rounded-lg p-3"
          placeholder="Property address"
          required
        />
      </div>
      <select
        name="service"
        defaultValue=""
        className="w-full border rounded-lg p-3"
        required
      >
        <option value="" disabled>
          Select a service…
        </option>
        <option>Residential</option>
        <option>Commercial</option>
        <option>End of Tenancy</option>
        <option>Move-in / Move-out</option>
        <option>Airbnb Turnover</option>
        <option>Post-construction</option>
        <option>Janitorial</option>
        <option>Regular Maintenance</option>
        <option>Deep Cleaning</option>
      </select>
      <textarea
        name="notes"
        className="w-full border rounded-lg p-3"
        placeholder="Brief description (rooms, condition, preferred dates)"
        rows={3}
      />
      <button
        disabled={loading || !configured}
        className="w-full bg-brand-600 text-white py-3 rounded-lg disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Sending…" : "Get Free Quote"}
      </button>
      {ok === true && (
        <p className="text-brand-700">
          Thanks. We will contact you shortly.
        </p>
      )}
      {ok === false && (
        <p className="text-red-600">
          Something went wrong. Please try again or contact us directly.
        </p>
      )}
      {!configured && (
        <div className="rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900">
          <p className="font-semibold">Online quotes are temporarily offline.</p>
          <p>
            Please reach us directly —{" "}
            <a href={telHref} className="underline">
              {site.phoneDisplay}
            </a>{" "}
            or{" "}
            <a href={site.whatsappUrl} className="underline">
              WhatsApp
            </a>
            .
          </p>
        </div>
      )}
    </form>
  )
}
