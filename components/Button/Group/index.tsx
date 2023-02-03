import type { FC } from 'react'

export interface Props {
  list: string[]
  onClick: (key: number) => void
}

const ButtonGroup: FC<Props> = ({ list, onClick }) => {
  return (
    <div className="inline-flex divide-x rounded border bg-white dark:divide-neutral-700 dark:border-neutral-700 dark:bg-neutral-800">
      {list.map((name, key) => (
        <button
          className="py-2 px-3 text-sm text-neutral-400 first:rounded-l last:rounded-r hover:bg-amber-50 hover:text-primary dark:hover:bg-amber-200/30"
          key={key}
          onClick={() => onClick(key)}
        >
          {name}
        </button>
      ))}
    </div>
  )
}

export default ButtonGroup
