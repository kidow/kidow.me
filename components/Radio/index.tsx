import classnames from 'classnames'

export interface Props<T> {
  value: T
  onChange: (value: T) => void
  options: Array<{
    name: string
    description?: string
    value: T
    disabled?: boolean
  }>
  direction?: 'horizontal' | 'vertical'
  card?: boolean
}
interface State {}

function Radio<T>({
  value,
  onChange,
  options,
  direction = 'horizontal',
  card = false
}: Props<T>) {
  return (
    <div
      className={classnames('flex flex-wrap gap-2', {
        'flex-col': direction === 'vertical'
      })}
    >
      {options.map((item, key) => (
        <label
          key={key}
          className={classnames('relative cursor-pointer', {
            'flex gap-8 rounded border pt-1.5 pb-2 pl-1 pr-4': card,
            'dark:border-neutral-700': card && value !== item.value,
            'border-blue-500': card && value === item.value,
            'hover:bg-neutral-50 dark:hover:bg-neutral-900':
              card && !item.disabled,
            'cursor-not-allowed': card && item.disabled
          })}
        >
          <input
            type="radio"
            className={classnames(
              'cursor-pointer appearance-none before:absolute before:rounded-full before:border before:bg-white before:p-2 disabled:cursor-not-allowed dark:before:border-neutral-700 dark:before:bg-neutral-800',
              card
                ? 'before:left-2 before:top-2'
                : 'before:left-0 before:top-[3px]',
              {
                'before:border-blue-500 after:absolute after:h-2.5 after:w-2.5 after:rounded-full after:bg-blue-500':
                  value === item.value,
                'after:left-3 after:top-3': card && value === item.value,
                'after:left-1 after:top-[7px]': !card && value === item.value
              }
            )}
            checked={value === item.value}
            onChange={() => onChange(item.value)}
            disabled={item.disabled}
          />
          {card ? (
            <div className="mt-px space-y-2 break-all">
              <div className="text-sm text-neutral-800 dark:text-neutral-300">
                {item.name}
              </div>
              <div className="text-xs text-neutral-400">{item.description}</div>
            </div>
          ) : (
            <span
              className={classnames(
                'ml-6 select-none',
                item.disabled
                  ? 'cursor-not-allowed text-neutral-400 dark:text-neutral-600'
                  : 'text-neutral-600 dark:text-neutral-400'
              )}
            >
              {item.name}
            </span>
          )}
        </label>
      ))}
    </div>
  )
}

export default Radio
