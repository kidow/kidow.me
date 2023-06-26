import type { FC } from 'react'

export interface Props extends ReactProps {
  href: string
}
interface State {}

const SocialLink: FC<Props> = ({ href, children }) => {
  return (
    <a href={href} target="_blank">
      <button className="group flex h-10 w-10 items-center justify-center rounded-md duration-150 hover:bg-neutral-200 dark:hover:bg-neutral-800">
        {children}
      </button>
    </a>
  )
}

export default SocialLink
