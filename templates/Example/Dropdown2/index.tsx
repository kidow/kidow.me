import { Dropdown2, Radio } from 'components'
import type { FC } from 'react'
import { useObjectState } from 'services'

export interface Props {}
interface State {
  position:
    | 'top-start'
    | 'top-end'
    | 'right-start'
    | 'right-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'left-start'
    | 'left-end'
}

const Dropdown2Example: FC<Props> = () => {
  const [{ position }, setState] = useObjectState<State>({
    position: 'top-start'
  })
  return (
    <div>
      <div className="flex items-center justify-center py-20">
        <Dropdown2
          position={position}
          onClick={(index) => {}}
          list={['Home', 'Resume', 'Archive', 'Memo']}
          trigger={
            <span className="rounded-md border border-neutral-300 px-4 py-2 text-neutral-700 dark:border-neutral-700 dark:text-neutral-400">
              Position
            </span>
          }
        />
      </div>
      <Radio
        value={position}
        options={[
          { value: 'top-start', name: 'Top Start' },
          { value: 'top-end', name: 'Top End' },
          { value: 'right-start', name: 'Right Start' },
          { value: 'right-end', name: 'Right End' },
          { value: 'bottom-start', name: 'Bottom Start' },
          { value: 'bottom-end', name: 'Bottom End' },
          { value: 'left-start', name: 'Left Start' },
          { value: 'left-end', name: 'Left End' }
        ]}
        onChange={(position: any) => setState({ position })}
      />
    </div>
  )
}

export default Dropdown2Example
