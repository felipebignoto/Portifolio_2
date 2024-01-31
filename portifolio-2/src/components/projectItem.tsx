import { ProjectItemProps } from '@/contents/projects'
import { Github, MoveUpRight } from 'lucide-react'
import Icon from './Icon'

export default function ProjectItem({
  project,
}: {
  project: ProjectItemProps
}) {
  return (
    <div className="p-4 grid gap-8 rounded-2xl border-2 border-secondary-light justify-center ">
      <div className=" grid gap-4 text-center md:max-w-lg p-4">
        {/* Nome */}
        <div className="grid gap-4">
          <span className="underline">{project.name}</span>
          <span className="flex text-justify">{project.description}</span>
        </div>

        {/* Stacks */}
        <div className="flex flex-col gap-2 md:flex-row justify-center text-center items-center">
          {
            <span className="text-sm text-secondary-light">
              {project.stacks.join('  |  ')}
            </span>
          }
        </div>
      </div>

      {/* Links */}
      <div className="flex justify-center gap-4">
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
