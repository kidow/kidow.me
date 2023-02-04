import { Tabs } from 'components'
import type { FC } from 'react'
import { useObjectState } from 'services'

export interface Props {}
interface State {
  value: number
}

const TabsExample: FC<Props> = () => {
  const [{ value }, setState] = useObjectState<State>({ value: 0 })
  return (
    <div className="mt-4 space-y-4">
      <Tabs
        value={value}
        list={['Components', 'Hooks', 'Utils', 'Settings']}
        onChange={(value) => setState({ value })}
        size="xs"
      />
      <Tabs
        value={value}
        list={['Components', 'Hooks', 'Utils', 'Settings']}
        onChange={(value) => setState({ value })}
        size="sm"
      />
      <Tabs
        value={value}
        list={['Components', 'Hooks', 'Utils', 'Settings']}
        onChange={(value) => setState({ value })}
        size="md"
      />
    </div>
  )
}

export default TabsExample
