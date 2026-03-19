import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Calendar, Clock, Users, FileText } from "lucide-react"
import PageHeader from "@/components/page-header"

export const metadata: Metadata = {
  title: "Processo Seletivo | Link Finance",
  description:
    "Informações sobre o processo seletivo da Link Finance, a liga de mercado financeiro da Link School of Business",
  alternates: {
    canonical: "https://linksbfinance.com/processo-seletivo",
  },
  openGraph: {
    title: "Processo Seletivo 2025 | Link Finance",
    description:
      "Faça parte da Link Finance! Conheça nosso processo seletivo e impulsione sua carreira no mercado financeiro",
    url: "https://linksbfinance.com/processo-seletivo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Processo Seletivo 2025 | Link Finance",
    description:
      "Faça parte da Link Finance! Conheça nosso processo seletivo e impulsione sua carreira no mercado financeiro",
  },
}

export default function ProcessoSeletivoPage() {
  return (
    <>
      <PageHeader
        title="Processo Seletivo"
        description="Faça parte da Link Finance e impulsione sua carreira no mercado financeiro."
        showCtaButton={true}
        ctaLink="https://docs.google.com/forms/d/e/1FAIpQLSekOJX2KdneuMZDatuCfP0IuTVzrdNxoPvBf7NC2BNfkaSgjA/viewform"
      />

      <section className="container py-12" style={{ marginTop: "1cm" }}>
        <Tabs defaultValue="informacoes" className="w-full">
          <TabsList className="grid w-full grid-cols-1">
            <TabsTrigger value="informacoes">Informações</TabsTrigger>
          </TabsList>
          <TabsContent value="informacoes" className="mt-6">
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Sobre o Processo</CardTitle>
                  <CardDescription>Etapas e cronograma do processo seletivo</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-primary/10 p-1">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Inscrições</h4>
                      <p className="text-sm text-muted-foreground">
                        Preenchimento do formulário online com dados pessoais e acadêmicos.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-primary/10 p-1">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Prova teórica</h4>
                      <p className="text-sm text-muted-foreground">
                        Avaliação presencial sobre conceitos de economia, mercado financeiro, lógica e matemática
                        financeira.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-primary/10 p-1">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Entrevista técnica</h4>
                      <p className="text-sm text-muted-foreground">
                        Avaliação de conhecimentos técnicos e habilidades analíticas.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-primary/10 p-1">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Entrevista de fit</h4>
                      <p className="text-sm text-muted-foreground">
                        Conversa com membros da diretoria para avaliar alinhamento cultural e soft skills.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Datas Importantes</CardTitle>
                  <CardDescription>Cronograma do processo seletivo</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Período de Inscrições</h4>
                      <p className="text-sm text-muted-foreground">04/08 a 15/08</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Prova Lógica (Presencial)</h4>
                      <p className="text-sm text-muted-foreground">18/08</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Entrevista Técnica</h4>
                      <p className="text-sm text-muted-foreground">20/08 a 21/08</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Entrevista de Fit com a Diretoria</h4>
                      <p className="text-sm text-muted-foreground">22/08 a 24/08</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Divulgação dos Aprovados</h4>
                      <p className="text-sm text-muted-foreground">25/08</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Requisitos</CardTitle>
                  <CardDescription>O que buscamos nos candidatos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                      <Clock className="h-8 w-8 text-primary" />
                      <h4 className="font-medium">Disponibilidade</h4>
                      <p className="text-sm text-muted-foreground">
                        Mínimo de 10 horas semanais para atividades da liga
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                      <Users className="h-8 w-8 text-primary" />
                      <h4 className="font-medium">Trabalho em Equipe</h4>
                      <p className="text-sm text-muted-foreground">
                        Capacidade de colaborar e contribuir em projetos coletivos
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                      <FileText className="h-8 w-8 text-primary" />
                      <h4 className="font-medium">Conhecimento</h4>
                      <p className="text-sm text-muted-foreground">
                        Interesse por mercado financeiro e disposição para aprender
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">
                    Não é necessário ter experiência prévia no mercado financeiro, apenas interesse genuíno e disposição
                    para aprender.
                  </p>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </>
  )
}
