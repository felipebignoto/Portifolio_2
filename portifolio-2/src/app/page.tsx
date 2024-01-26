import {
  Book,
  BookOpen,
  Code2,
  Github,
  HardHat,
  Laptop,
  Linkedin,
  Mail,
} from 'lucide-react'
import Image from 'next/image'
import foto from '@/assets/foto de perfil.jpeg'

export default function Home() {
  return (
    <div className="text-lg grid grid-cols-1 items-center text-center p-16 bg-primary-dark h-screen">
      {/* Nome e Foto */}
      <div className="flex justify-center gap-32">
        {/* Nome */}
        <div className="grid items-center">
          <h1 className="text-4xl">Felipe Bignoto Palacio</h1>
          <span>Desenvolvedor</span>
        </div>
        {/* Foto */}
        <div className="flex gap-8">
          <Image
            alt="Foto de perfil"
            src={foto}
            className="h-40 w-40 rounded-lg"
          ></Image>
          <div className="grid items-center">
            <Linkedin />
            <Github />
            <Mail />
          </div>
        </div>
      </div>

      {/* Resumo e Experiêcnia */}
      <div className=" items-center">
        {/* Resumo */}
        <div className="grid gap-4">
          <div className="flex gap-4">
            <BookOpen />
            <span>
              Estudante de Bacharelado Interdisciplinar em Ciências Exatas na
              UFJF
            </span>
          </div>

          <div className="flex gap-4">
            <Book />
            <span>Cursando Engenharia de Software na UniAcademia</span>
          </div>

          <div className="flex gap-4">
            <HardHat />
            <span>Técnico eletrotécnico.</span>
          </div>

          <div className="flex gap-4">
            <Code2 />
            <span>Possuo conhecimentos sólidos em HTML, CSS e JavaScript</span>
          </div>

          <div className="flex gap-4">
            <Laptop />
            <span>Aprofundando meus estudos em React e Next.js</span>
          </div>
        </div>
        {/* Experiêcnia */}
      </div>
    </div>
  )
}
