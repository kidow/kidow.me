import type { FC, ReactNode } from 'react'
import classnames from 'classnames'
import type { Argument } from 'classnames'

import CardComponent from './Component'
import CardItem from './Item'
import CardLink from './Link'
import CardList from './List'

export interface Props extends ReactProps {
  title?: ReactNode
  caption?: ReactNode
  footer?: ReactNode
  border?: boolean
  padding?: boolean
  className?: Argument
}
interface State {}

const Card: FC<Props> = ({
  title,
  caption,
  footer,
  border,
  padding,
  className,
  children
}) => {
  return (
    <section className={classnames('bg-white shadow-md', { border: border })}>
      {!!title && (
        <div className="flex items-center justify-between p-6">
          <div className="font-bold">{title}</div>
          {!!caption && (
            <div className="text-xs text-neutral-400">{caption}</div>
          )}
        </div>
      )}
      {!!children && (
        <div
          className={classnames(
            'relative',
            footer ? 'border-y' : 'border-t',
            { 'py-10 px-8': padding },
            className
          )}
        >
          {children}
        </div>
      )}
      {!!footer && <div className="py-4 px-8">{footer}</div>}
    </section>
  )
}

export default Object.assign(Card, {
  Link: CardLink,
  List: CardList,
  Component: CardComponent,
  Item: CardItem
})
