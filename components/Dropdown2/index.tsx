import type { FC, ReactNode } from 'react'
import classnames from 'classnames'
import type { Argument } from 'classnames'

export interface Props {
  position:
    | 'top-start'
    | 'top-end'
    | 'right-start'
    | 'right-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'left-start'
    | 'left-end'
  trigger: ReactNode
  list: string[]
  onClick: (index: number) => void
  className?: Argument
}
interface State {}

const Dropdown2: FC<Props> = ({
  position,
  trigger,
  list,
  onClick,
  className
}) => {
  return (
    <div className="relative inline-block [&>ul]:focus-within:visible [&>ul]:focus-within:scale-100 [&>ul]:focus-within:opacity-100">
      <label tabIndex={0} className="cursor-pointer">
        {trigger}
      </label>
      <ul
        tabIndex={0}
        className={classnames(
          'invisible absolute z-50 w-52 scale-95 transform rounded-md bg-black p-2 opacity-0 shadow transition duration-200 ease-in-out',
          {
            'right-0 bottom-full': position === 'top-start',
            'left-0 bottom-full': position === 'top-end',
            'bottom-0 left-full': position === 'right-start',
            'top-0 left-full': position === 'right-end',
            'right-0 top-full': position === 'bottom-start',
            'left-0 top-full': position === 'bottom-end',
            'right-full bottom-0': position === 'left-start',
            'right-full top-0': position === 'left-end'
          },
          className
        )}
      >
        {list.map((item, key) => (
          <li
            key={key}
            className="cursor-pointer rounded py-3 px-4 hover:bg-neutral-900"
            onClick={() => onClick(key)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown2
