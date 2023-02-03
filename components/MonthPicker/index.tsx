import { useRef, useId } from 'react'
import type { FC } from 'react'
import classnames from 'classnames'
import dayjs from 'dayjs'
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'
import { XCircleIcon } from '@heroicons/react/24/solid'
import { useObjectState, useOnClickOutside, twoDigitsNumber } from 'services'
import { createPortal } from 'react-dom'

export interface Props {
  value: string
  onChange: (value: string) => void
}
interface State {
  isOpen: boolean
  date: dayjs.Dayjs
}

const MonthPicker: FC<Props> = ({ value, onChange }) => {
  const [{ isOpen, date }, setState] = useObjectState<State>({
    isOpen: false,
    date: dayjs(value || dayjs().format('YYYY-MM'))
  })
  const ref = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)
  const id = useId()
  useOnClickOutside(targetRef, () => setState({ isOpen: false }), id)
  return (
    <>
      <div
        className="group relative inline-flex items-center rounded border border-neutral-300 hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-700"
        ref={ref}
        id={id}
        onClick={() => setState({ isOpen: true })}
      >
        <input
          readOnly
          className="w-36 rounded border-none py-2 px-3 text-sm focus:border-none dark:bg-neutral-900"
          placeholder="YYYY.MM"
          value={value ? dayjs(value).format('YYYY.MM') : ''}
        />
        {!!value && (
          <XCircleIcon
            onClick={(e) => {
              e.stopPropagation()
              onChange('')
              setState({ isOpen: false })
            }}
            className="invisible absolute right-10 mr-2 h-5 w-5 cursor-pointer text-neutral-300 group-hover:visible dark:text-neutral-500"
          />
        )}
        <button className="rounded-r border-l border-neutral-300 bg-white p-2 group-hover:border-neutral-400 dark:border-neutral-800 dark:bg-neutral-900 dark:group-hover:border-neutral-700">
          <CalendarIcon className="h-5 w-5 text-neutral-300 group-hover:text-neutral-400 dark:text-neutral-600 dark:group-hover:text-neutral-700" />
        </button>
      </div>
      {isOpen &&
        createPortal(
          <div
            role="presentation"
            style={{
              left: ref.current!.getBoundingClientRect().left,
              top:
                window.scrollY +
                ref.current!.getBoundingClientRect().top +
                ref.current!.clientHeight
            }}
            className="absolute z-[9999]"
          >
            <div
              ref={targetRef}
              className="w-64 select-none rounded bg-white drop-shadow-xl dark:bg-neutral-800"
            >
              <div className="flex items-center justify-between border-b border-neutral-300 px-2 dark:border-neutral-700">
                <button
                  className="py-3"
                  onClick={() =>
                    setState({ date: dayjs(date).add(-1, 'year') })
                  }
                >
                  <ChevronLeftIcon className="h-4 w-4 text-neutral-400 hover:text-neutral-800" />
                </button>
                <span className="font-semibold">
                  {dayjs(date).format('YYYY')}
                </span>
                <button
                  className="py-3"
                  onClick={() => setState({ date: dayjs(date).add(1, 'year') })}
                >
                  <ChevronRightIcon className="h-4 w-4 text-neutral-400 hover:text-neutral-800" />
                </button>
              </div>
              <div className="grid grid-cols-3 gap-4 px-2 py-4">
                {Array.from({ length: 12 }).map((_, key) => (
                  <div
                    key={key}
                    className={classnames(
                      'grid h-6 cursor-pointer place-items-center rounded text-sm',
                      dayjs(value).format('YYYY-MM') ===
                        dayjs(date).format(`YYYY-${twoDigitsNumber(key + 1)}`)
                        ? 'bg-blue-500 text-white'
                        : 'hover:bg-neutral-200 dark:hover:bg-neutral-700'
                    )}
                    onClick={() => {
                      onChange(
                        dayjs(date).format(`YYYY-${twoDigitsNumber(key + 1)}`)
                      )
                      setState({ isOpen: false })
                    }}
                  >
                    {key + 1}월
                  </div>
                ))}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}

export default MonthPicker
