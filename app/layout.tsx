import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils"
import UTMTracker from "@/components/utm-tracker"
import ErrorBoundary from "@/components/error-boundary"
import NavbarLoading from "@/components/loading/navbar-loading"
import PageLoading from "@/components/loading/page-loading"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Link Finance",
  description:
    "Link Finance – Liga de Mercado Financeiro da Link School of Business. Capacitações exclusivas com Wall Street Prep, projetos em Venture Capital, Private Equity e Investment Banking, eventos com líderes do mercado e mentoria especializada.",
  generator: "v0.dev",
  metadataBase: new URL("https://linksbfinance.com"),

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: 'google-site-verification-code', // User should replace with actual code
  },

  icons: {
    icon: [
      { url: "/images/favicon-linkfinance.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/images/favicon-linkfinance.png", sizes: "96x96", type: "image/png" }],
    shortcut: "/images/favicon-linkfinance.png",
    other: [
      {
        rel: "mask-icon",
        url: "/images/favicon-linkfinance.png",
        color: "#1a365d",
      },
    ],
  },

  openGraph: {
    type: "website",
    url: "https://linksbfinance.com",
    title: "Link Finance",
    description:
      "Link Finance – Liga de Mercado Financeiro da Link School of Business. Capacitações exclusivas com Wall Street Prep, projetos em Venture Capital, Private Equity e Investment Banking, eventos com líderes do mercado e mentoria especializada.",
    siteName: "Link Finance",
    locale: "pt_BR",
    images: [
      {
        url: "https://linksbfinance.com/images/favicon-linkfinance.png",
        width: 96,
        height: 96,
        alt: "Link Finance - Liga de Mercado Financeiro",
      },
      {
        url: "https://linksbfinance.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Link Finance - Liga de Mercado Financeiro",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Link Finance",
    description:
      "Link Finance – Liga de Mercado Financeiro da Link School of Business. Capacitações exclusivas com Wall Street Prep, projetos em Venture Capital, Private Equity e Investment Banking, eventos com líderes do mercado e mentoria especializada.",
    images: ["https://linksbfinance.com/images/og-image.jpg"],
    creator: "@linkfinance",
  },

  manifest: "/manifest.webmanifest",

  keywords: [
    "Link Finance",
    "Liga de Mercado Financeiro",
    "Link School of Business",
    "Wall Street Prep",
    "Venture Capital",
    "Private Equity",
    "Investment Banking",
    "Mercado Financeiro",
    "Capacitação Financeira",
    "Mentoria Financeira",
    "Eventos Financeiros",
    "Projetos Financeiros",
    "Educação Financeira",
    "Finanças Corporativas",
  ],

  alternates: {
    canonical: "https://linksbfinance.com",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "EducationalOrganization"],
      "@id": "https://linksbfinance.com/#organization",
      name: "Link Finance",
      alternateName: "Liga de Mercado Financeiro da Link School of Business",
      url: "https://linksbfinance.com",
      logo: {
        "@type": "ImageObject",
        "@id": "https://linksbfinance.com/#logo",
        url: "https://linksbfinance.com/images/favicon-linkfinance.png",
        width: 96,
        height: 96,
        caption: "Link Finance Logo",
      },
      image: {
        "@type": "ImageObject",
        "@id": "https://linksbfinance.com/#image",
        url: "https://linksbfinance.com/images/favicon-linkfinance.png",
        width: 96,
        height: 96,
      },
      description:
        "Link Finance – Liga de Mercado Financeiro da Link School of Business. Capacitações exclusivas com Wall Street Prep, projetos em Venture Capital, Private Equity e Investment Banking, eventos com líderes do mercado e mentoria especializada.",
      foundingDate: "2024",
      address: {
        "@type": "PostalAddress",
        addressLocality: "São Paulo",
        addressRegion: "SP",
        addressCountry: "BR",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: ["Portuguese", "pt-BR"],
      },
      sameAs: [
        "https://linksbfinance.com",
        "https://www.linksbfinance.com",
        "https://www.linkedin.com/company/link-finance",
        "https://www.instagram.com/linkfinance",
      ],
      brand: {
        "@type": "Brand",
        name: "Link Finance",
        logo: "https://linksbfinance.com/images/favicon-linkfinance.png",
      },
      parentOrganization: {
        "@type": "EducationalOrganization",
        name: "Link School of Business",
      },
      keywords:
        "Link Finance, Liga de Mercado Financeiro, Wall Street Prep, Venture Capital, Private Equity, Investment Banking, Mercado Financeiro, Capacitação Financeira",
      knowsAbout: [
        "Investment Banking",
        "Venture Capital",
        "Private Equity",
        "Financial Markets",
        "Wall Street Prep",
        "Financial Education",
      ],
      areaServed: {
        "@type": "Country",
        name: "Brazil",
      },
      serviceType: "Financial Education",
    },
    {
      "@type": "WebSite",
      "@id": "https://linksbfinance.com/#website",
      url: "https://linksbfinance.com",
      name: "Link Finance",
      description: "Liga de Mercado Financeiro da Link School of Business",
      publisher: {
        "@id": "https://linksbfinance.com/#organization",
      },
      inLanguage: "pt-BR",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://linksbfinance.com/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            /* Critical CSS para hero section - elimina render blocking */
            .hero-section{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#000;color:#fff}
            .hero-logo{max-width:360px;height:3rem;margin-top:-3rem}
            @media(min-width:768px){.hero-logo{height:4rem;margin-top:-2rem}}
            /* Preload de fontes críticas */
            body{font-family:system-ui,-apple-system,sans-serif}
            /* Enhanced loading animations */
            .loading-shimmer{background:linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent);animation:shimmer 1.5s infinite}
            @keyframes shimmer{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}
          `,
          }}
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://vercel.live" />
        <link rel="preconnect" href="https://vitals.vercel-analytics.com" />
        <link rel="dns-prefetch" href="https://linksbfinance.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        <link rel="preload" as="image" href="/images/logo-link-finance.png" fetchPriority="high" />
        <link rel="preload" as="image" href="/images/favicon-linkfinance.png" fetchPriority="high" />

        <link rel="prefetch" as="image" href="/images/logo-link-finance-horizontal.webp" />

        <meta name="format-detection" content="telephone=no" />
        <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" />

        <meta name="geo.region" content="BR-SP" />
        <meta name="geo.placename" content="São Paulo" />
        <meta name="geo.position" content="-23.5505;-46.6333" />
        <meta name="ICBM" content="-23.5505, -46.6333" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: document.title,
                page_location: window.location.href,
                send_page_view: false
              });
              // Defer page view para não bloquear rendering
              setTimeout(() => gtag('event', 'page_view'), 100);
            `,
          }}
        />

        <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon-linkfinance.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="96x96" href="/images/favicon-linkfinance.png" />

        <meta name="theme-color" content="#1a365d" />
        <meta name="msapplication-TileColor" content="#1a365d" />
      </head>
      <body className={cn("font-sans")}>
        <h1 className="sr-only">Link Finance - Liga de Mercado Financeiro da Link School of Business</h1>

        <ErrorBoundary fallback={<NavbarLoading />}>
          <Suspense fallback={<NavbarLoading />}>
            <Navbar />
          </Suspense>
        </ErrorBoundary>

        <main className="mb-10">
          <ErrorBoundary>
            <Suspense fallback={<PageLoading message="Carregando página..." showProgress={true} />}>
              <UTMTracker />
              {children}
            </Suspense>
          </ErrorBoundary>
        </main>

        <Footer />
        <Toaster />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
