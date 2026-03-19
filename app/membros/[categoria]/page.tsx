import type { Metadata } from "next"
import { notFound } from 'next/navigation'
import PageHeader from "@/components/page-header"
import { getMembersByTeam } from "@/lib/members-data"
import MemberCard from "@/components/member-card"
import MemberNavigation from "@/components/member-navigation"
import BreadcrumbSchema from "@/components/breadcrumb-schema"

type Params = {
  categoria: string
}

type PageProps = {
  params: Promise<Params>
}

const validCategories = ["todos", "diretoria", "analistas", "trainee", "alumni"]

const categoryTitles = {
  todos: "Todos os Membros",
  diretoria: "Diretoria Executiva",
  analistas: "Analistas",
  trainee: "Trainee",
  alumni: "Alumni",
}

const categoryDescriptions = {
  todos: "Conheça todos os membros da Link Finance organizados por categoria.",
  diretoria: "Liderança estratégica responsável pela gestão e direcionamento da Link Finance",
  analistas:
    "Membros especializados em análise e pesquisa, contribuindo com expertise técnica nos projetos da Link Finance",
  trainee: "Novos membros em desenvolvimento, aprendendo e contribuindo com os projetos da Link Finance",
  alumni: "Ex-membros que seguem suas carreiras no mercado financeiro e mantêm conexão com a Link Finance",
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { categoria: categoriaParam } = await params
  const categoria = categoriaParam.toLowerCase()

  if (!validCategories.includes(categoria)) {
    return {
      title: "Página não encontrada | Link Finance",
    }
  }

  const title = `${categoryTitles[categoria as keyof typeof categoryTitles]} | Link Finance`
  const description = categoryDescriptions[categoria as keyof typeof categoryDescriptions]

  return {
    title,
    description,
    alternates: {
      canonical: `https://linksbfinance.com/membros/${categoria}`,
    },
    openGraph: {
      type: "website",
      url: `https://linksbfinance.com/membros/${categoria}`,
      title,
      description,
      siteName: "Link Finance",
      images: [
        {
          url: "https://linksbfinance.com/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://linksbfinance.com/images/og-image.jpg"],
    },
  }
}

export default async function CategoriaPage({ params }: PageProps) {
  const { categoria: categoriaParam } = await params
  const categoria = categoriaParam.toLowerCase()

  if (!validCategories.includes(categoria)) {
    notFound()
  }

  const membersByTeam = getMembersByTeam()
  const title = categoryTitles[categoria as keyof typeof categoryTitles]
  const description = categoryDescriptions[categoria as keyof typeof categoryDescriptions]

  const breadcrumbItems = [
    { name: "Início", url: "https://linksbfinance.com" },
    { name: "Membros", url: "https://linksbfinance.com/membros/todos" },
  ]

  if (categoria !== "todos") {
    breadcrumbItems.push({
      name: categoryTitles[categoria as keyof typeof categoryTitles],
      url: `https://linksbfinance.com/membros/${categoria}`,
    })
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: title,
    description: description,
    url: `https://linksbfinance.com/membros/${categoria}`,
    numberOfItems:
      categoria === "todos"
        ? Object.values(membersByTeam).flat().length
        : membersByTeam[(categoria.charAt(0).toUpperCase() + categoria.slice(1)) as keyof typeof membersByTeam]
            ?.length || 0,
    itemListElement:
      categoria === "todos"
        ? Object.values(membersByTeam)
            .flat()
            .map((member, index) => ({
              "@type": "Person",
              position: index + 1,
              name: member.name,
              jobTitle: member.role,
              worksFor: {
                "@type": "Organization",
                name: "Link Finance",
              },
              url: member.linkedin,
              description: member.bio,
            }))
        : (
            membersByTeam[(categoria.charAt(0).toUpperCase() + categoria.slice(1)) as keyof typeof membersByTeam] || []
          ).map((member, index) => ({
            "@type": "Person",
            position: index + 1,
            name: member.name,
            jobTitle: member.role,
            worksFor: {
              "@type": "Organization",
              name: "Link Finance",
            },
            url: member.linkedin,
            description: member.bio,
          })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <BreadcrumbSchema items={breadcrumbItems} />

      <PageHeader title={title} description={description} />

      <nav aria-label="Breadcrumb" className="container py-4">
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
          <li>
            <a href="/" className="hover:text-foreground transition-colors">
              Início
            </a>
          </li>
          <li>/</li>
          <li>
            <a href="/membros/todos" className="hover:text-foreground transition-colors">
              Membros
            </a>
          </li>
          {categoria !== "todos" && (
            <>
              <li>/</li>
              <li className="text-foreground font-medium" aria-current="page">
                {categoryTitles[categoria as keyof typeof categoryTitles]}
              </li>
            </>
          )}
        </ol>
      </nav>

      <main className="container py-12" style={{ marginTop: "1cm" }}>
        <div className="flex justify-center mb-8">
          <MemberNavigation />
        </div>

        {categoria === "todos" ? (
          <>
            <section className="mb-16" data-team="diretoria" aria-labelledby="diretoria-heading">
              <header className="mb-8 text-center">
                <h2 id="diretoria-heading" className="text-3xl font-bold mb-2">
                  Diretoria Executiva
                </h2>
                <p className="text-muted-foreground text-balance">
                  Liderança estratégica responsável pela gestão e direcionamento da Link Finance
                </p>
              </header>
              <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 list-none">
                {membersByTeam.Diretoria?.map((member) => (
                  <li
                    key={member.id}
                    data-member-name={member.name}
                    data-member-role={member.role}
                    data-member-team="Diretoria"
                  >
                    <MemberCard
                      name={member.name}
                      role={member.role}
                      team={member.team}
                      image={member.image}
                      course={member.course}
                      semester={member.semester}
                      linkedin={member.linkedin}
                      email={member.email}
                      bio={member.bio}
                    />
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-16" data-team="analistas" aria-labelledby="analistas-heading">
              <header className="mb-8 text-center">
                <h2 id="analistas-heading" className="text-3xl font-bold mb-2">
                  Analistas
                </h2>
                <p className="text-muted-foreground text-balance">
                  Membros especializados em análise e pesquisa, contribuindo com expertise técnica nos projetos da Link
                  Finance
                </p>
              </header>
              <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 list-none">
                {membersByTeam.Analistas?.map((member) => (
                  <li
                    key={member.id}
                    data-member-name={member.name}
                    data-member-role={member.role}
                    data-member-team="Analistas"
                  >
                    <MemberCard
                      name={member.name}
                      role={member.role}
                      team={member.team}
                      image={member.image}
                      course={member.course}
                      semester={member.semester}
                      linkedin={member.linkedin}
                      email={member.email}
                      bio={member.bio}
                    />
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-16" data-team="trainee" aria-labelledby="trainee-heading">
              <header className="mb-8 text-center">
                <h2 id="trainee-heading" className="text-3xl font-bold mb-2">
                  Trainee
                </h2>
                <p className="text-muted-foreground text-balance">
                  Novos membros em desenvolvimento, aprendendo e contribuindo com os projetos da Link Finance
                </p>
              </header>
              <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 list-none">
                {membersByTeam.Trainee?.map((member) => (
                  <li
                    key={member.id}
                    data-member-name={member.name}
                    data-member-role={member.role}
                    data-member-team="Trainee"
                  >
                    <MemberCard
                      name={member.name}
                      role={member.role}
                      team={member.team}
                      image={member.image}
                      course={member.course}
                      semester={member.semester}
                      linkedin={member.linkedin}
                      email={member.email}
                      bio={member.bio}
                    />
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-16" data-team="alumni" aria-labelledby="alumni-heading">
              <header className="mb-8 text-center">
                <h2 id="alumni-heading" className="text-3xl font-bold mb-2">
                  Alumni
                </h2>
                <p className="text-muted-foreground text-balance">
                  Ex-membros que seguem suas carreiras no mercado financeiro e mantêm conexão com a Link Finance
                </p>
              </header>
              <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 list-none">
                {membersByTeam.Alumni?.map((member) => (
                  <li
                    key={member.id}
                    data-member-name={member.name}
                    data-member-role={member.role}
                    data-member-team="Alumni"
                  >
                    <MemberCard
                      name={member.name}
                      role={member.role}
                      team={member.team}
                      image={member.image}
                      course={member.course}
                      semester={member.semester}
                      linkedin={member.linkedin}
                      email={member.email}
                      bio={member.bio}
                    />
                  </li>
                ))}
              </ul>
            </section>
          </>
        ) : (
          <>
            <section aria-labelledby="category-heading">
              <h2 id="category-heading" className="sr-only">
                {title}
              </h2>
              <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 list-none">
                {categoria === "diretoria" &&
                  membersByTeam.Diretoria?.map((member) => (
                    <li
                      key={member.id}
                      data-member-name={member.name}
                      data-member-role={member.role}
                      data-member-team="Diretoria"
                    >
                      <MemberCard
                        name={member.name}
                        role={member.role}
                        team={member.team}
                        image={member.image}
                        course={member.course}
                        semester={member.semester}
                        linkedin={member.linkedin}
                        email={member.email}
                        bio={member.bio}
                      />
                    </li>
                  ))}
                {categoria === "analistas" &&
                  membersByTeam.Analistas?.map((member) => (
                    <li
                      key={member.id}
                      data-member-name={member.name}
                      data-member-role={member.role}
                      data-member-team="Analistas"
                    >
                      <MemberCard
                        name={member.name}
                        role={member.role}
                        team={member.team}
                        image={member.image}
                        course={member.course}
                        semester={member.semester}
                        linkedin={member.linkedin}
                        email={member.email}
                        bio={member.bio}
                      />
                    </li>
                  ))}
                {categoria === "trainee" &&
                  membersByTeam.Trainee?.map((member) => (
                    <li
                      key={member.id}
                      data-member-name={member.name}
                      data-member-role={member.role}
                      data-member-team="Trainee"
                    >
                      <MemberCard
                        name={member.name}
                        role={member.role}
                        team={member.team}
                        image={member.image}
                        course={member.course}
                        semester={member.semester}
                        linkedin={member.linkedin}
                        email={member.email}
                        bio={member.bio}
                      />
                    </li>
                  ))}
                {categoria === "alumni" &&
                  membersByTeam.Alumni?.map((member) => (
                    <li
                      key={member.id}
                      data-member-name={member.name}
                      data-member-role={member.role}
                      data-member-team="Alumni"
                    >
                      <MemberCard
                        name={member.name}
                        role={member.role}
                        team={member.team}
                        image={member.image}
                        course={member.course}
                        semester={member.semester}
                        linkedin={member.linkedin}
                        email={member.email}
                        bio={member.bio}
                      />
                    </li>
                  ))}
              </ul>
            </section>
          </>
        )}
      </main>
    </>
  )
}

export async function generateStaticParams() {
  return validCategories.map((categoria) => ({
    categoria,
  }))
}
