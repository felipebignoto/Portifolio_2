import { ElementType } from 'react'

interface SummaryItemProps {
  icon: ElementType
  texto: string
}

export default function SummaryItem({ icon: Icon, texto }: SummaryItemProps) {
  return (
    <div className="flex gap-2 md:gap-4">
      <Icon className="text-secondary-light"></Icon>
      <span className="">{texto}</span>
    </div>
  )
}
