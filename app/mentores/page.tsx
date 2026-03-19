import type { Metadata } from "next"
import MentoresClientPage from "./MentoresClientPage"

export const metadata: Metadata = {
  title: "Mentores | Link Finance",
  description: "Conheça os mentores da Link Finance, a liga de mercado financeiro da Link School of Business",
  alternates: {
    canonical: "https://linksbfinance.com/mentores",
  },
  openGraph: {
    title: "Mentores | Link Finance",
    description:
      "Conheça os mentores da Link Finance, profissionais experientes do mercado financeiro que orientam nossos membros",
    url: "https://linksbfinance.com/mentores",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentores | Link Finance",
    description:
      "Conheça os mentores da Link Finance, profissionais experientes do mercado financeiro que orientam nossos membros",
  },
}

export default function MentoresPage() {
  return <MentoresClientPage />
}
