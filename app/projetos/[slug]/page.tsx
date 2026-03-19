import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { sanitizeImageSrc } from "@/lib/image-mapper"
import { generateSlug } from "@/lib/utils/slug"
import OptimizedImage from "@/components/optimized-image"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

async function getProjectBySlug(slug: string) {
  const supabase = createClient()

  const { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Erro ao buscar projeto:", error)
    return null
  }

  if (!projects || projects.length === 0) {
    return null
  }

  const project = projects.find((item) => generateSlug(item.title) === slug)
  if (!project) return null

  return {
    ...project,
    image: sanitizeImageSrc(project.image) ?? project.image,
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    return {
      title: "Projeto não encontrado - Link Finance",
      description: "O projeto solicitado não foi encontrado.",
    }
  }

  const projectTags = project.tags
    ? Array.isArray(project.tags)
      ? project.tags
      : project.tags.split(",").map((t: string) => t.trim())
    : []

  return {
    title: `${project.title} - Link Finance`,
    description: project.excerpt || `Projeto da Link Finance: ${project.title}`,
    keywords: [...projectTags, "Link Finance", "projeto", "mercado financeiro"].join(", "),
    openGraph: {
      title: project.title,
      description: project.excerpt || `Projeto da Link Finance: ${project.title}`,
      images: project.image ? [{ url: project.image, width: 1200, height: 630 }] : [],
      type: "article",
      publishedTime: project.created_at,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.excerpt || `Projeto da Link Finance: ${project.title}`,
      images: project.image ? [project.image] : [],
    },
    alternates: {
      canonical: `https://linksbfinance.com/projetos/${slug}`,
    },
  }
}

export async function generateStaticParams() {
  const supabase = createClient()

  const { data: projects } = await supabase.from("projects").select("title").order("created_at", { ascending: false })

  if (!projects) return []

  return projects.map((project) => ({
    slug: generateSlug(project.title),
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const processTagsFromSupabase = () => {
    if (!project.tags) return []

    if (Array.isArray(project.tags)) {
      return project.tags
    }

    if (typeof project.tags === "string" && project.tags.trim()) {
      try {
        const parsed = JSON.parse(project.tags)
        if (Array.isArray(parsed)) return parsed
      } catch {
        return project.tags
          .split(/[,;]/)
          .map((tag) => tag.trim())
          .filter(Boolean)
      }
    }

    return []
  }

  const tags = processTagsFromSupabase()
  const formatDateToISO = (dateString: string | null | undefined): string => {
    if (!dateString) return new Date().toISOString().split("T")[0]

    if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
      return dateString
    }

    try {
      const date = new Date(dateString)
      if (!isNaN(date.getTime())) {
        return date.toISOString().split("T")[0]
      }
    } catch {
      return new Date().toISOString().split("T")[0]
    }

    return new Date().toISOString().split("T")[0]
  }

  const isoProjectDate = formatDateToISO(project.project_date || project.date)

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link
          href="/projetos"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para Projetos
        </Link>

        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
            <time dateTime={isoProjectDate}>{project.date}</time>
            {project.category && (
              <>
                <span>•</span>
                <Badge variant="outline" className="bg-primary/10 text-primary">
                  {project.category}
                </Badge>
              </>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
          {project.excerpt && <p className="text-lg text-muted-foreground leading-relaxed">{project.excerpt}</p>}
        </header>

        {project.image && (
          <div className="relative aspect-video overflow-hidden rounded-lg mb-8">
            <OptimizedImage
              src={project.image}
              alt={`${project.title} - Projeto da Link Finance`}
              width={800}
              height={450}
              className="h-full w-full object-cover"
              quality={85}
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>
        )}

        {project.full_text && (
          <div className="prose prose-lg max-w-none mb-8">
            <div className="whitespace-pre-wrap leading-relaxed">{project.full_text}</div>
          </div>
        )}

        {tags.length > 0 && (
          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 mb-8">
            <h3 className="text-sm font-medium text-white mb-3">Tags do Projeto</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span key={index} className="bg-yellow-500/90 text-black text-sm font-medium px-3 py-1.5 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="border-t pt-6 text-sm text-muted-foreground">
          <p>Publicado por {project.author || "Link Finance"}</p>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: project.title,
            description: project.excerpt || project.title,
            datePublished: project.project_date || project.date,
            image: project.image ? `https://linksbfinance.com${project.image}` : undefined,
            author: {
              "@type": "Organization",
              name: "Link Finance",
              url: "https://linksbfinance.com",
            },
            publisher: {
              "@type": "Organization",
              name: "Link Finance",
              url: "https://linksbfinance.com",
            },
          }),
        }}
      />
    </div>
  )
}
