import { projects } from '@/contents/projects'
import ProjectItem from './projectItem'

export default function Projects() {
  return (
    <div className="grid  gap-16 pt-16 text-center z-10">
      <h2>Projetos</h2>
      {projects.map((project) => (
        <ProjectItem project={project} key={project.name} />
      ))}
    </div>
  )
}
