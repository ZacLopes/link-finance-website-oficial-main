"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"

const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/sobre",
    label: "Sobre",
  },
  {
    href: "/membros",
    label: "Membros",
  },
  {
    href: "/mentores",
    label: "Mentores",
  },
  {
    href: "/projetos",
    label: "Projetos",
  },
  {
    href: "/finance-day",
    label: "Finance Day",
  },
  {
    href: "/partners",
    label: "Partners",
  },
  {
    href: "/processo-seletivo",
    label: "Processo Seletivo",
  },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black text-white">
      <div className="container flex h-14 items-center justify-between sm:h-16">
        <Link href="/" className="flex items-center gap-2" aria-label="Link Finance - Página Inicial">
          <Image
            src="/images/logo-link-finance-horizontal.webp"
            alt="Link Finance - Liga de Mercado Financeiro"
            width={200}
            height={50}
            className="h-6 w-auto sm:h-8"
            priority
            quality={95}
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 640px) 150px, 200px"
            style={{
              maxWidth: "200px",
              height: "auto",
              objectFit: "contain",
            }}
            onError={(e) => {
              console.log("[v0] Logo failed to load, using fallback")
              const target = e.target as HTMLImageElement
              target.style.display = "none"
              const fallback = target.nextElementSibling as HTMLElement
              if (fallback) fallback.style.display = "block"
            }}
          />
          <span className="font-bold text-lg text-white hidden" style={{ display: "none" }}>
            Link Finance
          </span>
        </Link>

        <nav className="hidden lg:flex lg:items-center lg:gap-6" role="navigation" aria-label="Menu principal">
          <ul className="flex items-center gap-6">
            {routes.map((route) => (
              <li key={route.href}>
                <Link
                  href={route.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === route.href ? "text-primary" : "text-white/80",
                  )}
                  aria-current={pathname === route.href ? "page" : undefined}
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="outline"
              size="icon"
              className="border-gray-600 bg-transparent text-white hover:bg-gray-800 h-9 w-9 sm:h-10 sm:w-10"
              aria-label="Abrir menu de navegação"
            >
              <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[350px]">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setIsOpen(false)}
              aria-label="Link Finance - Página Inicial"
            >
              <Image
                src="/images/logo-link-finance-horizontal.webp"
                alt="Link Finance"
                width={120}
                height={30}
                className="h-5 w-auto"
                quality={90}
                sizes="120px"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = "none"
                  const fallback = target.nextElementSibling as HTMLElement
                  if (fallback) fallback.style.display = "inline"
                }}
              />
              <span className="font-bold hidden">Link Finance</span>
            </Link>
            <nav className="mt-8 flex flex-col gap-4" role="navigation" aria-label="Menu mobile">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary py-2",
                    pathname === route.href ? "text-primary" : "text-muted-foreground",
                  )}
                  aria-current={pathname === route.href ? "page" : undefined}
                >
                  {route.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
