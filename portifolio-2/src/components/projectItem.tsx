import { ProjectItemProps } from '@/contents/projects'
import { Github, MoveUpRight } from 'lucide-react'
import Icon from './Icon'

export default function ProjectItem({
  project,
}: {
  project: ProjectItemProps
}) {
  return (
    <div className="p-2 grid gap-8 rounded-2xl border-2 border-secondary-light justify-center ">
      <div className=" grid gap-4 text-center md:max-w-lg">
        {/* Nome */}
        <div className="grid gap-4">
          <span className="underline">{project.name}</span>
          <span className="flex ">{project.description}</span>
        </div>

        {/* Stacks */}
        <div className="flex flex-col gap-2 md:flex-row justify-center text-center items-center">
          {project.stacks.map((stack, i) => {
            return (
              <span className="text-sm text-secondary-light" key={i}>
                {stack}
              </span>
            )
          })}
        </div>
      </div>

      {/* Links */}
      <div className="flex gap-8 justify-center">
        {project.repositoryUrl && (
          <Icon icon={Github} url={project.repositoryUrl} />
        )}
        {project.deployUrl && (
          <Icon icon={MoveUpRight} url={project.deployUrl} />
        )}
      </div>
    </div>
  )
}
