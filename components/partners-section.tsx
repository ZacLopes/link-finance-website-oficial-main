"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import OptimizedImage from "@/components/optimized-image"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function PartnersSection() {
  const partnerLogos = [
    { name: "Wall Street Prep", logo: "/images/partners/wall-street-prep-horizontal.png" },
    { name: "Fortezza Partners", logo: "/images/partners/fortezza-partners.png" },
    { name: "Equus Capital", logo: "/images/partners/equus-capital.png" },
    { name: "FM/Derraik", logo: "/images/partners/fm-derraik-horizontal.png" },
    { name: "Confrapar", logo: "/images/partners/confrapar.png" },
    { name: "Astella", logo: "/images/partners/astella-horizontal.png" },
    { name: "Advisia", logo: "/images/partners/advisia.png" },
  ]

  const hasEnoughSlidesForLoop = partnerLogos.length >= 8

  return (
    <section className="bg-muted py-12 md:py-16 lg:py-24" aria-labelledby="partners-heading">
      <div className="container">
        <header className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <h2 id="partners-heading" className="text-2xl font-bold tracking-tighter sm:text-3xl lg:text-4xl">
            Partners
          </h2>
          <Button asChild variant="secondary" size="sm" className="sm:size-default">
            <Link href="/partners" prefetch={false}>
              Ver Todos <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </header>
        <div className="mt-8 lg:mt-12">
          <div className="block sm:hidden">
            <div className="grid grid-cols-2 gap-4">
              {partnerLogos.slice(0, 4).map((partner, index) => (
                <div
                  key={`mobile-partner-${index}`}
                  className="flex items-center justify-center rounded-lg bg-white p-8 shadow-sm h-24 min-h-[96px]"
                >
                  <OptimizedImage
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} - Parceiro Link Finance`}
                    width={80}
                    height={40}
                    className={`max-w-full w-auto object-contain opacity-70 mx-auto block ${
                      partner.name === "Equus Capital" ? "max-h-10" : "max-h-8"
                    }`}
                    quality={75}
                    sizes="80px"
                    loading="lazy"
                    onError={(e) => {
                      console.log(`[v0] Failed to load partner logo: ${partner.logo}`)
                      e.currentTarget.src = "/placeholder.svg"
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="hidden sm:block">
            <div className="pb-8">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={16}
                slidesPerView={4}
                navigation={{
                  nextEl: ".swiper-button-next-custom",
                  prevEl: ".swiper-button-prev-custom",
                }}
                pagination={{
                  clickable: true,
                  bulletClass: "swiper-pagination-bullet !bg-gray-300 !w-2 !h-2",
                  bulletActiveClass: "swiper-pagination-bullet-active !bg-primary",
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop={hasEnoughSlidesForLoop}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                  },
                }}
                className="partners-swiper"
              >
                {partnerLogos.map((partner, index) => (
                  <SwiperSlide key={`swiper-partner-${index}`}>
                    <div className="flex items-center justify-center rounded-lg bg-white p-6 shadow-sm h-24 lg:h-28 min-h-[96px] lg:min-h-[112px]">
                      <OptimizedImage
                        src={partner.logo || "/placeholder.svg"}
                        alt={`${partner.name} - Parceiro Link Finance`}
                        width={120}
                        height={60}
                        className={`max-w-full w-auto object-contain opacity-70 transition-opacity hover:opacity-100 mx-auto block ${
                          partner.name === "Astella" || partner.name === "Equus Capital"
                            ? "max-h-12 lg:max-h-14"
                            : "max-h-8 lg:max-h-10"
                        }`}
                        quality={75}
                        sizes="(max-width: 1024px) 120px, 160px"
                        loading="lazy"
                        onError={(e) => {
                          console.log(`[v0] Failed to load partner logo: ${partner.logo}`)
                          e.currentTarget.src = "/placeholder.svg"
                        }}
                      />
                    </div>
                  </SwiperSlide>
                ))}

                <div className="swiper-button-prev-custom absolute -left-8 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-md cursor-pointer transition-colors lg:-left-12">
                  <ChevronRight className="h-4 w-4 rotate-180" />
                </div>
                <div className="swiper-button-next-custom absolute -right-8 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-md cursor-pointer transition-colors lg:-right-12">
                  <ChevronRight className="h-4 w-4" />
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .partners-swiper .swiper-pagination {
          position: relative !important;
          bottom: auto !important;
          margin-top: 16px !important;
        }
      `}</style>
    </section>
  )
}
