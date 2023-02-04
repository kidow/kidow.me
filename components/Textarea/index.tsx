import { useId } from 'react'
import type {
  FC,
  DetailedHTMLProps,
  KeyboardEvent,
  TextareaHTMLAttributes,
  ReactNode
} from 'react'
import classnames from 'classnames'

export interface Props
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  onEnter?: () => void
  info?: ReactNode
  error?: ReactNode
  float?: boolean
  fullWidth?: boolean
}
interface State {}

const Textarea: FC<Props> = ({
  onEnter,
  info,
  error,
  fullWidth = false,
  float = true,
  placeholder,
  ...props
}) => {
  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !!onEnter) onEnter()
  }
  const id = useId()
  return (
    <div
      className={classnames('inline-block', {
        'w-full': fullWidth,
        relative: !!placeholder
      })}
    >
      <textarea
        {...props}
        id={props.id || id}
        onKeyDown={onKeyDown}
        className={classnames(
          'rounded border bg-white p-2 read-only:cursor-default focus:outline-none disabled:cursor-not-allowed dark:bg-neutral-800',
          !!error
            ? 'border-red-500'
            : 'border-neutral-300 dark:border-neutral-700',
          {
            'w-full': fullWidth,
            'bg-neutral-100': props.disabled,
            'peer placeholder-transparent': !!placeholder && float
          }
        )}
        placeholder={placeholder}
        spellCheck={false}
      />
      {!!placeholder && float && (
        <label
          htmlFor={props.id || id}
          className={classnames(
            'absolute -top-6 left-0 cursor-text select-none truncate text-sm text-neutral-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400 peer-empty:left-3 peer-focus:left-0 peer-focus:-top-6 peer-focus:w-full peer-focus:cursor-default peer-focus:text-sm peer-focus:text-neutral-600 dark:text-neutral-400 dark:peer-focus:text-neutral-400',
            !!props.value ? 'left-0' : 'left-3'
          )}
        >
          {placeholder}
        </label>
      )}
      {(!!error || !!info) && (
        <p
          className={classnames(
            'mt-1 text-xs',
            !!error ? 'text-red-500' : !!info ? 'text-neutral-400' : undefined
          )}
        >
          {error || info}
        </p>
      )}
    </div>
  )
}

export default Textarea
