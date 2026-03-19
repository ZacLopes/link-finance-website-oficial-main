import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface PageHeaderProps {
  title: string
  description: string
  showCtaButton?: boolean // Nova prop
  ctaLink?: string // Nova prop
}

export default function PageHeader({ title, description, showCtaButton, ctaLink }: PageHeaderProps) {
  return (
    <div className="bg-black py-12 text-white md:py-16 relative">
      <div className="container">
        <div className="mb-6">
          <Image
            src="/images/logo-link-finance.png"
            alt="Link Finance"
            width={300}
            height={60}
            className="h-8 w-auto"
          />
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-lg text-white/90 md:text-xl">{description}</p>
        {showCtaButton && ctaLink && (
          <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 hidden md:block">
            <Button asChild size="lg" className="bg-primary text-black hover:bg-primary/90">
              <Link href={ctaLink} target="_blank" rel="noopener noreferrer">
                Inscreva-se Agora <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
