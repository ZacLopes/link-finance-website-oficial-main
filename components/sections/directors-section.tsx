"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import OptimizedImage from "@/components/optimized-image"
import { membersData } from "@/lib/members-data"

export default function DirectorsSection() {
  const featuredMembers = membersData.filter((member) => member.team === "Diretoria").slice(0, 4)

  return (
    <section className="py-8 md:py-12 lg:py-16 lazy-load" aria-labelledby="diretoria-heading">
      <div className="container">
        <header className="flex flex-col items-center justify-between gap-3 sm:flex-row sm:gap-4">
          <h2
            id="diretoria-heading"
            className="text-xl font-bold tracking-tighter sm:text-2xl lg:text-3xl text-foreground"
          >
            Nossa Diretoria
          </h2>
          <Button asChild variant="secondary" size="sm">
            <Link href="/membros">
              Ver Todos <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </header>
        <div className="mt-6 flex justify-center lg:mt-8">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl">
            {featuredMembers.map((member, index) => (
              <article
                key={`member-${member.id}-${index}`}
                className="flex flex-col items-center gap-4 rounded-lg border bg-white p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-32 w-32 overflow-hidden rounded-full sm:h-36 sm:w-36 lg:h-40 lg:w-40 mx-auto">
                  <OptimizedImage
                    src={member.image || "/placeholder.svg"}
                    alt={`${member.name} - ${member.role} da Link Finance`}
                    width={160}
                    height={160}
                    className="h-full w-full object-cover lazy-load"
                    style={{
                      objectPosition:
                        member.name === "Julia Delmondes" || member.name === "Zac Kouri" ? "center 15%" : "center 25%",
                    }}
                    quality={80}
                    sizes="(max-width: 640px) 128px, (max-width: 1024px) 144px, 160px"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
