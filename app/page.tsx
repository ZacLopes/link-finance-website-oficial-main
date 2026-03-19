import type { Metadata } from "next"
import { createSupabaseServerClient } from "@/lib/supabase/server"
import { sanitizeImageSrc } from "@/lib/image-mapper"
import type { ContentItem } from "@/lib/types"
import HomeClient from "./home-client"

export const metadata: Metadata = {
  title: "Link Finance",
  description:
    "Link Finance - Liga de Mercado Financeiro da Link School of Business. Capacitações com Wall Street Prep, projetos em Venture Capital, Private Equity e Investment Banking.",

  alternates: {
    canonical: "https://linksbfinance.com",
  },

  openGraph: {
    type: "website",
    url: "https://linksbfinance.com",
    title: "Link Finance | Liga de Mercado Financeiro",
    description:
      "Link Finance - Liga de Mercado Financeiro da Link School of Business. Projetos práticos em Venture Capital, Private Equity e Investment Banking.",
    siteName: "Link Finance",
    images: [
      {
        url: "https://linksbfinance.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Link Finance - Liga de Mercado Financeiro",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Link Finance | Liga de Mercado Financeiro",
    description:
      "Link Finance - Liga de Mercado Financeiro da Link School of Business. Projetos práticos em Venture Capital, Private Equity e Investment Banking.",
    images: ["https://linksbfinance.com/images/og-image.jpg"],
  },
}

export default async function HomePage() {
  const supabase = createSupabaseServerClient()
  const normalizeContentItems = (items: ContentItem[] | null | undefined): ContentItem[] =>
    (items ?? []).map((item) => ({
      ...item,
      image: sanitizeImageSrc(item.image) ?? item.image,
    }))

  let initialEvents: ContentItem[] = []
  let initialProjetos: ContentItem[] = []
  let error: string | null = null

  try {
    const { data: eventsData, error: eventsError } = await supabase
      .from("events")
      .select("*")
      .order("event_date", { ascending: false })

    if (eventsError) {
      console.error("Erro ao buscar eventos:", eventsError.message)
      throw new Error(`Erro ao buscar eventos: ${eventsError.message}`)
    }
    initialEvents = normalizeContentItems(eventsData as ContentItem[])

    const { data: projetosData, error: projetosError } = await supabase
      .from("projects")
      .select("*")
      .order("project_date", { ascending: false })

    if (projetosError) {
      console.error("Erro ao buscar projetos:", projetosError.message)
      throw new Error(`Erro ao buscar projetos: ${projetosError.message}`)
    }
    initialProjetos = normalizeContentItems(projetosData as ContentItem[])
  } catch (err: any) {
    console.error("Erro ao carregar conteúdo da home:", err.message)
    error = `Erro ao Carregar Conteúdo: ${err.message}. Possíveis soluções: Verifique se SUPABASE_URL está correta (deve terminar com .supabase.co); Confirme se SUPABASE_SERVICE_ROLE_KEY é a chave correta (não a anon key); Verifique se as tabelas 'events' e 'projects' existem no banco de dados; Confirme se as políticas RLS (Row Level Security) estão configuradas corretamente; Execute os scripts SQL de inicialização se necessário.`
  }

  if (error) {
    return (
      <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-red-50 p-4 text-red-800">
        <div className="max-w-md text-center">
          <h2 className="mb-2 text-xl font-bold">Erro ao Carregar Conteúdo</h2>
          <p className="mb-4">Ocorreu um problema ao conectar com o banco de dados.</p>
          <details className="text-sm text-red-700">
            <summary className="cursor-pointer font-medium">Detalhes técnicos</summary>
            <p className="mt-2 whitespace-pre-wrap">{error}</p>
          </details>
        </div>
      </div>
    )
  }

  return <HomeClient initialEvents={initialEvents} initialProjetos={initialProjetos} />
}
