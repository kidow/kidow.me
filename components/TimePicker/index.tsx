import { useRef } from 'react'
import type { FC } from 'react'
import classnames from 'classnames'
import dayjs from 'dayjs'
import type { Dayjs } from 'dayjs'
import { ClockIcon } from '@heroicons/react/24/outline'
import { twoDigitsNumber, useObjectState, useOnClickOutside } from 'services'
import 'dayjs/locale/ko'
import { useRouter } from 'next/router'

interface Props {
  value: Dayjs
  onChange: (day: Dayjs) => void
}
interface State {
  isOpen: boolean
}

const TimePicker: FC<Props> = ({ value, onChange }) => {
  const [{ isOpen }, setState] = useObjectState<State>({
    isOpen: false
  })
  const ref = useRef<HTMLDivElement>(null)
  const { locale } = useRouter()
  useOnClickOutside(ref, () => setState({ isOpen: false }))
  return (
    <div
      className={classnames(
        'relative inline-flex cursor-pointer items-center justify-between rounded-md border border-neutral-300 py-2 px-3',
        isOpen ? 'dark:border-neutral-700' : 'dark:border-neutral-800'
      )}
      onClick={() => setState({ isOpen: true })}
      ref={ref}
    >
      <input
        className={classnames(
          'cursor-pointer border-0 bg-inherit focus:outline-none'
        )}
        readOnly
        value={dayjs(value).format('HH:mm:ss')}
      />
      <ClockIcon className="h-4 w-4 text-neutral-400" />
      {isOpen && (
        <div className="absolute top-12 left-0 z-10 w-full bg-white shadow-xl dark:bg-neutral-800">
          <div className="flex h-56 py-1">
            <ul className="flex-1 overflow-y-scroll overscroll-contain">
              {Array.from({ length: 24 }).map((_, key) => (
                <li
                  key={key}
                  className="cursor-pointer px-2 py-1 text-neutral-600 hover:bg-neutral-100 dark:text-neutral-100 dark:hover:bg-neutral-700"
                  onClick={() => onChange(dayjs(value).set('hour', key))}
                >
                  {twoDigitsNumber(key)}
                </li>
              ))}
            </ul>
            <ul className="flex-1 overflow-y-scroll overscroll-contain">
              {Array.from({ length: 60 }).map((_, key) => (
                <li
                  key={key}
                  className="cursor-pointer px-2 py-1 text-neutral-600 hover:bg-neutral-100 dark:text-neutral-100 dark:hover:bg-neutral-700"
                  onClick={() => onChange(dayjs(value).set('minute', key))}
                >
                  {twoDigitsNumber(key)}
                </li>
              ))}
            </ul>
            <ul className="flex-1 overflow-y-scroll overscroll-contain">
              {Array.from({ length: 60 }).map((_, key) => (
                <li
                  key={key}
                  className="cursor-pointer px-2 py-1 text-neutral-600 hover:bg-neutral-100 dark:text-neutral-100 dark:hover:bg-neutral-700"
                  onClick={() => onChange(dayjs(value).set('second', key))}
                >
                  {twoDigitsNumber(key)}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t p-2 text-sm text-blue-500 dark:border-neutral-700">
            <span
              className="cursor-pointer"
              onClick={() => {
                onChange(dayjs())
                setState({ isOpen: false })
              }}
            >
              {locale === 'ko' ? '현재' : 'Current'}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default TimePicker
