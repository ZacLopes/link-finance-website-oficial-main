import type { Metadata } from "next"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, BookOpen, Award, Handshake, Rocket, Building } from "lucide-react"
import PageHeader from "@/components/page-header"
import SpotlightCard from "@/components/SpotlightCard"

export const metadata: Metadata = {
  title: "Sobre | Link Finance",
  description:
    "Conheça a Link Finance, nossa história, missão e valores. Saiba mais sobre nossas vertentes em Investment Banking, Venture Capital e Private Equity.",

  alternates: {
    canonical: "https://linksbfinance.com/sobre",
  },

  openGraph: {
    type: "website",
    url: "https://linksbfinance.com/sobre",
    title: "Sobre a Link Finance | Liga de Mercado Financeiro",
    description:
      "Conheça nossa história, missão e valores. Saiba mais sobre nossas vertentes em Investment Banking, Venture Capital e Private Equity.",
    siteName: "Link Finance",
    images: [
      {
        url: "https://linksbfinance.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sobre a Link Finance",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sobre a Link Finance | Liga de Mercado Financeiro",
    description:
      "Conheça nossa história, missão e valores. Saiba mais sobre nossas vertentes em Investment Banking, Venture Capital e Private Equity.",
    images: ["https://linksbfinance.com/images/og-image.jpg"],
  },
}

export default function SobrePage() {
  const diretoria = [
    {
      name: "Gabriel Matsumoto",
      role: "Presidente",
      image: "/images/gabriel-matsumoto-2025.jpeg",
    },
    {
      name: "Luigi Faveri",
      role: "Diretor Institucional",
      image: "/images/luigi-faveri.jpeg",
    },
    {
      name: "Bruno Akihiro",
      role: "Diretor de Projetos",
      image: "/images/bruno-akihiro.jpeg",
    },
    {
      name: "Eduardo Kokis",
      role: "Diretor de Pessoas",
      image: "/images/eduardo-kokis.jpeg",
    },
  ]

  return (
    <>
      <PageHeader
        title="Sobre a Link Finance"
        description="Conheça nossa história, missão e os valores que norteiam a liga de mercado financeiro da Link School of Business."
      />

      <section className="container py-12" style={{ marginTop: "1cm" }}>
        <Tabs defaultValue="quem-somos" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="quem-somos">Quem Somos</TabsTrigger>
            <TabsTrigger value="diretoria">Diretoria</TabsTrigger>
          </TabsList>
          <TabsContent value="quem-somos" className="mt-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Nossa História</h2>
                <div className="mt-4 space-y-4">
                  <p>
                    A Link Finance é a entidade de mercado financeiro da Link School of Business, fundada com o objetivo
                    de preparar membros para carreiras excepcionais no setor financeiro ou para empreender com
                    excelência.
                  </p>
                  <p>
                    Nossa missão é impulsionar a inovação e geração de valor, construindo uma comunidade de talentos que
                    impactem o mercado e contribuam para o crescimento econômico e social de forma transformadora.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/comunidade-link-finance.jpeg"
                  alt="Membros da Link Finance em um evento de networking"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                  quality={80} // Adicionado para otimização
                  sizes="(max-width: 768px) 100vw, 600px" // Adicionado para responsividade
                />
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-foreground">Nossas Vertentes</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <SpotlightCard spotlightColor="rgba(255, 215, 0, 0.2)" className="p-6 bg-white rounded-lg border">
                  <div className="pb-2">
                    <Handshake className="h-6 w-6 text-primary" />
                    <h3 className="mt-2 text-lg font-semibold">Investment Banking</h3>
                  </div>
                  <div>
                    <p className="text-sm text-foreground">
                      Análise e execução de operações de mercados de capitais, estruturando captações de dívida e equity
                      e reestruturações financeiras.
                    </p>
                  </div>
                </SpotlightCard>
                <SpotlightCard spotlightColor="rgba(255, 215, 0, 0.2)" className="p-6 bg-white rounded-lg border">
                  <div className="pb-2">
                    <Rocket className="h-6 w-6 text-primary" />
                    <h3 className="mt-2 text-lg font-semibold">Venture Capital</h3>
                  </div>
                  <div>
                    <p className="text-sm text-foreground">
                      Investimento em startups e empresas de alto potencial, desde a prospecção de negócios até o
                      suporte ao crescimento.
                    </p>
                  </div>
                </SpotlightCard>
                <SpotlightCard spotlightColor="rgba(255, 215, 0, 0.2)" className="p-6 bg-white rounded-lg border">
                  <div className="pb-2">
                    <Building className="h-6 w-6 text-primary" />
                    <h3 className="mt-2 text-lg font-semibold">Private Equity</h3>
                  </div>
                  <div>
                    <p className="text-sm text-foreground">
                      Gestão de investimentos em empresas consolidadas, com foco na otimização de operações e geração de
                      valor a longo prazo.
                    </p>
                  </div>
                </SpotlightCard>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-foreground">O que fazemos</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <SpotlightCard spotlightColor="rgba(255, 215, 0, 0.2)" className="p-6 bg-white rounded-lg border">
                  <div className="pb-2">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    <h3 className="mt-2 text-lg font-semibold">Desenvolvimento de Carreira</h3>
                  </div>
                  <div>
                    <p className="text-sm text-foreground">
                      Preparamos nossos membros para carreiras excepcionais no mercado financeiro através de mentoria e
                      capacitação.
                    </p>
                  </div>
                </SpotlightCard>
                <SpotlightCard spotlightColor="rgba(255, 215, 0, 0.2)" className="p-6 bg-white rounded-lg border">
                  <div className="pb-2">
                    <BookOpen className="h-6 w-6 text-primary" />
                    <h3 className="mt-2 text-lg font-semibold">Capacitações</h3>
                  </div>
                  <div>
                    <p className="text-sm text-foreground">
                      Capacitamos os membros com conteúdos práticos sobre o mercado e aulas com profissionais
                      referências.
                    </p>
                  </div>
                </SpotlightCard>
                <SpotlightCard spotlightColor="rgba(255, 215, 0, 0.2)" className="p-6 bg-white rounded-lg border">
                  <div className="pb-2">
                    <Award className="h-6 w-6 text-primary" />
                    <h3 className="mt-2 text-lg font-semibold">Inovação</h3>
                  </div>
                  <div>
                    <p className="text-sm text-foreground">
                      Somos movidos pela inovação, unindo agilidade, eficiência e tecnologia para transformar o mercado
                      de capitais e formar líderes do futuro.
                    </p>
                  </div>
                </SpotlightCard>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="diretoria" className="mt-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground">Diretoria Executiva</h2>
              <p className="mt-2 text-muted-foreground">
                Conheça os membros responsáveis pela gestão da Link Finance no ciclo 2025
              </p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {diretoria.map((membro, index) => (
                <div key={index} className="flex flex-col items-center gap-4 rounded-lg border p-6 text-center">
                  <div className="h-40 w-40 overflow-hidden rounded-full">
                    <Image
                      src={membro.image || "/placeholder.svg"}
                      alt={membro.name}
                      width={200}
                      height={200}
                      className="h-full w-full object-cover object-position-y-top"
                      style={{ objectPosition: "center 30%" }}
                      quality={80} // Adicionado para otimização
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 200px" // Adicionado para responsividade
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">{membro.name}</h4>
                    <p className="text-primary">{membro.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </>
  )
}
