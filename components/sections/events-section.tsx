"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import ArticleCard from "@/components/article-card"
import type { ContentItem } from "@/lib/types"

interface EventsSectionProps {
  initialEvents: ContentItem[]
}

export default function EventsSection({ initialEvents }: EventsSectionProps) {
  return (
    <section className="bg-muted py-8 md:py-12 lg:py-16 lazy-load" aria-labelledby="eventos-heading">
      <div className="container">
        <header className="flex flex-col items-center justify-between gap-3 sm:flex-row sm:gap-4">
          <h2
            id="eventos-heading"
            className="text-xl font-bold tracking-tighter sm:text-2xl lg:text-3xl text-foreground"
          >
            Últimos Eventos
          </h2>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="bg-background border-border text-foreground hover:bg-accent"
          >
            <Link href="/eventos">
              Ver Todos <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </header>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:mt-8">
          {initialEvents.slice(0, 3).map((event, index) => (
            <ArticleCard
              key={`event-${event.id}-${index}`}
              title={event.title}
              excerpt={event.excerpt}
              date={event.date}
              author={event.author}
              image={event.image}
              category={event.category ?? undefined}
              fullText={event.full_text ?? undefined}
              type="event"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
