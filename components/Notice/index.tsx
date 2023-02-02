import type { FC, ReactNode } from 'react'
import classnames from 'classnames'
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/solid'

export interface Props {
  content: string
  type?: 'success' | 'info' | 'warn' | 'danger'
  caption?: ReactNode
}
interface State {}

const Notice: FC<Props> = ({ type, content, caption }) => {
  return (
    <div
      className={classnames(
        'rounded-l rounded-r-md border border-l-4 p-3',
        !!type
          ? 'flex items-center gap-2'
          : 'border-neutral-300 border-l-neutral-500 bg-neutral-50',
        {
          'border-green-300 border-l-green-500 bg-green-50': type === 'success',
          'border-blue-300 border-l-blue-500 bg-blue-50': type === 'info',
          'border-amber-300 border-l-amber-500 bg-amber-50': type === 'warn',
          'border-red-300 border-l-red-500 bg-red-50': type === 'danger'
        }
      )}
    >
      {type === 'success' && (
        <CheckCircleIcon className="h-5 w-5 text-green-500" />
      )}
      {type === 'info' && (
        <InformationCircleIcon className="h-5 w-5 text-blue-500" />
      )}
      {type === 'warn' && (
        <ExclamationTriangleIcon className="h-5 w-5 text-amber-500" />
      )}
      {type === 'danger' && (
        <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
      )}
      <div
        className={classnames(
          'text-sm',
          !!type ? 'flex-1' : 'text-neutral-700',
          {
            'text-green-700': type === 'success',
            'text-blue-700': type === 'info',
            'text-amber-700': type === 'warn',
            'text-red-700': type === 'danger'
          }
        )}
      >
        {content}
      </div>
      {caption}
    </div>
  )
}

export default Notice
