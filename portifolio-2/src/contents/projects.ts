export interface ProjectItemProps {
  name: string
  description: string
  repositoryUrl: string
  deployUrl?: string
  stacks: string[]
}

export const projects = [
  {
    name: 'E-commerce',
    description:
      'Projeto de um E-Commerce que mostra os produtos disponíveis e para adicionar os itens no carrinho é necessário se registrar e fazer login.',
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
