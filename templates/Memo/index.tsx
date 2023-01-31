import { Modal } from 'containers'
import type { FC } from 'react'
import { useObjectState } from 'services'

export interface Props {}
interface State {
  isOpen: boolean
}

const Memo: FC<Props> = () => {
  const [{ isOpen }, setState] = useObjectState<State>({ isOpen: false })
  return (
    <>
      <button onClick={() => setState({ isOpen: true })}>Open</button>
      <Modal
        title="Good"
        isOpen={isOpen}
        onClose={() => setState({ isOpen: false })}
      >
        asd
      </Modal>
    </>
  )
}

export default Memo
