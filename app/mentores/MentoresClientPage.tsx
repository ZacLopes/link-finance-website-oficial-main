"use client"

import { useState } from "react"
import MentorCard from "@/components/mentor-card"
import PageHeader from "@/components/page-header"
import { mentorsData } from "@/lib/mentors-data"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Linkedin } from "lucide-react"
import Image from "next/image"

export default function MentoresClientPage() {
  const [selectedMentor, setSelectedMentor] = useState<any>(null)

  return (
    <>
      <PageHeader
        title="Nossos Mentores"
        description="Conheça os profissionais que compartilham seu conhecimento e experiência com os membros da Link Finance."
      />

      <section className="container py-12" style={{ marginTop: "1cm" }}>
        <div className="mx-auto max-w-3xl text-center mb-12">
          <p className="text-lg text-muted-foreground">
            Nossa rede de mentores é composta por executivos seniores das principais instituições financeiras do país,
            que dedicam seu tempo para orientar e desenvolver os futuros talentos do mercado financeiro.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mentorsData.map((mentor, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="cursor-pointer">
                  <MentorCard
                    name={mentor.name}
                    role={mentor.role}
                    company={mentor.company}
                    image={mentor.image}
                    bio={mentor.bio}
                    linkedin={mentor.linkedin}
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{mentor.name}</DialogTitle>
                  <DialogDescription>
                    {mentor.role} na {mentor.company}
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col items-center gap-6 p-6">
                  <div className="relative">
                    <div className="h-48 w-48 overflow-hidden rounded-full">
                      <Image
                        src={mentor.image || "/placeholder.svg"}
                        alt={mentor.name}
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        quality={80} // Adicionado para otimização
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 300px" // Adicionado para responsividade
                      />
                    </div>
                  </div>

                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold">{mentor.name}</div>
                    <p className="text-primary text-lg font-medium">{mentor.role}</p>
                    <p className="text-muted-foreground">{mentor.company}</p>
                  </div>

                  {mentor.bio && (
                    <div className="text-center max-w-lg">
                      <p className="text-muted-foreground leading-relaxed">
                        {mentor.name === "Fabiana Fagundes"
                          ? "Sócia da FM/Derraik, como foco no processo de investimento em startups e acessoria jurídica para ativos ilíquidos"
                          : mentor.name === "Rodrigo Menezes"
                            ? "Sócio fundador da FM/Derraik, com vasta experiência em gestão de investimentos e desenvolvimento de estratégias de mercado em ativos ilíquidos."
                            : mentor.bio}
                      </p>
                    </div>
                  )}

                  {mentor.linkedin && (
                    <Button asChild variant="outline" className="mt-4 bg-transparent">
                      <a
                        href={mentor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Linkedin className="h-4 w-4" />
                        Ver LinkedIn
                      </a>
                    </Button>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </section>
    </>
  )
}
