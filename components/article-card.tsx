import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import OptimizedImage from "@/components/optimized-image"
import Link from "next/link"
import { mapImageUrl } from "@/lib/image-mapper"

interface ArticleCardProps {
  title?: string
  excerpt?: string
  date?: string
  author?: string
  image?: string
  category?: string
  fullText?: string
  tags?: string[] | string | null
  id?: string
  type?: "event" | "project"
}

export default function ArticleCard({
  title = "Título do Evento/Artigo",
  excerpt = "Breve descrição do evento ou artigo.",
  date = "Data Desconhecida",
  author = "Link Finance",
  image = "/placeholder.svg?height=200&width=400&text=Imagem+Indisponível",
  category,
  fullText,
  tags,
  id,
  type = "event",
}: ArticleCardProps) {
  const generateTags = () => {
    if (category?.toLowerCase().includes("evento")) {
      return ["Networking", "Mercado", "Educação"]
    } else if (category?.toLowerCase().includes("projeto")) {
      return ["Análise", "Valuation", "Estratégia"]
    } else {
      return ["Finanças", "Investimentos", "Mercado"]
    }
  }

  const processTagsFromSupabase = () => {
    if (!tags) return generateTags()

    // If tags is already an array, use it
    if (Array.isArray(tags) && tags.length > 0) {
      return tags
    }

    // If tags is a string, try to parse it
    if (typeof tags === "string" && tags.trim()) {
      try {
        // Try to parse as JSON array first
        const parsed = JSON.parse(tags)
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed
        }
      } catch {
        // If not JSON, split by comma or semicolon
        const splitTags = tags
          .split(/[,;]/)
          .map((tag) => tag.trim())
          .filter((tag) => tag.length > 0)
        if (splitTags.length > 0) {
          return splitTags
        }
      }
    }

    // Fallback to generated tags
    return generateTags()
  }

  const generateSlug = (title: string): string => {
    return title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim()
  }

  const slug = generateSlug(title)
  const linkUrl = type === "event" ? `/eventos/${slug}` : `/projetos/${slug}`

  const displayTags = processTagsFromSupabase()

  const mappedImage = mapImageUrl(image)

  return (
    <div className="h-full">
      <Link href={linkUrl} className="block h-full">
        <Card
          className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg cursor-pointer"
          role="article"
        >
          <div className="aspect-video overflow-hidden relative">
            <OptimizedImage
              src={mappedImage}
              alt={`${title} - ${category || "Conteúdo"} da Link Finance`}
              width={400}
              height={225}
              className="h-full w-full object-center transition-transform duration-300 hover:scale-105"
              quality={75}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <CardHeader className="p-3 pb-0 sm:p-4 sm:pb-0">
            <div className="flex items-center justify-between gap-2">
              <time className="text-xs text-muted-foreground sm:text-sm" dateTime={date}>
                {date}
              </time>
              {category && (
                <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30 text-xs font-medium">
                  {category}
                </Badge>
              )}
            </div>
            <h3 className="line-clamp-2 text-base font-bold leading-tight sm:text-lg lg:text-xl">{title}</h3>
          </CardHeader>
          <CardContent className="p-3 pt-2 sm:p-4 sm:pt-2">
            <p className="line-clamp-3 text-xs text-muted-foreground sm:text-sm">{excerpt}</p>
          </CardContent>
        </Card>
      </Link>
    </div>
  )
}
