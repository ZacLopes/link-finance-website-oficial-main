import type { Metadata } from "next"
import { Calendar, MapPin, Users } from "lucide-react"
import BreadcrumbSchema from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Finance Day 2025 | Link Finance",
  description:
    "O maior evento de mercado financeiro da Link Finance. Palestras com especialistas do mercado, workshops práticos e networking. Inscreva-se agora!",
  keywords:
    "Finance Day, Link Finance, evento mercado financeiro, palestras financeiras, networking financeiro, São Paulo, investment banking, private equity",
  openGraph: {
    title: "Finance Day 2025 - O Maior Evento de Mercado Financeiro",
    description:
      "Participe do Finance Day 2025 com palestras de especialistas, workshops práticos e networking exclusivo. Evento presencial em São Paulo.",
    url: "https://linksbfinance.com/finance-day",
    type: "website",
    images: [
      {
        url: "https://linksbfinance.com/images/hub-norte-cacheado.jpeg",
        width: 1200,
        height: 630,
        alt: "Finance Day 2025 - Link Finance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Finance Day 2025 | Link Finance",
    description:
      "O maior evento de mercado financeiro da Link Finance. Inscreva-se agora para palestras com especialistas e networking exclusivo.",
    images: ["https://linksbfinance.com/images/hub-norte-cacheado.jpeg"],
  },
  alternates: {
    canonical: "https://linksbfinance.com/finance-day",
  },
}

export default function FinanceDayPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://linksbfinance.com" },
    { name: "Finance Day", url: "https://linksbfinance.com/finance-day" },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('/images/hub-norte-cacheado.jpeg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        <div className="container relative z-10 px-4 py-20 mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30">
            <span className="text-yellow-400 font-semibold text-sm tracking-wide">EVENTO ANUAL 2025</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            Finance Day
            <span className="block text-yellow-400 mt-2">2025</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            O maior evento de mercado financeiro da Link Finance. Palestras com especialistas, workshops práticos e
            networking exclusivo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-white">
              <Calendar className="h-5 w-5 text-yellow-400" />
              <span className="font-medium">6 de Dezembro, Sábado</span>
            </div>
            <div className="hidden sm:block h-6 w-px bg-gray-600" />
            <div className="flex items-center gap-2 text-white">
              <MapPin className="h-5 w-5 text-yellow-400" />
              <span className="font-medium">Link School, São Paulo</span>
            </div>
            <div className="hidden sm:block h-6 w-px bg-gray-600" />
            <div className="flex items-center gap-2 text-white">
              <Users className="h-5 w-5 text-yellow-400" />
              <span className="font-medium">Presencial</span>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-[600px] mx-auto">
              <iframe
                src="https://luma.com/embed/event/evt-cGG2mYE7kFTL8XE/simple"
                width="100%"
                height="450"
                frameBorder="0"
                className="border border-gray-300/50 rounded-lg shadow-xl"
                allow="fullscreen; payment"
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: "Finance Day 2025",
            description:
              "O maior evento de mercado financeiro da Link Finance com palestras, workshops e networking exclusivo.",
            startDate: "2025-12-06T09:00:00-03:00",
            endDate: "2025-12-06T18:00:00-03:00",
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
            location: {
              "@type": "Place",
              name: "Link School of Business",
              address: {
                "@type": "PostalAddress",
                addressLocality: "São Paulo",
                addressRegion: "SP",
                addressCountry: "BR",
              },
            },
            image: ["https://linksbfinance.com/images/hub-norte-cacheado.jpeg"],
            organizer: {
              "@type": "Organization",
              name: "Link Finance",
              url: "https://linksbfinance.com",
            },
            offers: {
              "@type": "Offer",
              url: "https://luma.com/event/evt-cGG2mYE7kFTL8XE",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />
    </>
  )
}
