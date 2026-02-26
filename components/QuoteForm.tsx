"use client"
import { useState } from "react"

export default function QuoteForm() {
  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState<boolean | null>(null)
  const formsEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
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
    let res: Response
    if (formsEndpoint) {
      res = await fetch(formsEndpoint, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })
    } else {
      res = await fetch("/api/quote", { method: "POST", body: JSON.stringify(body) })
    }
    setOk(res.ok)
    setLoading(false)
    if (res.ok) form.reset()
  }

  return (
    <form id="quote" onSubmit={onSubmit} className="bg-white shadow-xl rounded-2xl p-6 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="name" className="w-full border rounded-lg p-3" placeholder="Name" required />
        <input name="phone" className="w-full border rounded-lg p-3" placeholder="Phone" required />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="email" type="email" className="w-full border rounded-lg p-3" placeholder="Email" required />
        <input name="address" className="w-full border rounded-lg p-3" placeholder="Address" required />
      </div>
      <select name="service" className="w-full border rounded-lg p-3" required>
        <option>Residential</option>
        <option>Commercial</option>
        <option>Move-in/Move-out</option>
        <option>Airbnb</option>
        <option>Post-construction</option>
        <option>Janitorial</option>
        <option>Standard</option>
        <option>Big Cleaning</option>
        <option>Regular Maintenance</option>
        <option>Deep Cleaning</option>
      </select>
      <textarea name="notes" className="w-full border rounded-lg p-3" placeholder="Brief description"></textarea>
      <button disabled={loading} className="w-full bg-brand-600 text-white py-3 rounded-lg">
        {loading ? "Sending..." : "Get Free Quote"}
      </button>
      {ok === true && <p className="text-brand-700">Thanks. We will contact you shortly.</p>}
      {ok === false && <p className="text-red-600">Something went wrong. Try again.</p>}
    </form>
  )
}
