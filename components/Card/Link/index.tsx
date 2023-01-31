import Link from 'next/link'
import type { FC } from 'react'

export interface Props {
  title: string
  href: string
  Icon: any
}
interface State {}

const CardLink: FC<Props> = ({ title, href, Icon }) => {
  return (
    <Link
      href={href}
      className="group flex p-4 gap-2 items-center justify-start rounded-lg border border-gray-200 bg-transparent text-gray-700 dark:text-neutral-200 hover:text-gray-900 dark:hover:text-neutral-50 shadow-sm shadow-gray-100 transition-all duration-200 dark:border-neutral-800 dark:shadow-none hover:border-gray-300 hover:bg-slate-50 hover:shadow-md hover:shadow-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-900 dark:hover:shadow-none active:shadow-sm active:shadow-gray-200"
    >
      <Icon className="h-6 w-6 text-neutral-400 group-hover:text-neutral-600 dark:text-neutral-600 dark:group-hover:text-neutral-50 duration-200" />
      <span className="font-semibold">{title}</span>
    </Link>
  )
}

export default CardLink
