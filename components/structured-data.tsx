interface StructuredDataProps {
  type: "Organization" | "Article" | "Event" | "Person"
  data: any
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const generateSchema = () => {
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": type,
      ...data,
    }

    if (type === "Organization") {
      return {
        ...baseSchema,
        name: "Link Finance",
        url: "https://www.linksbfinance.com",
        logo: "https://www.linksbfinance.com/images/logo-512x512.png",
        description: "Liga de Mercado Financeiro da Link School of Business",
        foundingDate: "2024",
        address: {
          "@type": "PostalAddress",
          addressCountry: "BR",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          availableLanguage: "Portuguese",
        },
        sameAs: ["https://www.linkedin.com/company/link-finance", "https://www.instagram.com/linkfinance"],
      }
    }

    return baseSchema
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateSchema()),
      }}
    />
  )
}
