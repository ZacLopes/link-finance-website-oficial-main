import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { sanitizeImageSrc } from "@/lib/image-mapper"
import { generateSlug } from "@/lib/utils/slug"
import OptimizedImage from "@/components/optimized-image"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface EventPageProps {
  params: Promise<{ slug: string }>
}

async function getEventBySlug(slug: string) {
  const supabase = createClient()

  const { data: events, error } = await supabase.from("events").select("*").order("created_at", { ascending: false })

  if (error) {
    console.error("Erro ao buscar evento:", error)
    return null
  }

  if (!events || events.length === 0) {
    return null
  }

  const event = events.find((item) => generateSlug(item.title) === slug)
  if (!event) return null

  return {
    ...event,
    image: sanitizeImageSrc(event.image) ?? event.image,
  }
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params
  const event = await getEventBySlug(slug)

  if (!event) {
    return {
      title: "Evento não encontrado - Link Finance",
      description: "O evento solicitado não foi encontrado.",
    }
  }

  const eventTags = event.tags
    ? Array.isArray(event.tags)
      ? event.tags
      : event.tags.split(",").map((t: string) => t.trim())
    : []

  return {
    title: `${event.title} - Link Finance`,
    description: event.excerpt || `Evento da Link Finance: ${event.title}`,
    keywords: [...eventTags, "Link Finance", "evento", "mercado financeiro"].join(", "),
    openGraph: {
      title: event.title,
      description: event.excerpt || `Evento da Link Finance: ${event.title}`,
      images: event.image ? [{ url: event.image, width: 1200, height: 630 }] : [],
      type: "article",
      publishedTime: event.created_at,
    },
    twitter: {
      card: "summary_large_image",
      title: event.title,
      description: event.excerpt || `Evento da Link Finance: ${event.title}`,
      images: event.image ? [event.image] : [],
    },
    alternates: {
      canonical: `https://linksbfinance.com/eventos/${slug}`,
    },
  }
}

export async function generateStaticParams() {
  const supabase = createClient()

  const { data: events } = await supabase.from("events").select("title").order("created_at", { ascending: false })

  if (!events) return []

  return events.map((event) => ({
    slug: generateSlug(event.title),
  }))
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params
  const event = await getEventBySlug(slug)

  if (!event) {
    notFound()
  }

  const processTagsFromSupabase = () => {
    if (!event.tags) return []

    if (Array.isArray(event.tags)) {
      return event.tags
    }

    if (typeof event.tags === "string" && event.tags.trim()) {
      try {
        const parsed = JSON.parse(event.tags)
        if (Array.isArray(parsed)) return parsed
      } catch {
        return event.tags
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

    // If it's already in ISO format (YYYY-MM-DD), return it
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
      return dateString
    }

    // Try to parse and convert to ISO format
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

  const isoStartDate = formatDateToISO(event.event_date || event.date)

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
            <time dateTime={isoStartDate}>{event.date}</time>
            {event.category && (
              <>
                <span>•</span>
                <Badge variant="outline" className="bg-primary/10 text-primary">
                  {event.category}
                </Badge>
              </>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{event.title}</h1>
          {event.excerpt && <p className="text-lg text-muted-foreground leading-relaxed">{event.excerpt}</p>}
        </header>

        {event.image && (
          <div className="relative aspect-video overflow-hidden rounded-lg mb-8">
            <OptimizedImage
              src={event.image}
              alt={`${event.title} - Evento da Link Finance`}
              width={800}
              height={450}
              className="h-full w-full object-cover"
              quality={85}
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>
        )}

        {event.full_text && (
          <div className="prose prose-lg max-w-none mb-8">
            <div className="whitespace-pre-wrap leading-relaxed">{event.full_text}</div>
          </div>
        )}

        {tags.length > 0 && (
          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 mb-8">
            <h3 className="text-sm font-medium text-white mb-3">Tags do Evento</h3>
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
          <p>Publicado por {event.author || "Link Finance"}</p>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: event.title,
            description: event.excerpt || event.title,
            startDate: isoStartDate,
            image: event.image ? `https://linksbfinance.com${event.image}` : undefined,
            organizer: {
              "@type": "Organization",
              name: "Link Finance",
              url: "https://linksbfinance.com",
            },
            location: {
              "@type": "Place",
              name: "São Paulo",
              address: {
                "@type": "PostalAddress",
                addressLocality: "São Paulo",
                addressRegion: "SP",
                addressCountry: "BR",
              },
            },
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          }),
        }}
      />
    </div>
  )
}
