import { Button } from 'components'
import { Modal } from 'containers'
import type { FC } from 'react'
import { useObjectState } from 'services'

export interface Props {}
interface State {
  isOpen: boolean
}

const ModalExample: FC<Props> = () => {
  const [{ isOpen }, setState] = useObjectState<State>({ isOpen: false })
  return (
    <div className="mt-4">
      <Button onClick={() => setState({ isOpen: true })}>Test</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setState({ isOpen: false })}
        title="Title"
        description="description"
        footer="Footer"
      >
        children
      </Modal>
    </div>
  )
}

export default ModalExample
