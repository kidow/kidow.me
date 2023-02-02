import React from 'react'
import type { FC } from 'react'

export interface Props {}
interface State {}

const DialogShowModal: FC<Props> = () => {
  const ref = React.useRef<HTMLDialogElement>(null)
  return (
    <div className="flex h-40 w-full items-center justify-center rounded bg-neutral-200">
      <button
        onClick={() => ref.current?.showModal()}
        className="rounded border border-neutral-700 py-2 px-3 text-neutral-900"
      >
        Open
      </button>
      <dialog
        ref={ref}
        onClick={(e) => {
          if (e.target === ref.current) ref.current?.close()
        }}
        style={{ padding: 0 }}
      >
        <div style={{ height: '100%' }}>안녕하세요!</div>
      </dialog>
    </div>
  )
}

export default DialogShowModal
