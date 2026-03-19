"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"

export default function UTMTracker() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const utmSource = searchParams.get("utm_source")
    const utmMedium = searchParams.get("utm_medium")
    const utmCampaign = searchParams.get("utm_campaign")
    const utmContent = searchParams.get("utm_content")

    // Track ChatGPT referrals specifically
    if (utmSource === "chatgpt") {
      // Send event to Google Analytics if available
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

      // Store in localStorage for further tracking
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

      console.log("[v0] ChatGPT referral detected:", {
        source: utmSource,
        medium: utmMedium,
        campaign: utmCampaign,
        content: utmContent,
      })
    }

    // Track any UTM parameters
    if (utmSource || utmMedium || utmCampaign) {
      // Send to Vercel Analytics
      if (typeof window !== "undefined" && (window as any).va) {
        ;(window as any).va("track", "UTM Referral", {
          utm_source: utmSource,
          utm_medium: utmMedium,
          utm_campaign: utmCampaign,
          utm_content: utmContent,
        })
      }
    }
  }, [searchParams])

  return null // This component doesn't render anything
}
