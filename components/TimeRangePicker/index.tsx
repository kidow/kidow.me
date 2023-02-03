import { XCircleIcon } from '@heroicons/react/24/solid'
import { Button } from 'components'
import classnames from 'classnames'
import { useEffect, useRef, useId } from 'react'
import type { FC, ReactNode } from 'react'
import { twoDigitsNumber, useObjectState, useOnClickOutside } from 'services'
import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import { createPortal } from 'react-dom'

dayjs.extend(isSameOrBefore)

export interface Props {
  startTime: string
  endTime: string
  onChange: (startTime: string, endTime: string) => void
  error?: ReactNode
}
interface State {
  isOpen: boolean
  tab: 'start' | 'end'
  startHour: string
  startMinute: string
  endHour: string
  endMinute: string
}

const TimeRangePicker: FC<Props> = ({
  startTime,
  endTime,
  onChange,
  error
}) => {
  const [
    { isOpen, tab, startHour, startMinute, endHour, endMinute },
    setState
  ] = useObjectState<State>({
    isOpen: false,
    tab: 'start',
    startHour: startTime ? startTime.split(':')[0] : '00',
    startMinute: startTime ? startTime.split(':')[1] : '00',
    endHour: endTime ? endTime.split(':')[0] : '00',
    endMinute: endTime ? endTime.split(':')[1] : '00'
  })
  const ref = useRef<HTMLDivElement>(null)
  const hourRef = useRef<HTMLDivElement>(null)
  const minuteRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)
  const id = useId()

  const onApply = () => {
    if (
      dayjs(`2022-02-08T${endHour}:${endMinute}:00`).isSameOrBefore(
        `2022-02-08T${startHour}:${startMinute}`
      )
    ) {
      alert('시작 시간이 종료 시간보다 뒤에 있거나 같습니다.')
      return
    }
    onChange(`${startHour}:${startMinute}`, `${endHour}:${endMinute}`)
    setState({ isOpen: false })
  }

  useOnClickOutside(targetRef, () => setState({ isOpen: false }), id)
  useEffect(() => {
    if (!isOpen) return
    if (hourRef.current)
      hourRef.current.scrollTop =
        40 * Number(tab === 'start' ? startHour : endHour)
    if (minuteRef.current)
      minuteRef.current.scrollTop =
        40 * Number(tab === 'start' ? startMinute : endMinute)
  }, [isOpen, tab])
  return (
    <div className="inline-block">
      <div
        ref={ref}
        id={id}
        className={classnames(
          'flex items-center justify-between gap-2 rounded border border-neutral-200 bg-white px-2 py-1 dark:border-neutral-700 dark:bg-neutral-800',
          !!error ? 'border-red-500' : 'hover:border-neutral-500'
        )}
      >
        <button
          onClick={() => setState({ tab: 'start', isOpen: true })}
          className={classnames(
            'rounded py-1 px-2 hover:bg-neutral-100 dark:hover:bg-neutral-700',
            !!startTime
              ? 'text-black'
              : 'text-neutral-400 dark:text-neutral-100'
          )}
        >
          {startTime || '00:00'}
        </button>
        <span className="cursor-default text-neutral-400">~</span>
        <button
          onClick={() => setState({ tab: 'end', isOpen: true })}
          className={classnames(
            'rounded py-1 px-2 hover:bg-neutral-100 dark:hover:bg-neutral-700',
            !!endTime ? 'text-black' : 'text-neutral-400 dark:text-neutral-100'
          )}
        >
          {endTime || '00:00'}
        </button>
      </div>
      <div className="mt-1 text-xs text-red-500">{error}</div>
      {isOpen &&
        createPortal(
          <div
            role="presentation"
            style={{
              left: ref.current?.getBoundingClientRect().left || 0,
              top:
                window.scrollY +
                (ref.current?.getBoundingClientRect().top || 0) +
                (ref.current?.clientHeight || 0)
            }}
            className="absolute z-[9999]"
          >
            <div
              ref={targetRef}
              className="z-[9999] space-y-4 rounded bg-white p-4 drop-shadow-xl dark:bg-neutral-800"
            >
              {/* Tab */}
              <div className="flex rounded-lg bg-neutral-200 p-1 text-sm dark:bg-neutral-700">
                <div
                  className={classnames(
                    'flex w-36 items-center justify-between gap-8 rounded-lg py-2 px-3',
                    tab === 'start'
                      ? 'bg-white dark:bg-neutral-800'
                      : 'cursor-pointer'
                  )}
                  onClick={() => {
                    if (tab === 'end') setState({ tab: 'start' })
                  }}
                >
                  <div
                    className={classnames({
                      'font-bold': tab === 'start'
                    })}
                  >
                    <div>시작</div>
                    <div
                      className={classnames({
                        'text-blue-500': tab === 'start'
                      })}
                    >
                      {startHour}:{startMinute}
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      setState({ startHour: '00', startMinute: '00' })
                    }
                  >
                    <XCircleIcon
                      className={classnames(
                        tab === 'start'
                          ? 'h-6 w-6 cursor-pointer text-neutral-200 hover:text-neutral-400 dark:text-neutral-600'
                          : 'invisible'
                      )}
                    />
                  </button>
                </div>
                <div
                  className={classnames(
                    'flex w-36 items-center justify-between gap-8 rounded-lg py-2 px-3',
                    tab === 'end'
                      ? 'bg-white dark:bg-neutral-800'
                      : 'cursor-pointer'
                  )}
                  onClick={() => {
                    if (tab === 'start') setState({ tab: 'end' })
                  }}
                >
                  <div
                    className={classnames({
                      'font-bold': tab === 'end'
                    })}
                  >
                    <div>종료</div>
                    <div
                      className={classnames({
                        'text-blue-500': tab === 'end'
                      })}
                    >
                      {endHour}:{endMinute}
                    </div>
                  </div>
                  <button
                    onClick={() => setState({ endHour: '00', endMinute: '00' })}
                  >
                    <XCircleIcon
                      className={classnames(
                        tab === 'end'
                          ? 'h-6 w-6 cursor-pointer text-neutral-200 hover:text-neutral-400 dark:text-neutral-600'
                          : 'invisible'
                      )}
                    />
                  </button>
                </div>
              </div>

              {/* Picker */}
              <div className="relative flex justify-center text-neutral-500">
                <div
                  ref={hourRef}
                  className="z-10 h-[200px] overflow-auto overscroll-none py-20 scrollbar-hide"
                >
                  {Array.from({ length: 24 }, (_, i) => twoDigitsNumber(i)).map(
                    (hour) => (
                      <div
                        key={hour}
                        onClick={() => {
                          const currentMinuteTop =
                            minuteRef.current?.scrollTop || 0
                          setState(
                            tab === 'start'
                              ? { startHour: hour }
                              : { endHour: hour },
                            () => {
                              if (hourRef.current)
                                hourRef.current.scrollTop = 40 * Number(hour)
                              if (minuteRef.current)
                                minuteRef.current.scrollTop = currentMinuteTop
                            }
                          )
                        }}
                        className={classnames(
                          'flex h-10 w-10 cursor-pointer items-center justify-center',
                          {
                            'text-blue-500':
                              (tab === 'start' && startHour === hour) ||
                              (tab === 'end' && endHour === hour)
                          }
                        )}
                      >
                        {hour}
                      </div>
                    )
                  )}
                </div>
                <div
                  ref={minuteRef}
                  className="z-10 h-[200px] overflow-auto overscroll-none py-20 scrollbar-hide"
                >
                  {Array.from({ length: 6 }, (_, i) =>
                    twoDigitsNumber(10 * i)
                  ).map((minute, index) => (
                    <div
                      key={minute}
                      onClick={() => {
                        const currentHourTop = hourRef.current?.scrollTop || 0
                        setState(
                          tab === 'start'
                            ? { startMinute: minute }
                            : { endMinute: minute },
                          () => {
                            if (minuteRef.current)
                              minuteRef.current.scrollTop = 40 * Number(index)
                            if (hourRef.current)
                              hourRef.current.scrollTop = currentHourTop
                          }
                        )
                      }}
                      className={classnames(
                        'flex h-10 w-10 cursor-pointer items-center justify-center',
                        {
                          'text-blue-500':
                            (tab === 'start' && startMinute === minute) ||
                            (tab === 'end' && endMinute === minute)
                        }
                      )}
                    >
                      {minute}
                    </div>
                  ))}
                </div>
                <div className="absolute top-20 h-10 w-full rounded-lg bg-neutral-100 dark:bg-neutral-900" />
              </div>

              {/* Button */}
              <div className="flex justify-center">
                <Button theme="primary" size="sm" onClick={onApply}>
                  적용
                </Button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  )
}

export default TimeRangePicker
