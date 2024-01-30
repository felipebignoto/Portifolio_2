import { projects } from '@/contents/projects'
import ProjectItem from './projectItem'

export default function Projects() {
  return (
    <div className="grid gap-16 p-4 md:p-16 text-center">
      <h2 className="flex justify-center text-2xl md:text-4xl underline">
        Projetos
      </h2>
      {projects.map((project) => (
        <ProjectItem project={project} key={project.name} />
      ))}
    </div>
  )
}
