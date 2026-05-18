"use client"
import { useState } from "react"
import { site, telHref } from "../lib/site"

type Status = "idle" | "loading" | "success" | "error" | "unavailable"

const SERVICES = [
  "Residential",
  "Commercial",
  "End of Tenancy",
  "Move-in / Move-out",
  "Airbnb Turnover",
  "Post-construction",
  "Janitorial",
  "Regular Maintenance",
  "Deep Cleaning"
]

export default function QuoteForm({ id }: { id?: string }) {
  const [status, setStatus] = useState<Status>("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")

    const form = e.currentTarget
    const get = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement)?.value ?? ""

    const payload = {
      _hp:     get("_hp"),
      name:    get("name"),
      phone:   get("phone"),
      email:   get("email"),
      address: get("address"),
      service: get("service"),
      notes:   get("notes")
    }

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })

      if (res.ok) {
        setStatus("success")
        form.reset()
      } else {
        const json = await res.json().catch(() => ({}))
        setStatus(json.error === "smtp_not_configured" ? "unavailable" : "error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <form
      id={id}
      onSubmit={onSubmit}
      className="bg-white shadow-xl rounded-2xl p-6 space-y-4"
      aria-labelledby={id ? `${id}-title` : undefined}
      noValidate
    >
      <p id={id ? `${id}-title` : undefined} className="sr-only">
        Free cleaning quote request form
      </p>

      {/* Honeypot – visually hidden, catches automated bots */}
      <input
        name="_hp"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0, overflow: "hidden" }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="qf-name" className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Full Name *</label>
          <input
            id="qf-name"
            name="name"
            autoComplete="name"
            className="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            placeholder="Jane Smith"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="qf-phone" className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Phone *</label>
          <input
            id="qf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            placeholder="+44 7700 900000"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="qf-email" className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email *</label>
          <input
            id="qf-email"
            name="email"
            type="email"
            autoComplete="email"
            className="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            placeholder="jane@example.com"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="qf-address" className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Property Address *</label>
          <input
            id="qf-address"
            name="address"
            autoComplete="street-address"
            className="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            placeholder="12 High Street, Portsmouth"
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="qf-service" className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Service Required *</label>
        <select
          id="qf-service"
          name="service"
          defaultValue=""
          className="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
          required
        >
          <option value="" disabled>Select a service…</option>
          {SERVICES.map(s => <option key={s}>{s}</option>)}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="qf-notes" className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Additional Details</label>
        <textarea
          id="qf-notes"
          name="notes"
          className="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
          placeholder="Number of rooms, property condition, preferred dates…"
          rows={3}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="w-full bg-brand-600 text-white py-3 rounded-lg font-semibold text-sm hover:bg-brand-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending your request…" : status === "success" ? "Request Sent ✓" : "Get Free Quote"}
      </button>

      {status === "success" && (
        <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800">
          <p className="font-semibold mb-1">Thank you — your request has been received!</p>
          <p>We will review your details and get back to you within 2 hours. Check your inbox for a confirmation.</p>
        </div>
      )}

      {status === "error" && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          <p className="font-semibold mb-1">Something went wrong.</p>
          <p>
            Please try again, or reach us directly on{" "}
            <a href={telHref} className="underline font-medium">{site.phoneDisplay}</a>
            {" "}or{" "}
            <a href={site.whatsappUrl} className="underline font-medium">WhatsApp</a>.
          </p>
        </div>
      )}

      {status === "unavailable" && (
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <p className="font-semibold mb-1">Online quotes are temporarily unavailable.</p>
          <p>
            Please call us on{" "}
            <a href={telHref} className="underline font-medium">{site.phoneDisplay}</a>
            {" "}or message us on{" "}
            <a href={site.whatsappUrl} className="underline font-medium">WhatsApp</a>
            {" "}— we respond promptly.
          </p>
        </div>
      )}
    </form>
  )
}
