import type { FC } from 'react'
import classnames from 'classnames'

export interface Props {
  checked: boolean
  onChange: (checked: boolean) => void
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

const Switch: FC<Props> = ({
  checked,
  onChange,
  size = 'md',
  disabled = false
}) => {
  return (
    <label
      className={classnames('relative inline-block', {
        'h-4 w-7': size === 'sm',
        'h-6 w-10': size === 'md',
        'h-8 w-14': size === 'lg'
      })}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        className="h-0 w-0 opacity-0"
        onChange={() => {}}
      />
      <span
        onClick={() => {
          if (!disabled) onChange(!checked)
        }}
        className={classnames(
          'absolute inset-0 transition duration-300 before:absolute before:rounded-full before:bg-white before:transition before:duration-300 before:content-[""]',
          checked ? 'bg-blue-500' : 'bg-neutral-400',
          disabled ? 'cursor-not-allowed' : 'cursor-pointer',
          {
            'rounded-lg before:left-1 before:bottom-1 before:h-2 before:w-2':
              size === 'sm',
            'before:translate-x-3': size === 'sm' && checked,
            'rounded-xl before:left-1 before:bottom-1 before:h-4 before:w-4':
              size === 'md',
            'before:translate-x-4': size === 'md' && checked,
            'rounded-2xl before:left-1.5 before:bottom-1 before:h-6 before:w-6':
              size === 'lg',
            'before:translate-x-5': size === 'lg' && checked
          }
        )}
      />
    </label>
  )
}

export default Switch
