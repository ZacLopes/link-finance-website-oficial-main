import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Link Finance - Liga de Mercado Financeiro",
    short_name: "Link Finance",
    description: "Liga de Mercado Financeiro da Link School of Business",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#F59E0B",
    icons: [
      {
        src: "/images/favicon-linkfinance.png",
        sizes: "96x96",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
        purpose: "any",
      },
      {
        src: "/images/favicon-linkfinance.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/favicon-linkfinance.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  }
}
