"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import ArticleCard from "@/components/article-card"
import type { ContentItem } from "@/lib/types"

interface ProjectsSectionProps {
  initialProjetos: ContentItem[]
}

export default function ProjectsSection({ initialProjetos }: ProjectsSectionProps) {
  return (
    <section className="bg-muted py-8 md:py-12 lg:py-16 lazy-load" aria-labelledby="projetos-heading">
      <div className="container">
        <header className="flex flex-col items-center justify-between gap-3 sm:flex-row sm:gap-4">
          <h2 id="projetos-heading" className="text-xl font-bold tracking-tighter sm:text-2xl lg:text-3xl">
            Projetos Recentes
          </h2>
          <Button asChild variant="secondary" size="sm">
            <Link href="/projetos">
              Ver Todos <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </header>
        <div className="mt-6 lg:mt-8">
          {initialProjetos.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {initialProjetos.slice(0, 3).map((projeto, index) => (
                <ArticleCard
                  key={`projeto-${projeto.id}-${index}`}
                  title={projeto.title}
                  excerpt={projeto.excerpt}
                  date={projeto.date}
                  author={projeto.author}
                  image={projeto.image}
                  category={projeto.category ?? undefined}
                  fullText={projeto.full_text ?? undefined}
                  type="project"
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">
                Novos projetos em desenvolvimento. Em breve compartilharemos nossas iniciativas práticas com o mercado
                financeiro.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
