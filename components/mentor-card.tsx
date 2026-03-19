import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Linkedin } from "lucide-react"

interface MentorCardProps {
  name: string
  role: string
  company: string
  image: string
  bio?: string
  linkedin?: string
}

export default function MentorCard({ name, role, company, image, bio, linkedin }: MentorCardProps) {
  return (
    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
      <div className="aspect-square overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={`Foto de ${name}, ${role} na ${company}`}
          width={250}
          height={250}
          className="h-full w-full object-cover"
          loading="lazy"
          quality={80} // Adicionado para otimização
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 250px" // Refinado para responsividade
        />
      </div>
      <CardHeader className="p-3 pb-0 sm:p-4 sm:pb-0">
        <h3 className="text-base font-bold leading-tight sm:text-lg">{name}</h3>
        <p className="text-primary text-xs sm:text-sm">{role}</p>
        <p className="text-xs text-muted-foreground">{company}</p>
      </CardHeader>
      {bio && (
        <CardContent className="p-3 pt-2 sm:p-4 sm:pt-2">
          <p className="text-xs text-muted-foreground line-clamp-3 sm:text-sm">{bio}</p>
        </CardContent>
      )}
      <CardFooter className="p-3 pt-0 sm:p-4 sm:pt-0">
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-primary sm:text-sm"
          >
            <Linkedin className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>LinkedIn</span>
          </a>
        )}
      </CardFooter>
    </Card>
  )
}
