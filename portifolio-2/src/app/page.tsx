import {
  Book,
  BookOpen,
  Code2,
  Github,
  Laptop,
  Linkedin,
  Mail,
} from 'lucide-react'
import Image from 'next/image'
import foto from '@/assets/foto de perfil.jpeg'
import Projects from '@/components/projects'

export default function Home() {
  return (
    <div className="text-lg grid lg:grid-cols-2 items-center text-center justify-center h-screen">
      {/* Esquerda */}
      <div className="flex">
        <div className="grid p-16 gap-16 lg:fixed top-16 z-10 ">
          {/* Nome e Foto */}
          <div className="flex justify-center gap-8">
            {/* Nome */}
            <div className="flex-col self-center">
              <h1 className="text-4xl">Felipe Bignoto Palacio</h1>
              <span>Desenvolvedor</span>
            </div>
            {/* Foto */}
            <div className="flex gap-8">
              <Image
                alt="Foto de perfil"
                src={foto}
                className="h-40 w-40 rounded-lg border-2 border-secondary-light"
              ></Image>
            </div>
          </div>

          {/* Resumo */}
          <div className=" items-center flex justify-center">
            {/* Resumo */}
            <div className="grid gap-4">
              <div className="flex gap-4">
                <BookOpen className="text-secondary-light" />
                <span>
                  Estudante de Bacharelado Interdisciplinar em Ciências Exatas
                  na UFJF
                </span>
              </div>

              <div className="flex gap-4">
                <Book className="text-secondary-light" />
                <span>Cursando Engenharia de Software na UniAcademia</span>
              </div>

              <div className="flex gap-4">
                <Code2 className="text-secondary-light" />
                <span>
                  Possuo conhecimentos sólidos em HTML, CSS e JavaScript
                </span>
              </div>

              <div className="flex gap-4">
                <Laptop className="text-secondary-light" />
                <span>Aprofundando meus estudos em React e Next.js</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-8 bottom-0">
            <Linkedin className="hover:text-secondary-light" />
            <Github />
            <Mail />
          </div>
        </div>
      </div>

      {/* Direita */}
      <div className="flex mx-auto w-full justify-center ">
        <Projects />
      </div>
      <div className="fixed h-screen w-screen bg-gradient-to-b to-bg-primary-dark from-secondary-dark z-0"></div>
    </div>
  )
}
