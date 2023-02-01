import { HashtagIcon } from '@heroicons/react/24/outline'
import type { FC } from 'react'

export interface Props extends ReactProps {
  title: string
  id: string
}
interface State {}

const ResumeCard: FC<Props> = ({ children, title, id }) => {
  return (
    <div className="sm:flex">
      <div className="mb-5 sm:w-56">
        <div>
          <a
            className="group flex cursor-pointer items-center gap-2"
            href={`#${id}`}
          >
            <h2
              id={id}
              className="inline text-2xl text-neutral-800 dark:text-neutral-200 sm:block"
            >
              {title}
            </h2>
            <HashtagIcon className="h-5 w-5 text-neutral-600 opacity-0 duration-200 group-hover:opacity-100" />
          </a>
        </div>

        <span className="uppercase text-neutral-500">{id}</span>
      </div>
      {children}
    </div>
  )
}

export default ResumeCard
