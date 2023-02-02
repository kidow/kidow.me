import type { FC } from 'react'

export interface Props {
  list: string[]
  onClick: (key: number) => void
}

const ButtonGroup: FC<Props> = ({ list, onClick }) => {
  return (
    <div className="inline-flex divide-x rounded border bg-white">
      {list.map((name, key) => (
        <button
          className="py-2 px-3 text-sm text-neutral-400 hover:bg-sky-50 hover:text-blue-500"
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
