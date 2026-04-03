"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, TrendingUp } from "lucide-react"
import Link from "next/link"
import type { ContentItem } from "@/lib/types"
import dynamic from "next/dynamic"
import OptimizedImage from "@/components/optimized-image"
import LazySection from "@/components/lazy-section"

const DynamicEventsSection = dynamic(() => import("@/components/sections/events-section"), {
  loading: () => (
    <div className="bg-muted py-12 md:py-16 lg:py-24">
      <div className="container">
        <div className="flex justify-between items-center mb-6">
          <div className="h-8 w-48 bg-muted-foreground/20 rounded animate-pulse" />
          <div className="h-10 w-24 bg-muted rounded animate-pulse" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-64 bg-background rounded-lg animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  ),
  ssr: false,
})

const DynamicDirectorsSection = dynamic(() => import("@/components/sections/directors-section"), {
  loading: () => (
    <div className="py-12 md:py-16 lg:py-24">
      <div className="container">
        <div className="flex justify-between items-center mb-6">
          <div className="h-8 w-48 bg-muted rounded animate-pulse" />
          <div className="h-10 w-24 bg-muted rounded animate-pulse" />
        </div>
        <div className="flex justify-center">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-4 p-6">
                <div className="h-32 w-32 bg-muted rounded-full animate-pulse sm:h-36 sm:w-36 lg:h-40 lg:w-40" />
                <div className="space-y-2">
                  <div className="h-4 w-24 bg-muted rounded animate-pulse" />
                  <div className="h-3 w-20 bg-muted rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
  ssr: false,
})

const DynamicPartnersSection = dynamic(() => import("@/components/partners-section"), {
  loading: () => (
    <div className="bg-muted py-12 md:py-16 lg:py-24">
      <div className="container">
        <div className="h-8 w-48 bg-muted-foreground/20 rounded animate-pulse mx-auto mb-8" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-24 bg-background rounded-lg animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  ),
  ssr: false,
})

const DynamicMentorsSection = dynamic(() => import("@/components/sections/mentors-section"), {
  loading: () => (
    <div className="py-12 md:py-16 lg:py-24">
      <div className="container">
        <div className="flex justify-between items-center mb-6">
          <div className="h-8 w-48 bg-muted rounded animate-pulse" />
          <div className="h-10 w-24 bg-muted rounded animate-pulse" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-80 bg-muted rounded-lg animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  ),
  ssr: false,
})

const DynamicProjectsSection = dynamic(() => import("@/components/sections/projects-section"), {
  loading: () => (
    <div className="bg-muted py-12 md:py-16 lg:py-24">
      <div className="container">
        <div className="flex justify-between items-center mb-6">
          <div className="h-8 w-48 bg-muted-foreground/20 rounded animate-pulse" />
          <div className="h-10 w-24 bg-muted-foreground/20 rounded animate-pulse" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-64 bg-background rounded-lg animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  ),
  ssr: false,
})

interface HomeClientProps {
  initialEvents: ContentItem[]
  initialProjetos: ContentItem[]
}

export default function HomeClient({ initialEvents = [], initialProjetos = [] }: HomeClientProps) {
  const [heroAnimated] = useState(true)

  return (
    <>
      <section className="critical-hero hero-section relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-black" />

        <div className="relative container flex min-h-screen flex-col items-center justify-center text-center px-4">
          <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
              <OptimizedImage
                src="/images/logo-link-finance.png"
                alt="Link Finance"
                width={300}
                height={60}
                className="h-12 w-auto sm:h-14 md:h-16 lg:h-18"
                priority
                quality={90}
                sizes="(max-width: 640px) 250px, (max-width: 768px) 280px, 300px"
                fetchPriority="high"
              />
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="block text-white">BUILDING THE FUTURE</span>
              <span className="block">
                <span className="text-white">OF </span>
                <span className="text-primary">FINANCE.</span>
              </span>
            </h1>

            <p className="text-base text-white/90 sm:text-lg md:text-xl font-light max-w-3xl">
              Liga de Mercado Financeiro da Link School of Business
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 mt-8">
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-white/90 px-8 py-3 text-lg font-semibold"
              >
                <Link href="/sobre">Sobre</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-primary text-black hover:bg-primary/90 px-8 py-3 text-lg font-semibold"
              >
                <Link href="/processo-seletivo">
                  Processo Seletivo <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-8 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="sr-only">
              Link Finance - Liga de Mercado Financeiro da Link School of Business, localizada em São Paulo.
              Capacitações com Wall Street Prep, projetos em Venture Capital, Private Equity e Investment Banking.
            </h2>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 lg:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <header className="flex items-center justify-center gap-2 mb-4 sm:gap-3 sm:mb-6">
              <div className="h-px w-6 bg-primary sm:w-8" aria-hidden="true"></div>
              <h2 className="sr-only">
                Sobre o Link Finance, Liga de Mercado Financeiro da Link School of Business, localizada em São Paulo.
                Capacitações com Wall Street Prep, projetos em Venture Capital, Private Equity e Investment Banking.
              </h2>
              <h2 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl" aria-hidden="true">
                Sobre o Link Finance
              </h2>
              <div className="h-px w-6 bg-primary sm:w-8" aria-hidden="true"></div>
            </header>
            <div className="mt-6 mb-8 lg:mt-8 lg:mb-12">
              <p className="text-base text-muted-foreground leading-relaxed sm:text-lg lg:text-xl max-w-3xl mx-auto text-pretty">
                A Link Finance é a entidade de mercado financeiro da Link School of Business.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed sm:text-lg lg:text-xl max-w-3xl mx-auto mt-4 text-pretty">
                Nossa missão é impulsionar a inovação e geração de valor, construindo uma comunidade de talentos que
                impactem o mercado e contribuam para o crescimento econômico e social de forma transformadora.
              </p>
            </div>
          </div>

          <div className="mt-8 lg:mt-12">
            <article className="mb-6 rounded-lg border bg-gradient-to-r from-primary/5 to-primary/10 p-3 relative overflow-hidden sm:p-4 lg:p-6 lg:mb-8">
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                  🏅 Parceria Exclusiva
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
                <div className="rounded-full bg-primary/20 p-2 w-fit" aria-hidden="true">
                  <TrendingUp className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                </div>
                <div className="flex-1">
                  <header className="mb-3">
                    <div className="flex flex-col gap-1 mb-2 sm:flex-row sm:items-center sm:gap-2">
                      <h3 className="text-lg font-bold sm:text-xl">Capacitações</h3>
                    </div>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                      <span className="text-xs text-muted-foreground font-medium">powered by</span>
                      <a
                        href="https://www.wallstreetprep.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:opacity-80 transition-opacity w-fit"
                        aria-label="Wall Street Prep - Site oficial"
                      >
                        <OptimizedImage
                          src="/images/partners/wall-street-prep-horizontal.png"
                          alt="Wall Street Prep"
                          width={140}
                          height={48}
                          className="h-5 w-auto object-contain sm:h-6 lazy-load"
                          quality={70}
                          sizes="140px"
                          loading="lazy"
                        />
                      </a>
                    </div>
                  </header>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-2 sm:text-base text-pretty">
                    Em uma iniciativa inédita, o Link Finance firmou{" "}
                    <a
                      href="https://www.wallstreetprep.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-bold hover:underline"
                      aria-label="Wall Street Prep - Parceria exclusiva"
                    >
                      parceria exclusiva com a Wall Street Prep
                    </a>
                    , <strong> referência internacional em formação técnica no mercado financeiro</strong>. Juntos,
                    promovem treinamentos de alto nível voltados ao desenvolvimento dos membros.
                  </p>
                  <p className="text-xs text-muted-foreground/80 italic border-l-2 border-primary/30 pl-2 text-pretty">
                    A Wall Street Prep já formou profissionais atuantes em instituições como Goldman Sachs, JP Morgan e
                    BlackRock.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <LazySection rootMargin="200px">
        <DynamicEventsSection initialEvents={initialEvents} />
      </LazySection>

      <LazySection rootMargin="200px">
        <DynamicDirectorsSection />
      </LazySection>

      <LazySection rootMargin="200px">
        <DynamicPartnersSection />
      </LazySection>

      <LazySection rootMargin="200px">
        <DynamicMentorsSection />
      </LazySection>

      <LazySection rootMargin="200px">
        <DynamicProjectsSection initialProjetos={initialProjetos} />
      </LazySection>
    </>
  )
}
