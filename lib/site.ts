export const site = {
  name: "Joetee Optimal Limited",
  shortName: "Joetee Optimal",
  legalName: "Joetee Optimal Limited",
  description:
    "Professional residential and commercial cleaning across the UK — end of tenancy, deep cleaning, move-in/move-out, after-builders, Airbnb turnovers, janitorial, and regular maintenance.",
  url: "https://joeteeoptimalltd.vercel.app",
  email: "info@joeteeoptimal.com",
  phone: "+447442907768",
  phoneDisplay: "+44 7442 907768",
  whatsappNumber: "447442907768",
  whatsappUrl: "https://wa.me/447442907768",
  hoursDisplay: "Mon–Sun 8AM–9PM",
  hoursOpens: "08:00",
  hoursCloses: "21:00",
  country: "GB",
  region: "Greater London",
  priceRange: "££",
  serviceAreas: [
    "London",
    "Manchester",
    "Birmingham",
    "Leeds",
    "Glasgow",
    "Liverpool",
    "Edinburgh",
    "Bristol",
    "Nottingham",
    "Sheffield",
    "Leicester",
    "Brighton"
  ]
} as const

export const telHref = `tel:${site.phone}`
export const mailHref = `mailto:${site.email}`
