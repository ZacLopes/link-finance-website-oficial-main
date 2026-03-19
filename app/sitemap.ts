import type { MetadataRoute } from "next"
import { createClient } from "@/lib/supabase/server"
import { generateSlug } from "@/lib/utils/slug"

interface SitemapEntry {
  id: string
  title: string
  created_at: string | null
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://linksbfinance.com"
  const currentDate = new Date().toISOString()

  // Static pages with optimized priorities
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/finance-day`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.99,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/membros`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/membros/diretoria`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/membros/analistas`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/membros/trainee`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/membros/alumni`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/mentores`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projetos`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/partners`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/processo-seletivo`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ]

  let eventPages: MetadataRoute.Sitemap = []
  let projectPages: MetadataRoute.Sitemap = []

  try {
    const supabase = await createClient()

    const [eventsResult, projectsResult] = await Promise.all([
      supabase.from("events").select("id, title, created_at").order("created_at", { ascending: false }),
      supabase.from("projects").select("id, title, created_at").order("created_at", { ascending: false }),
    ])

    if (eventsResult.data) {
      eventPages = (eventsResult.data as SitemapEntry[]).map((event) => {
        return {
          url: `${baseUrl}/eventos/${generateSlug(event.title)}`,
          lastModified: event.created_at || currentDate,
          changeFrequency: "monthly" as const,
          priority: 0.8,
        }
      })
    }

    if (projectsResult.data) {
      projectPages = (projectsResult.data as SitemapEntry[]).map((project) => {
        return {
          url: `${baseUrl}/projetos/${generateSlug(project.title)}`,
          lastModified: project.created_at || currentDate,
          changeFrequency: "monthly" as const,
          priority: 0.8,
        }
      })
    }
  } catch (error) {
    console.error("Error fetching data for sitemap:", error)
    eventPages = []
    projectPages = []
  }

  return [...staticPages, ...eventPages, ...projectPages]
}
