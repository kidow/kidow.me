import type { FC, ReactNode } from 'react'
import classnames from 'classnames'

export interface Props extends ReactProps {
  label: ReactNode
  required?: boolean
  fullWidth?: boolean
  plain?: boolean
}
interface State {}

const CardItem: FC<Props> = ({
  children,
  label,
  required,
  fullWidth,
  plain
}) => {
  return (
    <div className="flex gap-10">
      <div
        className={classnames('min-w-[9rem] text-neutral-400', {
          "whitespace-nowrap after:text-red-500 after:content-['*']": required
        })}
      >
        <div className="inline-flex h-[42px] items-center gap-0.5">{label}</div>
      </div>
      <div className={classnames({ 'flex-1': fullWidth, 'mt-2.5': plain })}>
        {children}
      </div>
    </div>
  )
}

export default CardItem
