import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import { createSupabaseServerClient } from "@/lib/supabase/server"
import type { ContentItem } from "@/lib/types"
import ProjetosClientPage from "./projetos-client"

export async function generateMetadata(): Promise<Metadata> {
  const supabase = createSupabaseServerClient()

  const { data: eventsData } = await supabase.from("events").select("*").order("event_date", { ascending: false })
  const { data: projetosData } = await supabase.from("projects").select("*").order("project_date", { ascending: false })

  // Extract tags from events and projects for SEO keywords
  const allTags = new Set<string>()

  // Process events tags
  eventsData?.forEach((event) => {
    if (event.tags) {
      const eventTags = Array.isArray(event.tags)
        ? event.tags
        : typeof event.tags === "string"
          ? event.tags.split(",").map((tag) => tag.trim())
          : []
      eventTags.forEach((tag) => allTags.add(tag))
    }
  })

  // Process projects tags (if they have tags)
  projetosData?.forEach((project) => {
    if (project.tags) {
      const projectTags = Array.isArray(project.tags)
        ? project.tags
        : typeof project.tags === "string"
          ? project.tags.split(",").map((tag) => tag.trim())
          : []
      projectTags.forEach((tag) => allTags.add(tag))
    }
  })

  const keywords = [
    "Link Finance",
    "Projetos Financeiros",
    "Eventos Financeiros",
    "Liga de Mercado Financeiro",
    "Wall Street Prep",
    "Investment Banking",
    "Private Equity",
    "Venture Capital",
    ...Array.from(allTags),
  ]

  return {
    title: "Projetos | Link Finance",
    description:
      "Projetos e eventos desenvolvidos pela Link Finance sobre o mercado financeiro, incluindo parcerias com Wall Street Prep e projetos em Investment Banking, Private Equity e Venture Capital.",
    keywords: keywords.join(", "),
    openGraph: {
      title: "Projetos e Eventos | Link Finance",
      description:
        "Projetos e eventos desenvolvidos pela Link Finance sobre o mercado financeiro, incluindo parcerias com Wall Street Prep e projetos em Investment Banking, Private Equity e Venture Capital.",
      url: "https://linksbfinance.com/projetos",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Projetos e Eventos | Link Finance",
      description:
        "Projetos e eventos desenvolvidos pela Link Finance sobre o mercado financeiro, incluindo parcerias com Wall Street Prep e projetos em Investment Banking, Private Equity e Venture Capital.",
    },
    alternates: {
      canonical: "https://linksbfinance.com/projetos",
    },
  }
}

export default async function ProjetosPage() {
  const supabase = createSupabaseServerClient()

  // Ordenar por data do evento (event_date, project_date, article_date) DESC (mais novos primeiro)
  const { data: eventsData } = await supabase.from("events").select("*").order("event_date", { ascending: false })
  const { data: projetosData } = await supabase.from("projects").select("*").order("project_date", { ascending: false })

  return (
    <>
      <PageHeader
        title="Projetos"
        description="Conheça os projetos desenvolvidos pela Link Finance e nossos artigos sobre mercado financeiro, investimentos e economia."
      />

      <ProjetosClientPage
        eventsData={(eventsData as ContentItem[]) ?? []}
        projetosData={(projetosData as ContentItem[]) ?? []}
      />
    </>
  )
}
