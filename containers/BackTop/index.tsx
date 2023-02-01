import { ArrowUpIcon } from '@heroicons/react/24/outline'
import type { FC } from 'react'

export interface Props {}
interface State {}

const BackTop: FC<Props> = () => {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed right-5 bottom-5 z-10 rounded-full bg-neutral-200 p-2 active:bg-neutral-100 dark:bg-neutral-600 dark:hover:bg-neutral-500 dark:active:bg-neutral-700"
    >
      <ArrowUpIcon className="h-5 w-5" />
    </button>
  )
}

export default BackTop
