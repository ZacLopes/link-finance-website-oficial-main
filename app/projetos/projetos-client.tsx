"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import ArticleCard from "@/components/article-card"
import EventStructuredData from "@/components/event-structured-data"
import type { ContentItem } from "@/lib/types"

interface ProjetosClientPageProps {
  eventsData: ContentItem[]
  projetosData: ContentItem[]
}

export default function ProjetosClientPage({ eventsData, projetosData }: ProjetosClientPageProps) {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [showAllEvents, setShowAllEvents] = useState(false)

  const CARDS_PER_PAGE = 9

  const renderContent = (items: ContentItem[], showAll: boolean, setShowAll: (show: boolean) => void, type: string) => {
    if (!items || items.length === 0) {
      return (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Nenhum {type.toLowerCase()} encontrado.</p>
        </div>
      )
    }

    const displayedItems = showAll ? items : items.slice(0, CARDS_PER_PAGE)
    const hasMore = items.length > CARDS_PER_PAGE

    return (
      <>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {displayedItems.map((item, index) => (
            <ArticleCard
              key={`${item.id}-${index}`}
              title={item.title}
              excerpt={item.excerpt}
              date={item.date}
              author={item.author}
              image={item.image}
              category={item.category ?? undefined}
              fullText={item.full_text ?? undefined}
              tags={item.tags ?? undefined}
              id={item.id}
              type={type.toLowerCase() === "eventos" ? "event" : "project"}
            />
          ))}
        </div>

        {hasMore && !showAll && (
          <div className="flex justify-center mt-12">
            <Button
              onClick={() => setShowAll(true)}
              variant="outline"
              size="lg"
              className="px-8 py-3 text-base font-medium"
            >
              Ver Mais {type} ({items.length - CARDS_PER_PAGE} restantes)
            </Button>
          </div>
        )}

        {showAll && hasMore && (
          <div className="flex justify-center mt-12">
            <Button
              onClick={() => setShowAll(false)}
              variant="outline"
              size="lg"
              className="px-8 py-3 text-base font-medium"
            >
              Ver Menos
            </Button>
          </div>
        )}
      </>
    )
  }

  return (
    <>
      <EventStructuredData events={eventsData} />

      <section className="container py-12">
        <Tabs defaultValue="eventos" className="w-full" style={{ marginTop: "1cm" }}>
          <TabsList className="grid w-full grid-cols-2 bg-transparent border-none rounded-lg h-auto p-0 gap-0 mb-8">
            <TabsTrigger
              value="eventos"
              className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black data-[state=active]:font-semibold data-[state=inactive]:bg-gray-100 data-[state=inactive]:text-gray-600 transition-all duration-200 rounded-l-lg rounded-r-none py-4 px-6 text-base font-medium border-none"
            >
              Eventos
            </TabsTrigger>
            <TabsTrigger
              value="projetos"
              className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black data-[state=active]:font-semibold data-[state=inactive]:bg-gray-100 data-[state=inactive]:text-gray-600 transition-all duration-200 rounded-r-lg rounded-l-none py-4 px-6 text-base font-medium border-none"
            >
              Projetos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="eventos" className="mt-8">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Eventos</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Visitas, palestras e workshops organizados pela Link Finance para o desenvolvimento dos membros com
                profissionais do mercado
              </p>
            </div>
            {renderContent(eventsData, showAllEvents, setShowAllEvents, "Eventos")}
          </TabsContent>

          <TabsContent value="projetos" className="mt-8">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Nossos Projetos</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Projetos práticos desenvolvidos pelos membros da Link Finance em parceria com instituições do mercado
                financeiro, aplicando conhecimentos teóricos em situações reais.
              </p>
            </div>
            {renderContent(projetosData, showAllProjects, setShowAllProjects, "Projetos")}
          </TabsContent>
        </Tabs>
      </section>
    </>
  )
}
