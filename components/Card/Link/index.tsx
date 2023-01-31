import Link from 'next/link'
import type { FC } from 'react'

export interface Props extends ReactProps {
  title: string
  href: string
}
interface State {}

const CardLink: FC<Props> = ({ title, href, children }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="group flex flex-col justify-start overflow-hidden rounded-lg border border-gray-200 bg-gray-100 text-current no-underline shadow shadow-gray-100 transition-all duration-200 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-100 active:shadow-sm active:shadow-gray-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-50 dark:shadow-none dark:hover:border-neutral-500 dark:hover:bg-neutral-700 dark:hover:shadow-none"
    >
      {children}
      <div className="flex gap-2 p-4 font-semibold text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
        <span>{title}</span>
        <span className="transition-transform duration-75 group-hover:translate-x-[2px]">
          →
        </span>
      </div>
    </Link>
  )
}

export default CardLink
