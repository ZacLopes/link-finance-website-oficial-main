import Image from "next/image"
import { Card, CardFooter, CardHeader } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

interface MemberCardProps {
  name: string
  role: string
  team?: string
  image: string
  course?: string
  semester?: string
  linkedin?: string
  email?: string
  bio?: string
  variant?: "default" | "compact"
}

export default function MemberCard({
  name,
  role,
  team,
  image,
  course,
  semester,
  linkedin,
  email,
  bio,
  variant = "default",
}: MemberCardProps) {
  const isCompact = variant === "compact"
  const isAlumni = team === "Alumni"

  // Posicionamento específico para Julia Delmondes e Zac Kouri
  const getObjectPosition = () => {
    if (name === "Julia Delmondes" || name === "Zac Kouri") {
      return "center 15%"
    }
    return "center 25%"
  }

  // Design especial para Alumni
  if (isAlumni) {
    return (
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-md p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-bold leading-tight flex-1 text-gray-600">{name}</h3>
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors ml-4"
              aria-label={`LinkedIn de ${name}`}
            >
              <Linkedin className="h-6 w-6" />
            </a>
          )}
        </div>
        <div className="border-t border-gray-200 pt-4">
          <p className="text-primary font-medium">Alumni</p>
        </div>
      </Card>
    )
  }

  return (
    <Card
      className={cn(
        "overflow-hidden h-full transition-all duration-300 hover:shadow-md",
        isCompact ? "flex flex-row items-center" : "",
      )}
      data-member-name={name}
      data-member-role={role}
      data-member-team={team}
    >
      <div
        className={cn("overflow-hidden", isCompact ? "w-20 h-20 flex-shrink-0" : "h-40 w-40 mx-auto mt-4 rounded-full")}
      >
        <Image
          src={image || "/placeholder.svg"}
          alt={`Foto de ${name}, ${role} da Link Finance`}
          width={isCompact ? 80 : 200}
          height={isCompact ? 80 : 200}
          className={cn("h-full w-full object-cover", isCompact ? "object-center" : "")}
          style={!isCompact ? { objectPosition: getObjectPosition() } : undefined}
          quality={80}
          sizes={
            isCompact ? "80px" : "(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 200px"
          }
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="flex flex-col">
        <CardHeader className={cn("p-3 pb-0", isCompact && "py-1", !isCompact && "text-center")}>
          <h3 className={cn("font-bold leading-tight member-name", isCompact ? "text-base" : "text-lg")}>{name}</h3>
          <p
            className={cn("text-primary text-sm font-medium member-role", team === "Diretoria Executiva" && "-mt-2.5")}
          >
            {role}
          </p>
        </CardHeader>

        <CardFooter className={cn("p-3 pt-0 flex gap-3", isCompact && "py-1", !isCompact && "justify-center")}>
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary"
              aria-label={`LinkedIn de ${name}`}
            >
              <Linkedin className="h-3 w-3" />
              {!isCompact && <span>LinkedIn</span>}
            </a>
          )}

          {email && (
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary"
              aria-label={`Email de ${name}`}
            >
              <Mail className="h-3 w-3" />
              {!isCompact && <span>Email</span>}
            </a>
          )}
        </CardFooter>
      </div>
    </Card>
  )
}
