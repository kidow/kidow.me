import { useEffect } from 'react'
import type { FC } from 'react'
import classnames from 'classnames'
import { ExclamationCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useObjectState } from 'services'

export interface Props extends ReactProps {
  type: 'success' | 'info' | 'warn' | 'error'
  close?: boolean
  message: string
}
interface State {
  isClosed: boolean
  isDisplay: boolean
}

const Alert: FC<Props> = ({ type, message, close, children }) => {
  const [{ isClosed, isDisplay }, setState] = useObjectState<State>({
    isClosed: false,
    isDisplay: true
  })
  useEffect(() => {
    if (isClosed) {
      setTimeout(() => setState({ isDisplay: false }), 150)
    }
  }, [isClosed])
  if (!isDisplay) return null
  return (
    <div
      className={classnames('flex justify-between border p-6', {
        'bg-red-50': type === 'error',
        'bg-sky-50': type === 'success',
        'bg-orange-50': type === 'warn',
        'bg-neutral-50': type === 'info',
        'transition-opacity duration-150': close,
        'opacity-100': close && !isClosed,
        'opacity-0': close && isClosed
      })}
    >
      <div className="flex items-start gap-3">
        <ExclamationCircleIcon
          className={classnames('h-5 w-5', {
            'text-red-500': type === 'error',
            'text-sky-500': type === 'success',
            'text-orange-500': type === 'warn',
            'text-neutral-500': type === 'info'
          })}
        />

        <div className="text-sm">
          {message}
          {children}
        </div>
      </div>
      {close && !isClosed && (
        <XMarkIcon
          onClick={() => setState({ isClosed: true })}
          className="h-5 w-5 cursor-pointer text-neutral-700"
        />
      )}
    </div>
  )
}

export default Alert
