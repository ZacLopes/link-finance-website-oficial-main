"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import MentorCard from "@/components/mentor-card"
import { mentorsData } from "@/lib/mentors-data"

export default function MentorsSection() {
  return (
    <section className="py-8 md:py-12 lg:py-16 lazy-load" aria-labelledby="mentores-heading">
      <div className="container">
        <header className="flex flex-col items-center justify-between gap-3 sm:flex-row sm:gap-4">
          <h2 id="mentores-heading" className="text-xl font-bold tracking-tighter sm:text-2xl lg:text-3xl">
            Nossos Mentores
          </h2>
          <Button asChild variant="outline" size="sm">
            <Link href="/mentores">
              Ver Todos <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </header>
        <div className="mt-6 grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:mt-8">
          {mentorsData.slice(0, 4).map((mentor, index) => (
            <MentorCard
              key={`mentor-${index}`}
              name={mentor.name}
              role={mentor.role}
              company={mentor.company}
              image={mentor.image}
              bio={mentor.bio}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
