interface EventStructuredDataProps {
  events: Array<{
    id: string
    title: string
    excerpt: string
    date: string
    event_date?: string
    category: string
    tags?: string[] | string | null
    image?: string
  }>
}

export default function EventStructuredData({ events }: EventStructuredDataProps) {
  const formatDateToISO = (dateString: string | null | undefined): string => {
    if (!dateString) return new Date().toISOString().split("T")[0]

    // If it's already in ISO format (YYYY-MM-DD), return it
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
      return dateString
    }

    // Try to parse and convert to ISO format
    try {
      const date = new Date(dateString)
      if (!isNaN(date.getTime())) {
        return date.toISOString().split("T")[0]
      }
    } catch (e) {
      console.error("[v0] Error parsing date:", e)
    }

    return new Date().toISOString().split("T")[0]
  }

  const eventsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Link Finance - Eventos e Projetos",
    description: "Lista de eventos e projetos da Liga de Mercado Financeiro",
    itemListElement: events.map((event, index) => {
      const eventTags = Array.isArray(event.tags)
        ? event.tags
        : typeof event.tags === "string"
          ? event.tags.split(",").map((tag) => tag.trim())
          : []

      return {
        "@type": "Event",
        position: index + 1,
        name: event.title,
        description: event.excerpt,
        startDate: formatDateToISO(event.event_date || event.date),
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        organizer: {
          "@type": "Organization",
          name: "Link Finance",
          url: "https://linksbfinance.com",
        },
        location: {
          "@type": "Place",
          name: "São Paulo",
          address: {
            "@type": "PostalAddress",
            addressLocality: "São Paulo",
            addressRegion: "SP",
            addressCountry: "BR",
          },
        },
        keywords: eventTags.join(", "),
        category: event.category,
        ...(event.image && {
          image: `https://linksbfinance.com${event.image}`,
        }),
      }
    }),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsJsonLd) }} />
}
