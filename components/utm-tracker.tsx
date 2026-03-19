"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"

export default function UTMTracker() {
  const searchParams = useSearchParams()

  useEffect(() => {
    try {
      const utmSource = searchParams.get("utm_source")
      const utmMedium = searchParams.get("utm_medium")
      const utmCampaign = searchParams.get("utm_campaign")
      const utmContent = searchParams.get("utm_content")

      // Track ChatGPT referrals specifically
      if (utmSource === "chatgpt") {
        if (typeof window !== "undefined" && (window as any).gtag) {
          ;(window as any).gtag("event", "chatgpt_referral", {
            event_category: "referral",
            event_label: utmCampaign || "chatgpt_referral",
            utm_source: utmSource,
            utm_medium: utmMedium,
            utm_campaign: utmCampaign,
            utm_content: utmContent,
          })
        }

        if (typeof window !== "undefined" && "localStorage" in window) {
          localStorage.setItem(
            "referral_source",
            JSON.stringify({
              source: utmSource,
              medium: utmMedium,
              campaign: utmCampaign,
              content: utmContent,
              timestamp: new Date().toISOString(),
            }),
          )
        }
      }

      if (utmSource || utmMedium || utmCampaign) {
        if (typeof window !== "undefined" && (window as any).va) {
          ;(window as any).va("track", "UTM Referral", {
            utm_source: utmSource,
            utm_medium: utmMedium,
            utm_campaign: utmCampaign,
            utm_content: utmContent,
          })
        }
      }
    } catch (error) {
      console.error("Falha ao processar parâmetros UTM:", error)
    }
  }, [searchParams])

  return null // This component doesn't render anything
}
