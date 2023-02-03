import type { FC } from 'react'
import classnames from 'classnames'

export interface Props extends ReactProps {
  label?: string
  required?: boolean
}
interface State {}

const FormItem: FC<Props> = ({ label, children, required }) => {
  return (
    <label className="block">
      {!!label && (
        <span
          className={classnames(
            'cursor-pointer text-xs font-semibold text-neutral-600 dark:text-neutral-500',
            { 'after:text-red-500 after:content-["*"]': required }
          )}
        >
          {label}
        </span>
      )}
      <div className="mt-1">{children}</div>
    </label>
  )
}

export default FormItem
