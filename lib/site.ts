export const site = {
  name: "Joetee Optimal Limited",
  shortName: "Joetee Optimal",
  legalName: "Joetee Optimal Limited",
  description:
    "Professional residential and commercial cleaning across the UK — end of tenancy, deep cleaning, move-in/move-out, after-builders, Airbnb turnovers, janitorial, and regular maintenance.",
  url: "https://www.joeteeoptimalltd.co.uk",
  email: "booking@joeteeoptimalltd.co.uk",
  phone: "+447442907768",
  phoneDisplay: "+44 7442 907768",
  whatsappNumber: "447442907768",
  whatsappUrl: "https://wa.me/447442907768",
  hoursDisplay: "Mon–Sun 8AM–9PM",
  hoursOpens: "08:00",
  hoursCloses: "21:00",
  country: "GB",
  region: "Hampshire",
  priceRange: "££",
  primaryArea: "Portsmouth",
  serviceAreas: [
    "Portsmouth",
    "Southampton",
    "Chichester",
    "Fareham",
    "Havant",
    "Waterlooville",
    "Gosport",
    "Winchester",
    "Bournemouth",
    "Brighton",
    "Reading",
    "Guildford",
    "Basingstoke",
    "Crawley",
    "Worthing",
    "Eastbourne",
    "London"
  ]
} as const

export const telHref = `tel:${site.phone}`
export const mailHref = `mailto:${site.email}`

// Centralized image map (Unsplash). All IDs below are verified working.
// Pattern: https://images.unsplash.com/photo-{id}?auto=format&fit=crop&w={w}&q=80
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const images = {
  hero: {
    src: u("1581578731548-c64695cc6952", 1800),
    alt: "Professional cleaner wiping a glossy kitchen worktop"
  },
  endOfTenancy: {
    src: u("1505691938895-1758d7feb511"),
    alt: "Empty, freshly cleaned room ready for the next tenant"
  },
  deepClean: {
    src: u("1556909114-f6e7ad7d3136"),
    alt: "Professionally deep-cleaned kitchen with polished worktops and spotless surfaces"
  },
  office: {
    src: u("1556761175-5973dc0f32e7"),
    alt: "Tidy modern office space after professional cleaning"
  },
  afterBuilders: {
    src: u("1503387762-592deb58ef4e"),
    alt: "Interior space after a post-construction cleanup"
  },
  airbnb: {
    src: u("1611892440504-42a792e24d32"),
    alt: "Hotel-style made-up bed ready for the next Airbnb guest"
  },
  janitorial: {
    src: u("1581578017093-cd30fce4eeb7"),
    alt: "Cleaning supplies and microfibre cloths laid out for janitorial work"
  },
  kitchen: {
    src: u("1556909114-f6e7ad7d3136"),
    alt: "Clean, modern kitchen with polished worktops"
  },
  bathroom: {
    src: u("1552321554-5fefe8c9ef14"),
    alt: "Sparkling, modern bathroom with chrome fixtures"
  },
  // Unique image: eco-safe cleaning kit laid out by the team
  team: {
    src: u("1581578017093-cd30fce4eeb7"),
    alt: "Eco-safe professional cleaning supplies used by the Joetee Optimal team"
  },
  // Empty, freshly cleaned room — clearly move-in ready
  moveIn: {
    src: u("1505691938895-1758d7feb511"),
    alt: "Freshly cleaned empty residential room ready for new occupants to move in"
  },
  // Regular maintenance: active cleaning in progress
  regular: {
    src: u("1581578731548-c64695cc6952"),
    alt: "Professional cleaner maintaining a home with regular cleans"
  },
  blogKitchen: {
    src: u("1556909114-f6e7ad7d3136"),
    alt: "Kitchen worktop and hob after a deep clean"
  },
  blogPros: {
    src: u("1581578731548-c64695cc6952"),
    alt: "Professional cleaner attending to a worktop"
  },
  blogPostBuild: {
    src: u("1503387762-592deb58ef4e"),
    alt: "Interior dust removal after a construction project"
  }
} as const

export type ImageEntry = { src: string; alt: string }
