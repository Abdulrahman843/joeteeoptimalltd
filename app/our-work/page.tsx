import Link from "next/link"

export default function OurWork() {
  return (
    <main className="container py-16">
      <h1 className="text-4xl font-bold mb-8">Our Work</h1>
      <p className="text-gray-600 mb-6">Selected projects and before/after transformations.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-white border rounded-xl overflow-hidden">
            <div className="aspect-video bg-gray-100" />
            <div className="p-4">
              <p className="font-semibold">Project {i + 1}</p>
              <p className="text-sm text-gray-600">Residential deep clean and staging.</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link href="/contact" className="bg-brand-600 text-white px-5 py-3 rounded">Request a Quote</Link>
      </div>
    </main>
  )
}
