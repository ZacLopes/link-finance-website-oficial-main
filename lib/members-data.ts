export interface Member {
  id: string
  name: string
  role: string
  team: "Diretoria" | "Alumni" | "Analistas" | "Trainee"
  image: string
  course?: string
  semester?: string
  linkedin?: string
  email?: string
  bio?: string
}

// Dados atualizados com as categorias Alumni e Analistas
export const membersData: Member[] = [
  // DIRETORIA
  {
    id: "matheus-tolentino",
    name: "Matheus Tolentino",
    role: "Presidente",
    team: "Diretoria",
    image: "/images/matheus-tolentino.jpeg?v=2",
    course: "Engenharia Econômica",
    semester: "6º semestre",
    linkedin: "https://www.linkedin.com/in/matheus-tolentino-28361b353/",
    email: "matheus.tolentino@aluno.lsb.com.br",
    bio: "Presidente da Link Finance, responsável pela gestão estratégica e liderança da liga de mercado financeiro.",
  },
  {
    id: "bruno-morro",
    name: "Bruno Morro",
    role: "Diretor Institucional",
    team: "Diretoria",
    image: "/images/bruno-morro.jpeg?v=2",
    course: "Economia",
    semester: "6º semestre",
    linkedin: "https://www.linkedin.com/in/brunomorro/",
    email: "bruno.morro@aluno.lsb.com.br",
    bio: "Diretor Institucional responsável pelas relações institucionais e parcerias estratégicas da Link Finance.",
  },
  {
    id: "zac-kouri",
    name: "Zac Kouri",
    role: "Diretor de Projetos",
    team: "Diretoria",
    image: "/images/zac-kouri.jpeg?v=2",
    course: "Relações Internacionais",
    semester: "5º semestre",
    linkedin: "https://www.linkedin.com/in/zac-lopes-93540a338/",
    email: "zac.kouri@aluno.lsb.com.br",
    bio: "Diretor de Projetos que coordena as iniciativas da Link Finance, garantindo a execução e qualidade das entregas.",
  },
  {
    id: "yasmine-melo",
    name: "Yasmine Melo",
    role: "Diretora de Pessoas",
    team: "Diretoria",
    image: "/images/yasmine-melo.jpeg?v=2",
    course: "Sustentabilidade",
    semester: "4º semestre",
    linkedin: "https://www.linkedin.com/in/yasmine-bittencourt-melo-200a5034b/",
    email: "yasmine.melo@aluno.lsb.com.br",
    bio: "Diretora de Pessoas responsável pela gestão de talentos e desenvolvimento dos membros da Link Finance.",
  },

  // ALUMNI
  {
    id: "gabriel-matsumoto",
    name: "Gabriel Matsumoto",
    role: "Ex-Presidente",
    team: "Alumni",
    image: "/images/gabriel-matsumoto-2025.jpeg",
    course: "Administração",
    semester: "8º semestre",
    linkedin: "http://linkedin.com/in/gabriel-hiromiti-matsumoto-323051255",
    bio: "Ex-Presidente da Link Finance, liderou a gestão estratégica da liga de mercado financeiro.",
  },
  {
    id: "luigi-faveri",
    name: "Luigi Faveri",
    role: "Ex-Diretor Institucional",
    team: "Alumni",
    image: "/images/luigi-faveri.jpeg",
    course: "Economia",
    semester: "7º semestre",
    linkedin: "https://www.linkedin.com/in/luigi-faveri/",
    bio: "Ex-Diretor Institucional da Link Finance, responsável pelas relações institucionais e parcerias estratégicas.",
  },
  {
    id: "bruno-yamazaki",
    name: "Bruno Yamazaki",
    role: "Ex-Diretor de Projetos",
    team: "Alumni",
    image: "/images/bruno-akihiro.jpeg",
    course: "Engenharia de Produção",
    semester: "6º semestre",
    linkedin: "https://www.linkedin.com/in/bruno-akihiro-kessler-yamazaki/",
    bio: "Ex-Diretor de Projetos da Link Finance, coordenou as iniciativas e garantiu a qualidade das entregas.",
  },
  {
    id: "eduardo-kokis",
    name: "Eduardo Kokis",
    role: "Ex-Diretor de Pessoas",
    team: "Alumni",
    image: "/images/eduardo-kokis.jpeg",
    course: "Administração",
    semester: "5º semestre",
    linkedin: "http://www.linkedin.com/in/eduardo-kokis-368b96276",
    bio: "Ex-Diretor de Pessoas da Link Finance, responsável pela gestão de talentos e desenvolvimento dos membros.",
  },
  {
    id: "pietro-caiafa",
    name: "Pietro Caiafa",
    role: "Alumni",
    team: "Alumni",
    image: "",
    course: "Economia",
    semester: "Formado",
    linkedin: "https://www.linkedin.com/in/pietro-caiafa-1138311b4/",
    bio: "Ex-membro da Link Finance, atualmente atuando no mercado financeiro.",
  },
  {
    id: "larissa-andrade",
    name: "Larissa Andrade",
    role: "Alumni",
    team: "Alumni",
    image: "",
    course: "Administração",
    semester: "Formada",
    linkedin: "https://www.linkedin.com/in/larissa-cordeiro-8922a2234/",
    bio: "Ex-membro da Link Finance, com experiência em análise de investimentos.",
  },
  {
    id: "matheus-rosa",
    name: "Matheus Rosa",
    role: "Alumni",
    team: "Alumni",
    image: "",
    course: "Jornalismo",
    semester: "Formado",
    linkedin: "https://www.linkedin.com/in/mateusrosads",
    bio: "Ex-membro da Link Finance, especializado em comunicação financeira.",
  },
  {
    id: "felipe-meda",
    name: "Felipe Meda",
    role: "Alumni",
    team: "Alumni",
    image: "",
    course: "Engenharia",
    semester: "Formado",
    linkedin: "https://www.linkedin.com/in/felipe-meda/",
    bio: "Ex-membro da Link Finance, com foco em gestão de projetos financeiros.",
  },
  {
    id: "diego-assumpcao",
    name: "Diego Assumpção",
    role: "Alumni",
    team: "Alumni",
    image: "",
    course: "Economia",
    semester: "Formado",
    linkedin: "https://www.linkedin.com/in/diego-assump%C3%A7%C3%A3o-ferreira-07b26a279/",
    bio: "Ex-membro da Link Finance, com experiência no mercado financeiro.",
  },

  // ANALISTAS
  {
    id: "andre-paim",
    name: "André Paim",
    role: "Analista",
    team: "Analistas",
    image: "/images/andre-paim.jpeg?v=2",
    course: "Ciência da Computação",
    semester: "4º semestre",
    linkedin: "https://www.linkedin.com/in/andreclemospaim/",
    bio: "Analista especializado em tecnologia e análise de dados.",
  },
  {
    id: "gabriel-neves",
    name: "Gabriel Neves",
    role: "Analista",
    team: "Analistas",
    image: "/images/gabriel-neves.jpeg?v=2",
    course: "Marketing",
    semester: "3º semestre",
    linkedin: "https://www.linkedin.com/in/gabriel-t-neves/",
    bio: "Analista com foco em marketing e comunicação.",
  },
  {
    id: "julia-delmondes",
    name: "Julia Delmondes",
    role: "Analista",
    team: "Analistas",
    image: "/images/julia-delmondes.jpeg?v=2",
    course: "Comunicação Social",
    semester: "4º semestre",
    linkedin: "https://www.linkedin.com/in/j%C3%BAlia-delmondes-dias-bb2525333/",
    bio: "Analista especializada em comunicação institucional.",
  },
  {
    id: "luiz-libardi",
    name: "Luiz Libardi",
    role: "Analista",
    team: "Analistas",
    image: "/images/luiz-libardi.jpeg?v=2",
    course: "Administração",
    semester: "3º semestre",
    linkedin: "https://www.linkedin.com/in/luiz-libardi-8b70991ab/",
    bio: "Analista com foco em operações e processos.",
  },

  // TRAINEE
  {
    id: "lucas-paiva",
    name: "Lucas Paiva",
    role: "Trainee",
    team: "Trainee",
    image: "/images/lucas-paiva.jpeg",
    course: "Administração",
    semester: "1º semestre",
    linkedin: "https://www.linkedin.com/in/lucas-paiva-anaia-de-oliveira-088198278/",
    bio: "Trainee em desenvolvimento, focado em aprender sobre mercado financeiro e gestão empresarial.",
  },
  {
    id: "marcela-viana",
    name: "Marcela Viana",
    role: "Trainee",
    team: "Trainee",
    image: "/images/marcela-viana.jpeg",
    course: "Administração",
    semester: "1º semestre",
    linkedin: "https://www.linkedin.com/in/marcela-viana-11391a2a0/",
    bio: "Trainee em desenvolvimento, focada em aprender sobre mercado financeiro e análise de investimentos.",
  },
  {
    id: "andre-modesto",
    name: "André Modesto",
    role: "Trainee",
    team: "Trainee",
    image: "/images/andre-modesto.jpeg",
    course: "Administração",
    semester: "1º semestre",
    linkedin: "https://www.linkedin.com/in/andr%C3%A9-modesto-5097bb330/",
    bio: "Trainee em desenvolvimento, focado em aprender sobre mercado financeiro.",
  },
  {
    id: "douglas-sonoda",
    name: "Douglas Sonoda",
    role: "Trainee",
    team: "Trainee",
    image: "/images/douglas-sonoda.jpeg",
    course: "Administração",
    semester: "1º semestre",
    linkedin: "https://www.linkedin.com/in/douglas-sonoda-8403a2382/",
    bio: "Trainee em desenvolvimento, focado em aprender sobre mercado financeiro.",
  },
  {
    id: "francisco-pigatto",
    name: "Francisco Pigatto",
    role: "Trainee",
    team: "Trainee",
    image: "/images/francisco-pigatto.jpeg",
    course: "Administração",
    semester: "1º semestre",
    linkedin: "https://www.linkedin.com/in/francisco-pigatto-252bb9334/",
    bio: "Trainee em desenvolvimento, focado em aprender sobre mercado financeiro.",
  },
  {
    id: "henrique-agrizzi",
    name: "Henrique Agrizzi",
    role: "Trainee",
    team: "Trainee",
    image: "/images/henrique-agrizzi.jpeg",
    course: "Administração",
    semester: "1º semestre",
    linkedin: "https://www.linkedin.com/in/henrique-frisso-agrizzi-68501933a/",
    bio: "Trainee em desenvolvimento, focado em aprender sobre mercado financeiro.",
  },
  {
    id: "joao-barreto",
    name: "João Barreto",
    role: "Trainee",
    team: "Trainee",
    image: "/images/joao-barreto.jpeg",
    course: "Administração",
    semester: "1º semestre",
    linkedin: "https://www.linkedin.com/in/jo%C3%A3o-barreto-93801a305/",
    bio: "Trainee em desenvolvimento, focado em aprender sobre mercado financeiro.",
  },
  {
    id: "joaquim-breves",
    name: "Joaquim Breves",
    role: "Trainee",
    team: "Trainee",
    image: "/images/joaquim-breves.jpeg",
    course: "Administração",
    semester: "1º semestre",
    linkedin: "https://www.linkedin.com/in/joaquim-breves-511180357/",
    bio: "Trainee em desenvolvimento, focado em aprender sobre mercado financeiro.",
  },
  {
    id: "leo-ferrazzi",
    name: "Léo Ferrazzi",
    role: "Trainee",
    team: "Trainee",
    image: "/images/leo-ferrazzi.jpeg",
    course: "Administração",
    semester: "1º semestre",
    linkedin: "https://www.linkedin.com/in/l%C3%A9o-ferrazzi-3740662a1/",
    bio: "Trainee em desenvolvimento, focado em aprender sobre mercado financeiro.",
  },
  {
    id: "leticia-amorim",
    name: "Letícia Amorim",
    role: "Trainee",
    team: "Trainee",
    image: "/images/leticia-amorim.jpeg",
    course: "Administração",
    semester: "1º semestre",
    linkedin: "https://www.linkedin.com/in/leticia-amorim-11391a2a0/",
    bio: "Trainee em desenvolvimento, focada em aprender sobre mercado financeiro.",
  },
  {
    id: "lucas-moreira",
    name: "Lucas Moreira",
    role: "Trainee",
    team: "Trainee",
    image: "/images/lucas-moreira.jpeg",
    course: "Administração",
    semester: "1º semestre",
    linkedin: "https://www.linkedin.com/in/lucas-mattiuz-moreira-653112307/",
    bio: "Trainee em desenvolvimento, focado em aprender sobre mercado financeiro.",
  },
  {
    id: "vitor-barcelos",
    name: "Vitor Barcelos",
    role: "Trainee",
    team: "Trainee",
    image: "/placeholder.svg?height=400&width=400",
    course: "Administração",
    semester: "1º semestre",
    linkedin: "https://www.linkedin.com/in/vitor-inoc%C3%AAncio-barcelos-19a956321/",
    bio: "Trainee em desenvolvimento, focado em aprender sobre mercado financeiro.",
  },
]

// Função para agrupar membros por equipe
export function getMembersByTeam() {
  const teams: Record<string, Member[]> = {
    Diretoria: [],
    Alumni: [],
    Analistas: [],
    Trainee: [],
  }

  membersData.forEach((member) => {
    teams[member.team].push(member)
  })

  // Ordenar analistas por ordem alfabética
  teams.Analistas.sort((a, b) => a.name.localeCompare(b.name))
  // Ordenar trainees por ordem alfabética
  teams.Trainee.sort((a, b) => a.name.localeCompare(b.name))

  return teams
}

// Função para obter estatísticas dos membros
export function getMembersStats() {
  const total = membersData.length
  const diretoria = membersData.filter((m) => m.team === "Diretoria").length
  const alumni = membersData.filter((m) => m.team === "Alumni").length
  const analistas = membersData.filter((m) => m.team === "Analistas").length
  const trainee = membersData.filter((m) => m.team === "Trainee").length

  return { total, diretoria, alumni, analistas, trainee }
}
