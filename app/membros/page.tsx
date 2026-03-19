import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Membros | Link Finance",
  description: "Conheça todos os membros da Link Finance organizados por categoria.",
  alternates: {
    canonical: "https://linksbfinance.com/membros/todos",
  },
}

export default async function MembrosPage() {
  redirect("/membros/todos")
}
