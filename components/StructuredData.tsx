import { site } from "../lib/site"

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    "@id": `${site.url}#business`,
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    image: `${site.url}/logo.svg`,
    logo: `${site.url}/logo.svg`,
    priceRange: site.priceRange,
    address: {
      "@type": "PostalAddress",
      addressCountry: site.country,
      addressRegion: site.region
    },
    areaServed: site.serviceAreas.map(name => ({ "@type": "City", name })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        opens: site.hoursOpens,
        closes: site.hoursCloses
      }
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: site.phone,
        email: site.email,
        areaServed: site.country,
        availableLanguage: ["English"]
      }
    ],
    sameAs: [site.whatsappUrl]
  }
  return <JsonLd data={data} />
}

export function ServiceListJsonLd({
  services
}: {
  services: { name: string; description: string }[]
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.name,
        description: s.description,
        serviceType: s.name,
        provider: { "@id": `${site.url}#business` },
        areaServed: site.serviceAreas.map(name => ({
          "@type": "City",
          name
        }))
      }
    }))
  }
  return <JsonLd data={data} />
}

export function FaqJsonLd({
  items
}: {
  items: { question: string; answer: string }[]
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(i => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer }
    }))
  }
  return <JsonLd data={data} />
}

export function BreadcrumbJsonLd({
  items
}: {
  items: { name: string; url: string }[]
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((i, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: i.name,
      item: i.url
    }))
  }
  return <JsonLd data={data} />
}
