import React from 'react'
import type { FC } from 'react'
import DialogCustom from '../Custom'

interface State {}

const DialogCustomView: FC = () => {
  const ref = React.useRef<HTMLDialogElement>(null)
  return (
    <div className="flex h-40 w-full items-center justify-center rounded bg-neutral-200">
      <button
        onClick={() => ref.current?.showModal()}
        className="rounded border border-neutral-700 py-2 px-3 text-neutral-900"
      >
        Open
      </button>
      <DialogCustom
        ref={ref}
        maxWidth="max-w-xl"
        title="Title"
        description="Description"
      >
        Completed Dialog
      </DialogCustom>
    </div>
  )
}

export default DialogCustomView
