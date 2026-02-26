import ServiceCard from "../../components/ServiceCard"

export default function Services() {
  const items = [
    { title: "Residential Cleaning", description: "Detailed cleaning for homes and apartments." },
    { title: "Commercial Cleaning", description: "Consistent cleaning for offices and businesses." },
    { title: "Move-in/Move-out", description: "End of tenancy cleaning for a fresh start." },
    { title: "Airbnb Cleaning", description: "Reset and staging between guests." },
    { title: "Post-construction", description: "Dust removal and finishing after builds." },
    { title: "Janitorial Services", description: "Recurring building maintenance." },
    { title: "Standard Cleaning", description: "Regular maintenance cleaning." },
    { title: "Big Cleaning", description: "Extended session for large scope tasks." },
    { title: "Deep Cleaning", description: "Intensive cleaning of high-impact areas." }
  ]
  return (
    <main className="container py-16">
      <h1 className="text-4xl font-bold mb-8">Services</h1>
      <p className="text-gray-600 mb-8">
        From routine maintenance to deep cleans and post-construction, we tailor services to homes, businesses, rentals, and facilities.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(i => <ServiceCard key={i.title} title={i.title} description={i.description} />)}
      </div>
    </main>
  )
}
