import React from 'react'
import type { FC } from 'react'

import Custom from './Custom'
import CustomView from './CustomView'
import Show from './Show'
import ShowModal from './ShowModal'

export interface Props {}
interface State {}

const Dialog: FC<Props> = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div className="flex h-40 w-full items-center justify-center rounded bg-neutral-200">
      <button
        onClick={() => setIsOpen(true)}
        className="rounded border border-neutral-700 py-2 px-3 text-neutral-900"
      >
        Open
      </button>
      <dialog open={isOpen}>
        <p>Hi!</p>
      </dialog>
    </div>
  )
}

export default Object.assign(Dialog, { Custom, CustomView, Show, ShowModal })
