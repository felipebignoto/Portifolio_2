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
    name: 'Sistema de agendamento para barbearias',
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
  {
    name: 'Sistema de agendamento online para barbearias',
    description:
      'Esse projeto foi um trabalho em grupo da faculdade que desenvolvemos um sistema com 2 usuários (cliente e barbeiro) e as funcionalidades de gerenciar agendamentos, sistema de registro e login e dashboard para visualizar as métricas,',
    repositoryUrl: 'https://github.com/charmingruby/quasar',
    stacks: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind',
      'Prisma',
      'Next-Auth',
      'SQLite ',
    ],
  },
  {
    name: 'Cardápio online',
    description:
      'Projeto de uma página responsiva de um restaurante contendo carrinho de compras, cardápio, link para reservas e depoimentos.',
    repositoryUrl:
      'https://github.com/felipebignoto/Cardapio-Online-com-WhatsApp',
    deployUrl: 'https://cardapio-fbp.netlify.app/',
    stacks: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'Bootstrap'],
  },
  {
    name: 'Página web de uma Pizzaria',
    description:
      'Projeto de uma página responsiva de uma pizzaria contendo planos, informações e área de contato.',
    repositoryUrl: 'https://github.com/felipebignoto/Pizzaria',
    deployUrl: 'https://pizzaria-fbp.netlify.app/',
    stacks: ['HTML', 'CSS', 'JavaScript', 'JQuery'],
  },
]
