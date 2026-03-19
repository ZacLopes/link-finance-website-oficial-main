import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: ["/", "/_next/image/", "/_next/static/", "/images/"],
        disallow: ["/api/", "/admin/", "/private/", "/_next/webpack-hmr", "/_next/data/", "/_next/server/"],
        crawlDelay: 0,
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/", "/_next/image/", "/_next/static/", "/favicon-linkfinance.png", "/favicon.ico", "/images/"],
        disallow: ["/api/", "/admin/", "/private/", "/_next/webpack-hmr", "/_next/data/", "/_next/server/"],
        crawlDelay: 0,
      },
      {
        userAgent: "Googlebot-News",
        allow: ["/", "/eventos/", "/projetos/"],
        disallow: ["/api/", "/admin/", "/private/"],
        crawlDelay: 0,
      },
      {
        userAgent: "Bingbot",
        allow: ["/", "/_next/image/", "/_next/static/", "/images/"],
        disallow: ["/api/", "/admin/", "/private/", "/_next/webpack-hmr", "/_next/data/", "/_next/server/"],
        crawlDelay: 1,
      },
      {
        userAgent: "*",
        allow: ["/", "/_next/image/", "/_next/static/"],
        disallow: [
          "/api/",
          "/admin/",
          "/private/",
          "/*.json$",
          "/scripts/",
          "/_next/webpack-hmr",
          "/_next/data/",
          "/_next/server/",
        ],
        crawlDelay: 1,
      },
    ],
    host: "https://linksbfinance.com",
    sitemap: "https://linksbfinance.com/sitemap.xml",
  }
}
