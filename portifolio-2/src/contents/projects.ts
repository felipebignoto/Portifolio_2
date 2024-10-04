export interface ProjectItemProps {
  name: string
  description: string
  repositoryUrl?: string
  deployUrl?: string
  stacks: string[]
}

export const projects = [
  {
    name: 'Site para escritório de advocacia',
    description:
      'Trabalho frelancer que desenvolvi um site completo com blog para um escritório, contendo design intuitivo e funcionalidades avançadas para destacar a identidade do escritório e manter os clientes informados.',
    deployUrl: 'https://www.consulmagnoeassis.com.br/',
    stacks: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind',
      'Hygraph',
      'GraphQl',
    ],
  },
  {
    name: 'Gerenciamento de Usuários',
    description:
      'Este projeto tem o objetivo de facilitar o gerenciamento de usuários, oferecendo operações básicas de CRUD (Create, Read, Update, Delete). A aplicação permite a criação, visualização, atualização e exclusão de usuários em um sistema simples, com uma interface amigável e intuitiva.',
    repositoryUrl: 'https://github.com/felipebignoto/desafio-tecnico',
    stacks: ['Next', 'React', 'TypeScript', 'Tailwind', 'Node', 'Mongo DB'],
  },
  {
    name: 'Dieta AI',
    description:
      'Este projeto tem o objetivo de facilitar o gerenciamento de dieta, oferecendo uma sugestão de dieta fornecida pelo Google Gemini com base nas informações pessoais fornecidas.',
    repositoryUrl: 'https://github.com/felipebignoto/dieta_ia',
    stacks: ['React Native', 'Expo', 'Google Gemini'],
  },
  {
    name: 'Sistema de reservas para barbearias',
    description:
      'Projeto de um sistema de reservas online para barbearias contendo página de agendamentos, sistema de login, barra de pesquisa e responsividade',
    deployUrl: 'https://barber-shop-fbp.vercel.app/',
    stacks: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind',
      'Prisma',
      'SupaBase',
      'Shadcn/ui',
    ],
    repositoryUrl: 'https://github.com/felipebignoto/FSW-BarberShop',
  },
  {
    name: 'E-commerce',
    description:
      'Projeto de um E-Commerce que mostra os produtos disponíveis, carrinho de compras e login.',
    repositoryUrl: 'https://github.com/felipebignoto/E-Commerce',
    deployUrl: 'https://e-commerce-felipebignoto.vercel.app/',
    stacks: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Prisma', 'Clerk'],
  },
]
