import { Button } from 'components'
import type { FC } from 'react'
import { useObjectState } from 'services'
import { Drawer } from 'containers'

export interface Props {}
interface State {
  isOpen: boolean
  position: TPosition
}

const DrawerExample: FC<Props> = () => {
  const [{ isOpen, position }, setState] = useObjectState<State>({
    isOpen: false,
    position: 'right'
  })
  return (
    <>
      <div className="mt-4 flex gap-4">
        <Button onClick={() => setState({ isOpen: true, position: 'top' })}>
          Top
        </Button>
        <Button onClick={() => setState({ isOpen: true, position: 'right' })}>
          Right
        </Button>
        <Button onClick={() => setState({ isOpen: true, position: 'bottom' })}>
          Bottom
        </Button>
        <Button onClick={() => setState({ isOpen: true, position: 'left' })}>
          Left
        </Button>
      </div>
      {isOpen && (
        <Drawer
          position={position}
          isOpen={isOpen}
          onClose={() => setState({ isOpen: false })}
        >
          Drawer
        </Drawer>
      )}
    </>
  )
}

export default DrawerExample
