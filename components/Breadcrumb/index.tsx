import type { FC } from 'react'
import classnames from 'classnames'

interface Props {
  list: Array<{
    path: string
    name: string
  }>
}

const Breadcrumbs: FC<Props> = ({ list }) => {
  return (
    <div className="max-w-full overflow-x-auto py-2 text-sm">
      <ul className="flex items-center">
        {list.map((item, key) => (
          <li
            className={classnames('flex items-center dark:text-neutral-500', {
              'before:ml-2 before:mr-3 before:block before:h-1.5 before:w-1.5 before:rotate-45 before:border-t before:border-r before:border-black before:bg-transparent before:opacity-40 before:content-[""] dark:before:border-neutral-400':
                key !== 0
            })}
            key={key}
          >
            {list.length === key + 1 ? (
              <span className="font-semibold dark:text-neutral-400">
                {item.name}
              </span>
            ) : (
              <a
                className={classnames(
                  key === list.length - 1 ? 'cursor-text' : 'hover:underline'
                )}
                href={item.path}
              >
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Breadcrumbs
