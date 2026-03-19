"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const categories = [
  { value: "todos", label: "Todos" },
  { value: "diretoria", label: "Diretoria" },
  { value: "analistas", label: "Analistas" },
  { value: "trainee", label: "Trainee" },
  { value: "alumni", label: "Alumni" },
]

export default function MemberNavigation() {
  const pathname = usePathname()
  const currentCategory = pathname.split("/").pop() || "todos"

  return (
    <nav className="mb-8">
      <div className="flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground w-full max-w-full sm:w-[800px] mx-auto">
        {categories.map((category) => (
          <Link
            key={category.value}
            href={`/membros/${category.value}`}
            className={cn(
              "inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
              currentCategory === category.value ? "bg-background text-foreground shadow-sm" : "hover:bg-background/50",
            )}
          >
            {category.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
