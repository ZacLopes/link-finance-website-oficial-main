export interface Mentor {
  name: string
  role: string
  company: string
  image: string
  bio?: string
  linkedin?: string
}

export const mentorsData: Mentor[] = [
  {
    name: "Yago Moreira",
    role: "Vice-Presidente - Private Equity",
    company: "Confrapar",
    image: "/images/yago-moreira.png",
    bio: "Vice-presidente da Confrapar, com ampla experiência em investimentos e desenvolvimento de negócios no mercado brasileiro.",
    linkedin: "https://www.linkedin.com/in/yagomoreirasilva/",
  },
  {
    name: "Vitor Pajaro",
    role: "Investment Manager",
    company: "Astella",
    image: "/images/vitor-pajaro.png",
    bio: "Gestor de investimentos na Astella, especializado em análise de startups e empresas de tecnologia com alto potencial de crescimento.",
    linkedin: "https://www.linkedin.com/in/vitor-pajaro-2616b8b1/",
  },
  {
    name: "Fabiana Fagundes",
    role: "Partner",
    company: "FM/Derraik",
    image: "/images/fabiana-fagundes.png",
    bio: "Sócia da FM/Derraik, com foco em estratégias de investimento em renda variável e gestão de patrimônio para clientes institucionais.",
    linkedin: "https://www.linkedin.com/in/fabiana-fagundes-479330/",
  },
  {
    name: "Rodrigo Menezes",
    role: "Founding Partner",
    company: "FM/Derraik",
    image: "/images/rodrigo-menezes.png",
    bio: "Sócio fundador da FM/Derraik, com vasta experiência em gestão de investimentos e desenvolvimento de estratégias de mercado.",
    linkedin: "https://www.linkedin.com/in/rodrigo-menezes-3a78181/",
  },
  {
    name: "Pedro Koelle",
    role: "M&A Analyst",
    company: "Fortezza Partners",
    image: "/images/pedro-koelle.png",
    bio: "Analista de M&A na Fortezza Partners, especializado em fusões e aquisições e análise de oportunidades de investimento.",
    linkedin: "https://www.linkedin.com/in/pedrokoelle/",
  },
  {
    name: "Alexandre Cracovsky",
    role: "Vice President",
    company: "Advisia",
    image: "/images/alexandre-cracovsky.jpeg",
    bio: "Vice-Presidente de M&A na ADVISIA Investimentos, lidera projetos de assessoria financeira para transações de M&A, tanto no sell-side, como no buy-side, tendo acumulado +BRL 10bi transacionado.",
    linkedin: "https://www.linkedin.com/in/alexandre-cracovsky/",
  },
  {
    name: "Lucas Lisboa",
    role: "Founder",
    company: "GBSA Group",
    image: "/images/lucas-lisboa.png",
    bio: "Profissional de Investment Banking e Investimentos em Private Equity com mais de oito anos de experiência em Mercados de Capitais e Consultoria (Fusões e Aquisições, ECM, Leveraged Finance, Structured Finance e DCM)",
    linkedin: "https://www.linkedin.com/in/lucas-lisboa-b96047b9/",
  },
  {
    name: "Luis Rodeguero",
    role: "CFO",
    company: "KX Ventures",
    image: "/images/luis-rodeguero.png",
    bio: "CFO na KX Ventures, especializado em gestão financeira com ativos iliquidos, como Ventures Capital.",
    linkedin: "https://www.linkedin.com/in/luisrodeguero/",
  },
]
