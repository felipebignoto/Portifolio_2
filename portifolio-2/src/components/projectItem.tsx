import { ProjectItemProps } from '@/contents/projects'
import { Github, MoveUpRight } from 'lucide-react'
import Link from 'next/link'

export default function ProjectItem({
  project,
}: {
  project: ProjectItemProps
}) {
  return (
    <div className="p-3 grid gap-8 rounded-2xl bg-primary-dark border-bg-secondary min-w-max h-fit justify-center">
      <div className=" grid gap-2 text-center max-w-lg">
        <span>{project.name}</span>
        <span>{project.description}</span>
        <span className="flex gap-2 justify-center">
          {project.stacks.map((stack, i) => {
            return (
              <span
                className="text-sm text-secondary-light rounded-full p-2"
                key={i}
              >
                {stack}
              </span>
            )
          })}
        </span>
      </div>

      <div className="flex gap-8 justify-center">
        {project.repositoryUrl && (
          <Link href={project.repositoryUrl} prefetch={false} target="_blank">
            <Github />
          </Link>
        )}
        {project.deployUrl && (
          <Link
            href={project.deployUrl}
            prefetch={false}
            target="_blank "
            className="flex"
          >
            <MoveUpRight />
          </Link>
        )}
      </div>
    </div>
  )
}
