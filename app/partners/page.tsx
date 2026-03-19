import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Handshake, TrendingUp, Users } from "lucide-react"
import PageHeader from "@/components/page-header"

export const metadata: Metadata = {
  title: "Partners | Link Finance",
  description:
    "Conheça nossos parceiros estratégicos que apoiam a Link Finance na formação de futuros profissionais do mercado financeiro",
  alternates: {
    canonical: "https://linksbfinance.com/partners",
  },
  openGraph: {
    title: "Parceiros Estratégicos | Link Finance",
    description: "Conheça as principais empresas do mercado financeiro que são parceiras da Link Finance",
    url: "https://linksbfinance.com/partners",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parceiros Estratégicos | Link Finance",
    description: "Conheça as principais empresas do mercado financeiro que são parceiras da Link Finance",
  },
}

export default function PartnersPage() {
  const partners = [
    {
      name: "Wall Street Prep",
      description:
        "Referência internacional em formação técnica no mercado financeiro, oferecendo treinamentos de alto nível para profissionais do setor.",
      logo: "/images/partners/wall-street-prep.png",
      website: "https://www.wallstreetprep.com/",
      category: "Educação Financeira",
      location: "Nova York, EUA",
    },
    {
      name: "Equus Capital",
      description:
        "Boutique de investimentos especializada em private equity e venture capital, focada em empresas de alto crescimento no Brasil.",
      logo: "/images/partners/equus-capital.png",
      website: "https://www.equuscapital.com.br/",
      category: "Private Equity & Venture Capital",
      location: "São Paulo, SP",
    },
    {
      name: "Fortezza Partners",
      description:
        "Gestora independente especializada em investimentos alternativos e estruturados para investidores qualificados.",
      logo: "/images/partners/fortezza-partners.png",
      website: "https://fortezzapartners.com.br/",
      category: "Gestão de Recursos",
      location: "São Paulo, SP",
    },
    {
      name: "FM/Derraik",
      description:
        "Gestora independente com foco em renda variável e estratégias quantitativas para o mercado brasileiro.",
      logo: "/images/partners/fm-derraik.png",
      website: "https://www.fmderraik.com.br/",
      category: "Gestão de Recursos",
      location: "São Paulo, SP",
    },
    {
      name: "Confrapar",
      description:
        "Empresa de participações e investimentos com atuação diversificada em diferentes setores da economia brasileira.",
      logo: "/images/partners/confrapar.png",
      website: "https://confrapar.com.br/",
      category: "Holding de Investimentos",
      location: "São Paulo, SP",
    },
    {
      name: "Astella Investimentos",
      description:
        "Gestora focada em estratégias de investimento sustentável e integração de critérios ESG na análise de ativos.",
      logo: "/images/partners/astella.png",
      website: "https://www.astella.com.br/",
      category: "ESG & Sustainable Investing",
      location: "São Paulo, SP",
    },
    {
      name: "Advisia Investimentos",
      description:
        "Consultoria especializada em assessoria de investimentos e planejamento financeiro para pessoas físicas e jurídicas.",
      logo: "/images/partners/advisia.png",
      website: "https://advisiainvestimentos.com.br/",
      category: "Assessoria de Investimentos",
      location: "São Paulo, SP",
    },
  ]

  const benefits = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Projetos Práticos",
      description: "Projetos práticos com empresas parceiras para o desenvolvimento dos membros",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Mentoria Especializada",
      description:
        "Mentorias recorrentes com profissionais de destaque nas principais instituições do mercado financeiro, promovendo aprendizado direto e troca de experiências reais.",
    },
    {
      icon: <Handshake className="h-6 w-6" />,
      title: "Contato com Mercado",
      description:
        "Vivência prática por meio de visitas técnicas, workshops e capacitações com empresas e profissionais atuantes no mercado.",
    },
  ]

  return (
    <>
      <PageHeader
        title="Nossos Partners"
        description="Conheça as empresas que apoiam a Link Finance na formação dos futuros profissionais do mercado financeiro brasileiro."
      />

      <section className="container py-12" style={{ marginTop: "1cm" }}>
        {/* Introdução */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Parcerias Estratégicas</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Trabalhamos com as principais empresas do mercado financeiro brasileiro para oferecer aos nossos membros
            oportunidades únicas de desenvolvimento profissional, networking e inserção no mercado de trabalho.
          </p>
        </div>

        {/* Benefícios das Parcerias */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center gap-4 rounded-lg border p-6 text-center">
              <div className="rounded-full bg-primary/10 p-3 text-primary">{benefit.icon}</div>
              <h3 className="text-xl font-bold">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Grid de Partners */}
        <div className="mt-16">
          <h3 className="mb-8 text-center text-2xl font-bold">Empresas Parceiras</h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {partners.map((partner, index) => (
              <Card key={index} className="group transition-all duration-300 hover:shadow-lg">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-24 w-full items-center justify-center rounded-lg bg-gray-50 p-4">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={`${partner.name} logo`}
                      width={200}
                      height={100}
                      className="max-h-16 w-auto object-contain"
                    />
                  </div>
                  <CardTitle className="text-xl">{partner.name}</CardTitle>
                  <CardDescription className="text-xs text-muted-foreground">{partner.location}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{partner.description}</p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <a href={partner.website} target="_blank" rel="noopener noreferrer">
                      Visitar Site <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action para Parcerias */}
        <div className="mt-16 rounded-lg bg-muted p-8 text-center">
          <h3 className="text-2xl font-bold">Interessado em ser nosso parceiro?</h3>
          <p className="mt-4 text-muted-foreground">
            Se sua empresa tem interesse em apoiar a formação de novos talentos do mercado financeiro e fazer parte da
            nossa rede de parceiros estratégicos, entre em contato conosco para discutir oportunidades de colaboração.
          </p>
          <Button asChild className="mt-6" size="lg">
            <a href="mailto:gabriel.matsumoto@aluno.lsb.com.br?subject=Parceria%20Link%20Finance">Fale Conosco</a>
          </Button>
        </div>
      </section>
    </>
  )
}
