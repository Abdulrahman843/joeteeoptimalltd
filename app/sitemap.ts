import type { MetadataRoute } from "next"
import { site } from "../lib/site"
import { posts } from "./blogs/posts"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const staticRoutes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/our-work", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about", priority: 0.6, changeFrequency: "yearly" },
    { path: "/blogs", priority: 0.8, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
    { path: "/cookies", priority: 0.3, changeFrequency: "yearly" }
  ]
  const staticUrls: MetadataRoute.Sitemap = staticRoutes.map(r => ({
    url: `${site.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority
  }))
  const blogUrls: MetadataRoute.Sitemap = posts.map(p => {
    const parsed = new Date(p.date)
    return {
      url: `${site.url}/blogs/${p.slug}`,
      lastModified: isNaN(parsed.getTime()) ? now : parsed,
      changeFrequency: "yearly",
      priority: 0.6
    }
  })
  return [...staticUrls, ...blogUrls]
}
