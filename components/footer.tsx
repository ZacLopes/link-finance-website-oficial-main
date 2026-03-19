import Link from "next/link"
import { Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container" style={{ paddingTop: "1cm" }}>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo-link-finance.png"
                alt="Link Finance"
                width={200}
                height={40}
                className="h-6 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-white/80">Liga de Mercado Financeiro da Link School of Business</p>
            <div className="mt-4 flex gap-4">
              <Link href="https://instagram.com/linksbfinance" target="_blank" rel="noopener noreferrer" scroll={false}>
                <Instagram className="h-5 w-5 text-white/60 transition-colors hover:text-primary" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://linkedin.com/company/linksbfinance"
                target="_blank"
                rel="noopener noreferrer"
                scroll={false}
              >
                <Linkedin className="h-5 w-5 text-white/60 transition-colors hover:text-primary" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium text-white">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sobre" className="text-white/80 transition-colors hover:text-primary">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/mentores" className="text-white/80 transition-colors hover:text-primary">
                  Mentores
                </Link>
              </li>
              <li>
                <Link href="/projetos" className="text-white/80 transition-colors hover:text-primary">
                  Projetos
                </Link>
              </li>
              <li>
                <Link href="/finance-day" className="text-white/80 transition-colors hover:text-primary">
                  Finance Day
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-white/80 transition-colors hover:text-primary">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/processo-seletivo" className="text-white/80 transition-colors hover:text-primary">
                  Processo Seletivo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium text-white">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:gabriel.matsumoto@aluno.lsb.com.br"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  gabriel.matsumoto@aluno.lsb.com.br
                </a>
              </li>
              <li className="text-white/80">
                <a
                  href="https://maps.google.com/?q=Brigadeiro+Luis+Antonio+5083,+São+Paulo,+SP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Link School of Business
                  <br />
                  Brigadeiro Luis Antonio 5083
                  <br />
                  São Paulo, SP
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Link Finance. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
