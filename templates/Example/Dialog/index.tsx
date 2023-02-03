import { Button } from 'components'
import { Dialog } from 'containers'
import { useRef } from 'react'
import type { FC } from 'react'

export interface Props {}
interface State {}

const DialogExample: FC<Props> = () => {
  const ref = useRef<HTMLDialogElement>(null)
  return (
    <div className="mt-4">
      <Button onClick={() => ref.current.showModal()}>Test</Button>
      <Dialog title="Title" description="description" footer="Footer" ref={ref}>
        Dialog
      </Dialog>
    </div>
  )
}

export default DialogExample
