import { cloneElement, useMemo } from 'react'
import type {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  ReactElement
} from 'react'
import classnames from 'classnames'

export interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const IconButton: FC<Props> = ({ children, className, ...props }) => {
  const clone = useMemo(
    () =>
      cloneElement(children as ReactElement, {
        className: 'text-neutral-400 h-4 w-4 dark:text-neutral-500'
      }),
    [children]
  )
  return (
    <button
      {...props}
      className={classnames(
        'group flex items-center justify-center rounded-full border border-neutral-300 bg-white p-2 hover:brightness-105 active:brightness-90 disabled:cursor-not-allowed dark:border-neutral-500 dark:bg-neutral-800',
        className
      )}
    >
      {clone}
    </button>
  )
}

export default IconButton
