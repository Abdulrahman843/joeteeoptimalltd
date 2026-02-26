export type Post = {
  slug: string
  title: string
  excerpt: string
  date: string
  sections: { heading: string; body?: string[]; bullets?: string[] }[]
}

export const posts: Post[] = [
  {
    slug: "kitchen-deep-cleaning-guide",
    title: "Kitchen Deep Cleaning Guide",
    excerpt: "Simple steps to transform your kitchen.",
    date: "Feb 18, 2026",
    sections: [
      {
        heading: "Why Deep Clean Your Kitchen",
        body: [
          "Kitchens collect grease, food residue, and fine dust quicker than any other room. Left unchecked, it affects hygiene, odour, and the appearance of cabinet fronts and worktops.",
          "A scheduled deep clean restores shine, removes hidden build‑up, and resets the space to a hygienic baseline."
        ]
      },
      {
        heading: "Checklist We Follow",
        bullets: [
          "Degrease extractor hood, hob, splashbacks, and tiles",
          "Detail clean cabinet fronts, handles, kickboards, and edges",
          "Sanitize worktops, sinks, taps, and silicone lines",
          "Inside oven, microwave, and fridge (optional add‑on)",
          "Vacuum and mop floor edges, under appliances, and door frames"
        ],
        body: [
          "We bring the right chemicals and microfiber system, protecting finishes while lifting grease and protein residue."
        ]
      },
      {
        heading: "How Long It Takes",
        body: [
          "A typical kitchen deep clean takes 3–5 hours depending on size and condition. Larger or heavily used kitchens may require extra time.",
          "Eco‑friendly options are available on request. All supplies and equipment are included."
        ]
      }
    ]
  },
  {
    slug: "why-professional-cleaners-save-time",
    title: "Why Professional Cleaners Save Time",
    excerpt: "Efficiency, equipment, and checklists.",
    date: "Feb 12, 2026",
    sections: [
      {
        heading: "Efficiency From Training",
        body: [
          "Professionals follow repeatable processes that prevent missed spots and rework.",
          "We split areas by task flow to minimize backtracking."
        ]
      },
      {
        heading: "Better Results Faster",
        body: [
          "Commercial-grade chemicals and tools cut dwell time and scrubbing.",
          "Microfiber systems and HEPA vacuums improve dust capture and finish."
        ]
      },
      {
        heading: "Predictable Scheduling",
        body: [
          "Fixed windows and teams reduce variability, so you get consistent outcomes.",
          "Recurring maintenance avoids expensive deep cleans later."
        ]
      }
    ]
  },
  {
    slug: "post-construction-cleaning-tips",
    title: "Post-Construction Cleaning Tips",
    excerpt: "Dust control and finishing details.",
    date: "Feb 5, 2026",
    sections: [
      {
        heading: "Control Fine Dust",
        body: [
          "Use multi-stage HEPA vacuuming before any wet work to avoid mud streaks.",
          "Work top-down and isolate areas to prevent cross-contamination."
        ]
      },
      {
        heading: "Detail Finishes",
        body: [
          "Polish fixtures, wipe trim, and clean glass edges and labels.",
          "Remove paint splatters and adhesive residues carefully."
        ]
      },
      {
        heading: "Final Walkthrough",
        body: [
          "We do a checklist-based inspection with the owner and fix snagging items.",
          "Optional: pre-handover staging for photos."
        ]
      }
    ]
  }
]
