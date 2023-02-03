import type { FC, ReactNode } from 'react'

import FormItem from './Item'

export interface Props extends ReactProps {
  title: string
  description?: ReactNode
}
interface State {
  isOpen: boolean
}

const Form: FC<Props> = ({ title, description, children }) => {
  return (
    <div className="flex gap-10">
      <div className="flex-1">
        <div className="flex items-center gap-2 text-lg font-semibold">
          {title}
        </div>
        {!!description && <div className="mt-1">{description}</div>}
      </div>
      <div className="flex-1 space-y-4">{children}</div>
    </div>
  )
}

export default Object.assign(Form, { Item: FormItem })
