import QuoteForm from "../../components/QuoteForm"

export default function Contact() {
  return (
    <main className="container py-16 grid md:grid-cols-2 gap-10">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="text-gray-600">
          Request a free quote. We respond quickly.
        </p>
        <div className="space-y-2 text-sm">
          <p>Phone: +447442907768</p>
          <p>Email: info@joeteeoptimal.com</p>
          <p>Hours: Mon–Sun 8AM–9PM</p>
        </div>
        <div className="flex gap-3">
          <a href="https://wa.me/447442907768" className="border border-brand-600 text-brand-700 px-5 py-3 rounded">WhatsApp</a>
          <a href="tel:+447442907768" className="bg-brand-600 text-white px-5 py-3 rounded">Call</a>
        </div>
      </div>
      <QuoteForm />
    </main>
  )
}
