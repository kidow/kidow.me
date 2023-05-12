import { memo, useState } from 'react'
import type { FC } from 'react'
import classnames from 'classnames'
import { ChevronUpIcon } from '@heroicons/react/24/outline'

export interface Props {
  title: string
  content: string
}
interface State {}

const Accordion: FC<Props> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [height, setHeight] = useState<number>(0)
  return (
    <li className="select-none rounded-2xl border border-neutral-200 bg-neutral-100 px-6 dark:border-neutral-800 dark:bg-neutral-900">
      <div
        onClick={() => setIsOpen(() => !isOpen)}
        className="flex cursor-pointer items-center justify-between py-6"
      >
        <h3 className="text-lg font-medium text-neutral-900 dark:text-white">
          {title}
        </h3>
        <button className="text-neutral-400">
          <ChevronUpIcon
            className={classnames('h-6 w-6 duration-150', {
              '-rotate-180': isOpen
            })}
          />
        </button>
      </div>
      <section
        style={{ maxHeight: isOpen ? height : 0 }}
        className={classnames(
          'overflow-hidden transition-[max-height] duration-150',
          isOpen ? 'ease-in' : 'ease-in-out'
        )}
      >
        <div
          ref={(ref) => {
            const height = ref?.scrollHeight
            if (height) setHeight(height)
          }}
          className="border-t border-neutral-200 py-6 dark:border-neutral-800"
        >
          {content}
        </div>
      </section>
    </li>
  )
}

export default memo(Accordion)
