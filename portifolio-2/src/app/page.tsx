import foto from '@/assets/foto felipe.jpeg'
import Icon from '@/components/Icon'
import Projects from '@/components/projects'
import SummaryItem from '@/components/summaryItem'
import {
  Book,
  BookOpen,
  Code2,
  File,
  Github,
  Laptop,
  Linkedin,
  Mail,
  MessageCircle,
} from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="text-lg grid lg:grid-cols-2 items-center text-center justify-center h-screen gap-16">
      <div className="fixed h-screen w-screen text-white  bg-primary-dark z-0"></div>
      {/* Esquerda */}
      <div className="flex z-10 justify-center">
        <div className="grid p-4 pt-8 md:p-16  lg:fixed top-0 z-10 lg:w-2/4 h-full gap-16">
          {/* Nome e Foto */}
          <div className=" grid md:flex justify-center items-center gap-8 ">
            {/* Nome */}
            <div className="grid md:self-center ">
              <h1 className="flex text-2xl md:text-4xl underline">
                Felipe Bignoto Palacio
              </h1>
              <span>Desenvolvedor Front-end</span>
            </div>
            {/* Foto */}
            <div className="flex gap-8 justify-center">
              <Image
                alt="Foto de perfil"
                src={foto}
                className="h-40 w-40 rounded-lg border-2 border-secondary-light"
              ></Image>
            </div>
          </div>

          {/* Resumo */}
          <div className=" items-center flex text-justify md:justify-center">
            {/* Resumo */}
            <div className="grid gap-4">
              <SummaryItem
                icon={BookOpen}
                texto="Estudante de Bacharelado Interdisciplinar em Ciências Exatas
                  na UFJF"
              />

              <SummaryItem
                icon={Book}
                texto="Cursando Engenharia de Software na UniAcademia"
              />

              <SummaryItem
                icon={Code2}
                texto="Possuo conhecimentos sólidos em HTML, CSS, JavaScript, TypeScript, Tailwind, React e Next.js"
              />

              <SummaryItem
                icon={Laptop}
                texto="Aprofundando meus estudos em Python, Fast API e Machine Learning"
              />
            </div>
          </div>

          <div className="flex justify-center gap-8 bottom-0">
            <Icon
              icon={Linkedin}
              url="https://www.linkedin.com/in/felipe-bignoto-palacio/"
            />
            <Icon icon={Github} url="https://github.com/felipebignoto" />
            <Icon icon={Mail} url="mailto:felipebignoto@gmail.com" />
            <Icon
              icon={File}
              url="https://drive.google.com/file/d/1eO3Ghe300lnoUFdaduEhqq25CAtZI2aa/view?usp=sharing"
            />
            <Icon icon={MessageCircle} url="https://wa.me/5532991689844" />
          </div>
        </div>
      </div>

      {/* Direita */}
      <div className="flex mx-auto justify-center z-10">
        <Projects />
      </div>
    </div>
  )
}
